/**
 * @author     David Havl info@davidhavl.com
 * @license    MIT
 */
import { nextInterval } from '../../src/lib/utils/date'
import test from 'ava'

test('nextInterval', (t) => {
  t.is(nextInterval(1), 1) // sec
  t.is(nextInterval(6), 1) // sec
  t.is(nextInterval(11), 1) // sec
  t.is(nextInterval(30), 1) // sec
  t.is(nextInterval(60), 1) // minute
  t.is(nextInterval(61), 1) // minute
  t.is(nextInterval(83), 23) // minute

  t.is(nextInterval(110), 50) // minute
  t.is(nextInterval(119), 59) // minute
  t.is(nextInterval(120), 1) // minute
  t.is(nextInterval(121), 1) // minute
  t.is(nextInterval(122), 2) // minute
  t.is(nextInterval(130), 10) // minute

  t.is(nextInterval(2 * 3600 + 100), 100) // hour

  t.is(nextInterval(3600 * 24 + 1), 1) // day
  t.is(nextInterval(3600 * 24 + 3600), 3600) // day
})
