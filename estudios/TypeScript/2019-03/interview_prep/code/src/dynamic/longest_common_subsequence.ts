// From: https://www.techiedelight.com/longest-common-subsequence/
export const lcsubsequence = (x, y, m = x.length, n = y.length) => {
  // we've reached the end
  if (m === 0 || n === 0) return 0
  // last characters of both matches
  if (x[m - 1] === y[n - 1]) {
    return lcsubsequence(x, y, m - 1, n - 1) + 1
  }
  // last character doesn't match
  return Math.max(lcsubsequence(x, y, m, n - 1), lcsubsequence(x, y, m - 1, n))
}
