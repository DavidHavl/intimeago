import test from 'ava'

import { format } from './index'

test('format', (t) => {
  const dateObj = new Date()
  dateObj.setTime(new Date().getTime() + 30900)
  t.is(format(dateObj), 'in 30 seconds')
})
