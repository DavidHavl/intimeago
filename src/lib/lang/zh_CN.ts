const ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年']

// @ts-ignore
export default function (diff: number, idx: number): [string, string] {
  if (idx === 0) return ['刚刚', '片刻后']
  const unit = ZH_CN[~~(idx / 2)]
  return [`${diff} ${unit}前`, `${diff} ${unit}后`]
}
