const EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']

// @ts-ignore
export default function (diff: number, idx: number): [string, string] {
  let unit = EN_US[Math.floor(idx / 2)]
  if (diff > 1) unit += 's'
  if (idx === 0) return ['just now', `in ${diff} ${unit}`]
  return [`${diff} ${unit} ago`, `in ${diff} ${unit}`]
}
