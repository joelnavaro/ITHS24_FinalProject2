import { color } from '@/theme/color'
import { FC, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components/native'

export const InputDate: FC<{
  label: string
  onChange: (value: string) => void
}> = ({ label, onChange }) => {
  const [dateTest, setDateTest] = useState({ day: '', month: '', year: '' })

  const handleInputChange = useCallback((field: string, value: string) => {
    setDateTest((prevState) => ({
      ...prevState,
      [field]: value,
    }))
  }, [])

  useEffect(() => {
    const { day, month, year } = dateTest
    if (day && month && year && year.length === 4) {
      const date = new Date(Number(year), Number(month) - 1, Number(day))
      onChange(date.getTime().toString())
    }
  }, [dateTest, onChange])

  return (
    <Container>
      <Label>{label}</Label>
      <InputRow>
        <InputField
          placeholder="Day"
          keyboardType="numeric"
          value={dateTest.day}
          onChangeText={(value: string) => handleInputChange('day', value)}
          maxLength={2}
        />
        <InputField
          placeholder="Month"
          keyboardType="numeric"
          value={dateTest.month}
          onChangeText={(value: string) => handleInputChange('month', value)}
          maxLength={2}
        />
        <InputField
          placeholder="Year"
          keyboardType="numeric"
          value={dateTest.year}
          onChangeText={(value: string) => handleInputChange('year', value)}
          maxLength={4}
        />
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
  border: 1px solid ${color.darkSlate};
  padding: 8px;
  width: 30%;
  text-align: center;
`
