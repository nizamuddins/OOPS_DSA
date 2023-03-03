
def equalStacks(h1, h2, h3):
    # Write your code here
    x1 = len(h1);
    x2 = len(h2);
    x3 = len(h3);
    maxi = max(x1,x2,x3)
    if sum(h1) == sum(h2) == sum(h3):
        return sum(h1);
    for i in range(0,maxi):
        h1.pop(i);
        h2.pop(i);
        h3.pop(i);
        print(h1,h2,h3)
        if sum(h1) == sum(h2) == sum(h3):
            return sum(h1);

print(equalStacks([3, 2, 1, 1, 1],[4, 3, 2],[1, 1, 4, 1]))
        