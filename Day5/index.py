s = "tree"
class Solution:
    def frequencySort(self,s):
        dic = {}
        arr = [char for char in s];
        arr2 = [];
        string = ""
        for i in range(0,len(s)):
            count = 0
            for j in range(0,len(s)):
                if s[i] == s[j]:
                    count += 1
            dic[s[i]] = count
        for i in dic:
            arr2.append(dic[i]);
        arr2.sort(reverse = True)

        for i in arr:
            for j in dic:
                if dic[j] == i:
                    for k in range(0,i):
                        string += j
                    del dic[j];
                    break;
        return string;

result = Solution()
print(result.frequencySort(s))
