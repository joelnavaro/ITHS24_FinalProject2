import { spacing } from '@/theme/spacing'
import { FC, useState } from 'react'
import styled from 'styled-components/native'
import { BodyText } from './Text'
import { Touchable } from './Button'
import * as ImagePicker from 'expo-image-picker'
import { showAlert } from '@/utils/navigationUtils'
import { color } from '@/theme/color'
import { Camera } from './icons/Camera'

export const PicturePicker: FC<{ setImage: (image: string) => void }> = ({ setImage }) => {
  const [photo, setPhoto] = useState<string>('')
  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled) {
        setImage(result.assets[0].uri)
        setPhoto(result.assets[0].uri)
      }
    } catch (error) {
      showAlert(String(error))
    }
  }

  return (
    <Section row>
      {photo !== '' ? (
        <StyledImage source={{ uri: photo }} />
      ) : (
        <IconContainer>
          <Camera height={50} width={50} color={color.primary} />
        </IconContainer>
      )}
      <Touchable onPress={pickImage}>
        <MarginText bold>Add a picture.</MarginText>
      </Touchable>
    </Section>
  )
}
const StyledImage = styled.Image<{ route?: boolean; size?: number }>`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${color.primary};
`
const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  border-width: ${(props: { route: boolean }) => (props.route ? 0 : 2)}px;
  border-color: ${color.black};
`

const Section = styled.View<{ row: boolean }>`
  flex-direction: ${(props: { row: boolean }) => (props.row ? 'row' : 'column')};
  justify-content: ${(props: { row: boolean }) => (props.row ? 'start' : 'center')};
  align-items: ${(props: { row: boolean }) => (props.row ? 'center' : 'start')};
  margin: ${spacing.small}px;
`
const MarginText = styled(BodyText)`
  margin-left: ${spacing.small}px;
  text-decoration: underline;
  text-underline-offset: 10px;
`
