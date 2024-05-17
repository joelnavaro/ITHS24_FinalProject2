import { FC, useEffect, useState } from 'react'
import styled from 'styled-components/native'

export const InputDate: FC<{
  label: string
  onChange: (value: string) => void
}> = ({ label, onChange }) => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  useEffect(() => {
    if (day && month && year) {
      const date = new Date(Number(year), Number(month) - 1, Number(day))
      onChange(date.getTime().toString())
    } else {
      onChange('')
    }
  }, [day, month, year])
  return (
    <Container>
      <Label>{label}</Label>
      <InputRow>
        <InputField placeholder="Day" keyboardType="numeric" value={day} onChangeText={setDay} />
        <InputField placeholder="Month" keyboardType="numeric" value={month} onChangeText={setMonth} />
        <InputField placeholder="Year" keyboardType="numeric" value={year} onChangeText={setYear} />
      </InputRow>
    </Container>
  )
}

const Container = styled.View`
  margin: 16px;
`

const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`

const InputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const InputField = styled.TextInput`
  border: 1px solid #ccc;
  padding: 8px;
  width: 30%;
  text-align: center;
`
