#### 二分查找

```java
    /*
    整数序列天然有序。
    利用二分思想。
    begin = 0
    end = x / 2 + 1，一定大于sqrt(x)
    则查找值一定存在于[begin, end)中。
    注意使用long类型防止溢出。
    */
    public int mySqrt(int x) {
        long begin = 0;
        long end = x / 2 + 1;
        
        while (begin <= end) {
            long mid = begin + (end - begin) / 2;
            long sq = mid * mid;
            
            if (sq == x) {
                return (int)mid;
            }
            else if (sq < x) {
                begin = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
        return (int)end;
    }
```

#### Newton's Method

```java
    /*
    牛顿迭代法。
    求f(r) - x 函数的导数
    即r^2 - x 函数的导数
    即2r
    迭代r = r - (r^2 - x) / 2r,
    即r = (r + x / r) / 2
    逐渐逼近r0
    但是为什么会收敛到floor(r0)有点没想明白
    */
    public int mySqrt(int x) {
        long r = x;
        while (r * r > x) {
            r = (r + x / r) / 2;
        }
        return (int)r;
    }
```