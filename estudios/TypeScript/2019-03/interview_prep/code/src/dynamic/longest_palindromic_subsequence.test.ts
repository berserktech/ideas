import { } from 'jest'
import { longestPalindrome } from './longest_palindromic_subsequence'

describe('Longest common substring', () => {
  it('should find the length of the longest common substring', () => {
    let x = 'ABBDCACB'
    expect(longestPalindrome(x)).toEqual(5)
  })
})
