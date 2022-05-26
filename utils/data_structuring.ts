import { policiesAll } from '../MOCK/policies'

// fucntion helper for maping sub-policies index of arrays into main-policies objects

export const mapPoclicyToArr = (arr: any) => {
  let policyArr: any = {}
  arr.map((x: any, i: any) => {
    x.tags.map((t: any) => {
      policyArr[t] = [...(policyArr[t] ?? []), i]
    })
  })

  return policyArr
}
