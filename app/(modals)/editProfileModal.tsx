import { BaseCard } from '@/components/BaseCard'
import { Button, ButtonsContainer, Touchable } from '@/components/Button'
import { InputField } from '@/components/InputField'
import { KeyboardView } from '@/components/KeyboardView'
import { ModalBase, ModalContainer } from '@/components/ModalContainers'
import { Separator } from '@/components/Separator'
import { BodyText, Title } from '@/components/Text'
import { Icon, IconEnum } from '@/components/icons/Icons'
import { spacing } from '@/theme/spacing'
import { closeModal } from '@/utils/modalsUtils'
import { ButtonType } from '@/utils/types'
import { useState } from 'react'
import styled from 'styled-components/native'
import * as ImagePicker from 'expo-image-picker'
import { ProfileAvatar } from '@/components/ProfileAvatar'
import { resetAsyncStorage, saveToAsyncStorage } from '@/utils/asyncStorageUtils'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { selectAuthState, setUserCredentials } from '@/state/user/userSlice'
import { showAlert } from '@/utils/navigationUtils'
import { color } from '@/theme/color'
import { LoadingIndicator } from '@/components/LoadingIndicator'
import { useFirebase } from '@/firebase/hooks/useFirebase'

export default function EditProfileModal() {
  const user = useAppSelector(selectAuthState)
  const dispatch = useAppDispatch()
  const { updateUserCredentials } = useFirebase()
  const [form, setForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    profilePicture: '',
  })
  // console.log('edit usermodal', user)

  const saveChanges = async () => {
    try {
      await saveToAsyncStorage(user.uid, {
        profilePicture: form.profilePicture,
      })
      await updateUserCredentials(form.firstName, form.lastName, form.profilePicture)
      closeModal()
    } catch (error) {
      showAlert(String(error))
    }
  }
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled) {
        setForm({ ...form, profilePicture: result.assets[0].uri })
        dispatch(setUserCredentials({ ...user, profilePicture: form.profilePicture }))
      }
    } catch (error) {
      showAlert(String(error))
    }
  }

  return (
    <KeyboardView>
      <ModalBase>
        <ModalContainer>
          <ModalBaseCard backgroundColor={color.lightGreen}>
            <Title>Edit your profile.</Title>
            <Touchable onPress={closeModal}>
              <Icon icon={IconEnum.xIcon} />
            </Touchable>
          </ModalBaseCard>

          <Separator size={20} />
          <BaseCard backgroundColor={color.lightGreen}>
            <Section row>
              <ProfileAvatar />
              <Touchable onPress={pickImage}>
                <MarginText bold>Choose your picture.</MarginText>
              </Touchable>
            </Section>
            <InputField
              label="First Name."
              value={form.firstName}
              placeholder="First Name"
              onChangeText={(e) => {
                setForm({ ...form, firstName: e })
              }}
            />
            <InputField
              label="Last Name."
              value={form.lastName}
              placeholder="Last Name"
              onChangeText={(e) => {
                setForm({ ...form, lastName: e })
              }}
            />
            <Separator size={20} />
          </BaseCard>
          <Separator size={20} />

          <ButtonsContainer>
            <Button
              label="Reset"
              type={ButtonType.primary}
              icon={IconEnum.check}
              onPress={() => {
                resetAsyncStorage()
                closeModal()
              }}
            />
            <Button label="Save" type={ButtonType.primary} icon={IconEnum.check} onPress={saveChanges} />
            <LoadingIndicator status={user.authStatus} isModal={true} />
          </ButtonsContainer>
        </ModalContainer>
      </ModalBase>
    </KeyboardView>
  )
}

export const ModalBaseCard = styled(BaseCard)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.small}px;
`
const MarginText = styled(BodyText)`
  margin-left: ${spacing.small}px;
  text-decoration: underline;
  text-underline-offset: 10px;
`
const Section = styled.View<{ row: boolean }>`
  flex-direction: ${(props: { row: boolean }) => (props.row ? 'row' : 'column')};
  justify-content: ${(props: { row: boolean }) => (props.row ? 'start' : 'center')};
  align-items: ${(props: { row: boolean }) => (props.row ? 'center' : 'start')};
  margin: ${spacing.small}px;
`
