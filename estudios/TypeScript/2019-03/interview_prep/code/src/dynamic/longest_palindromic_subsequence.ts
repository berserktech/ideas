// From: https://www.techiedelight.com/longest-palindromic-subsequence-using-dynamic-programming/
export const longestPalindrome = (x, i = 0, j = x.length - 1) => {
  if (i > j) return 0
  if (i === j) return 1
  if (x[i] === x[j]) return longestPalindrome(x, i + 1, j - 1) + 2
  return Math.max(longestPalindrome(x, i, j - 1), longestPalindrome(x, i + 1, j))
}
