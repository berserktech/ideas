import { } from 'jest'
import { lcs } from './longest_common_subsequence'

describe('Longest common subsequence', () => {
  it('should find the length of the longest common substring', () => {
    let x = 'ABCDAB'
    let y = 'BDCABA'
    expect(lcs(x, y)).toEqual(4)
  })
})
