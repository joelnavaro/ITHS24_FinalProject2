import { color } from '@/theme/color'
import { FC, useEffect, useState, useCallback } from 'react'
import styled from 'styled-components/native'

export const InputDate: FC<{
  label: string
  onChange: (value: string) => void
}> = ({ label, onChange }) => {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [isFilled, setIsFilled] = useState(false)

  const handleChangeDay = (text: string) => {
    if (text.length <= 2) setDay(text)
  }

  const handleChangeMonth = (text: string) => {
    if (text.length <= 2) setMonth(text)
  }

  const handleChangeYear = (text: string) => {
    if (text.length <= 4) setYear(text)
  }

  const memoizedOnChange = useCallback(onChange, [])

  useEffect(() => {
    if (day && month && year) {
      const date = new Date(Number(year), Number(month) - 1, Number(day))
      memoizedOnChange(date.getTime().toString())
    } else {
      memoizedOnChange('')
    }
    setIsFilled(!!(day || month || year))
  }, [day, month, year, memoizedOnChange])

  return (
    <Container>
      <Label>{label}</Label>
      <InputRow>
        <InputField
          placeholder="Day"
          keyboardType="numeric"
          value={day}
          onChangeText={handleChangeDay}
          isFilled={isFilled}
        />
        <InputField
          placeholder="Month"
          keyboardType="numeric"
          value={month}
          onChangeText={handleChangeMonth}
          isFilled={isFilled}
        />
        <InputField
          placeholder="Year"
          keyboardType="numeric"
          value={year}
          onChangeText={handleChangeYear}
          isFilled={isFilled}
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

const InputField = styled.TextInput<{ isFilled: boolean }>`
  border: 1px solid ${(props: { isFilled: boolean }) => (props.isFilled ? `${color.darkSlate}` : '#ccc')};
  padding: 8px;
  width: 30%;
  text-align: center;
`
