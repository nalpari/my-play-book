import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale'

export default function Datepicker() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale={ko}
        dateFormat="yyyy-MM-dd"
        closeOnScroll={true}
        placeholderText="날짜를 선택하라우~"
        className="border border-sky-500"
      />
      ~
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        locale={ko}
        dateFormat="yyyy-MM-dd"
        closeOnScroll={true}
        placeholderText="날짜를 선택하라우~"
        className="border border-sky-500"
      />
    </>
  )
}
