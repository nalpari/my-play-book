import dayjs from 'dayjs'
import { useState } from 'react'

const useDatepicker = (dayObj, fmt, type) => {
  const [fromDt, setFromDt] = useState(dayjs(dayObj).format(fmt))
  const [toDt, setToDt] = useState(dayjs(dayObj).add(1, 'month').format(fmt))

  const addThreedays = () => {
    const dayStr = dayjs(fromDt).add(3, 'day').format(fmt)
    let fn = null
    type ? (fn = setToDt) : (fn = setFromDt)
    return fn(dayStr)
  }

  const addFivedays = () => {
    const dayStr = dayjs(fromDt).add(5, 'day').format(fmt)
    let fn = null
    type ? (fn = setToDt) : (fn = setFromDt)
    return fn(dayStr)
  }

  const addOneweek = () => {
    const dayStr = dayjs(fromDt).add(1, 'week').format(fmt)
    let fn = null
    type ? (fn = setToDt) : (fn = setFromDt)
    return fn(dayStr)
  }

  const addOnemonth = () => {
    const dayStr = dayjs(fromDt).add(1, 'month').format(fmt)
    let fn = null
    type ? (fn = setToDt) : (fn = setFromDt)
    return fn(dayStr)
  }

  const addThreemonths = () => {
    const dayStr = dayjs(fromDt).add(3, 'month').format(fmt)
    let fn = null
    type ? (fn = setToDt) : (fn = setFromDt)
    return fn(dayStr)
  }

  const addSixmonths = () => {
    const dayStr = dayjs(fromDt).add(6, 'month').format(fmt)
    let fn = null
    type ? (fn = setToDt) : (fn = setFromDt)
    return fn(dayStr)
  }

  const addOneyear = () => {
    const dayStr = dayjs(fromDt).add(1, 'year').format(fmt)
    let fn = null
    type ? (fn = setToDt) : (fn = setFromDt)
    return fn(dayStr)
  }

  return {
    fromDt,
    setFromDt,
    toDt,
    setToDt,
    addThreedays,
    addFivedays,
    addOneweek,
    addOnemonth,
    addThreemonths,
    addSixmonths,
    addOneyear,
  }
}

export default useDatepicker
