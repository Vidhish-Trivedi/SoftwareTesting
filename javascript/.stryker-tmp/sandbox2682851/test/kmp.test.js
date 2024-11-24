// @ts-nocheck
import { expect } from "chai";
import KMP from "../src/kmp.js";

describe("KMP Algorithm", () => {
  const kmp = new KMP();

  describe("computeLPS", () => {
    it("should compute the correct LPS array for a given pattern", () => {
      const pattern = "ABABCABAB";
      const expectedLPS = [0, 0, 1, 2, 0, 1, 2, 3, 4];
      const lps = kmp.computeLPS(pattern);
      expect(lps).to.deep.equal(expectedLPS);
    });

    it("should return an array of zeros for a pattern with no proper prefix which is also suffix", () => {
      const pattern = "ABCDE";
      const expectedLPS = [0, 0, 0, 0, 0];
      const lps = kmp.computeLPS(pattern);
      expect(lps).to.deep.equal(expectedLPS);
    });
  });

  describe("KMPSearch", () => {
    it("should return the correct starting indices of the pattern in the text", () => {
      const text = "ABABDABACDABABCABAB";
      const pattern = "ABABCABAB";
      const expectedIndices = [10];
      const indices = kmp.KMPSearch(text, pattern);
      expect(indices).to.deep.equal(expectedIndices);
    });

    it("should return an empty array if the pattern is not found in the text", () => {
      const text = "ABABDABACDABABCABAB";
      const pattern = "XYZ";
      const expectedIndices = [];
      const indices = kmp.KMPSearch(text, pattern);
      expect(indices).to.deep.equal(expectedIndices);
    });

    it("should return an empty array if the text or pattern is empty", () => {
      const text = "";
      const pattern = "ABABCABAB";
      const expectedIndices = [];
      const indices = kmp.KMPSearch(text, pattern);
      expect(indices).to.deep.equal(expectedIndices);

      const text2 = "ABABDABACDABABCABAB";
      const pattern2 = "";
      const expectedIndices2 = [];
      const indices2 = kmp.KMPSearch(text2, pattern2);
      expect(indices2).to.deep.equal(expectedIndices2);
    });
  });
});