import { } from 'jest'
import { lcsubsequence } from './longest_common_subsequence'

describe('Longest common subsequence', () => {
  it('should find the length of the longest common substring', () => {
    let x = 'ABCDAB'
    let y = 'BDCABA'
    expect(lcsubsequence(x, y)).toEqual(4)
  })
})
