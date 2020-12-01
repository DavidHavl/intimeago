import test from 'ava'

import { format } from '../src/lib'

test('format', (t) => {
  const dateObj = new Date()
  dateObj.setTime(new Date().getTime() + 30900)
  t.is(format(dateObj), 'in 30 seconds')

  dateObj.setTime(new Date().getTime() + 60000)
  t.is(format(dateObj), 'in 1 minute')

  dateObj.setTime(new Date().getTime() + 61000)
  t.is(format(dateObj), 'in 1 minute')

  dateObj.setTime(new Date().getTime() + 119000)
  t.is(format(dateObj), 'in 1 minute')

  dateObj.setTime(new Date().getTime() + 120000)
  t.is(format(dateObj), 'in 2 minutes')

  dateObj.setTime(new Date().getTime() + 120001)
  t.is(format(dateObj), 'in 2 minutes')

  dateObj.setTime(new Date().getTime() + 121000)
  t.is(format(dateObj), 'in 2 minutes')

  dateObj.setTime(new Date().getTime() + 150000)
  t.is(format(dateObj), 'in 2 minutes')

  dateObj.setTime(new Date().getTime() + 3599000)
  t.is(format(dateObj), 'in 59 minutes')

  dateObj.setTime(new Date().getTime() + 3600000)
  t.is(format(dateObj), 'in 1 hour')

  dateObj.setTime(new Date().getTime() + 3601000)
  t.is(format(dateObj), 'in 1 hour')

  dateObj.setTime(new Date().getTime() + 7200000)
  t.is(format(dateObj), 'in 2 hours')

  dateObj.setTime(new Date().getTime() + (3600 * 24 * 1000))
  t.is(format(dateObj), 'in 1 day')
})
