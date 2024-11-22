class KMP:
  def computeLPS(self, pattern):
    lps = [0] * len(pattern)
    length = 0
    i = 1
    while i < len(pattern):
      if pattern[i] == pattern[length]:
        length += 1
        lps[i] = length
        i += 1
      else:
        if length != 0:
          length = lps[length - 1]
        else:
          lps[i] = 0
          i += 1
    return lps

  def KMPSearch(self, text, pattern):
    if not pattern or not text:
      return []  # no results

    lps = self.computeLPS(pattern)
    result = []

    i = 0  # index for text
    j = 0  # index for pattern
    while i < len(text):
      if pattern[j] == text[i]:
        i += 1
        j += 1

      if j == len(pattern):
        result.append(i - j)
        j = lps[j - 1]
      elif i < len(text) and pattern[j] != text[i]:
        if j != 0:
          j = lps[j - 1]
        else:
          i += 1

    return result