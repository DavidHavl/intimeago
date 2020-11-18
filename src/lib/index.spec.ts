import test from 'ava'

import { format } from './index'

test('toString', (t) => {
  const dateObj = new Date()
  dateObj.setTime(new Date().getTime() + 30000)
  t.is(format(dateObj), 'in 30 seconds')
})
