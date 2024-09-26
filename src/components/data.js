export const questions = [
  {
    title: "Two Sum",
    accept: "53.8%",
    diff: "Easy",
    company: "Google",
    question:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.",
      example:{
        input: `nums= [2, 7, 11, 15] , target = 9`,
        output:`[0,1]`,
        explanation:`Because nums[0] + nums[1] == 9, we return [0, 1].`
      },
      testCase:[
        {input:`nums = [3, 2, 4] , target = 6`,output:`[1, 2]`
          },
          {input:` nums = [2,7,11,15] , target = 9`,output:`[0, 1]`
          },
          {input:`nums = [3, 3] , target = 6`,output:`[0, 1]`
          },
      ]
  },
  {
    title: "Add Two Numbers",
    accept: "44.1",
    diff: "Medium",
    company: "Google",
    question:
    "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    example:{
      input: `l1 = [2,4,3], l2 = [5,6,4]`,
      output:`[7,0,8]`,
      explanation:`342 + 465 = 807.`
    },
    testCase:[
      {input:`nums = [3, 2, 4] , target = 6`,output:`[1, 2]`
        },
        {input:` nums = [2,7,11,15] , target = 9`,output:`[0, 1]`
        },
        {input:`nums = [3, 3] , target = 6`,output:`[0, 1]`
        },
    ]
  },
  {
    title: "Median of Two Sorted Arrays",
    accept: "41.5%",
    diff: "Hard",
    company: "Google",
    question:
    "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).",
    example:{
      input: `nums1 = [1,3], nums2 = [2]`,
      output:`2.00000`,
      explanation:`merged array = [1,2,3] and median is 2.`
    }
  },

  {
    title: "Palindrome Number",
    accept: "57.5%",
    diff: "Easy",
    company: "Google",
    question:
    "Given an integer x, return true if x is a palindrome, and false otherwise.",
    example:{
      input: `x = 121`,
      output:`true`,
      explanation:`121 reads as 121 from left to right and from right to left.`
    }
  },
  {
    title: "3Sum",
    accept: "35.4%",
    diff: "Medium",
    company: "Google",
    question:
    "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.Notice that the solution set must not contain duplicate triplets.",
    example:{
      input: `nums = [-1,0,1,2,-1,-4]`,
      output:`[[-1,-1,2],[-1,0,1]]`,
      explanation:`nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.`
    }
  },
  {
    title: "Remove Duplicates from Sorted Array",
    accept: "57.7%",
    diff: "Easy",
    company: "Google",
    question:
    "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.Return k.",
    example:{
      input: `nums = [1,1,2]`,
      output:`2, nums = [1,2,_]`,
      explanation:`Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).`
    }
  },
  {
    title: "Jump Game II",
    accept: "40.7%",
    diff: "Medium",
    company: "Google",
    question:
    "You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:0 <= j <= nums[i] andi + j < n Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].",
    example:{
      input: `nums = [2,3,1,1,4]`,
      output:`2`,
      explanation:`The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.`
    }
  },
  {
    title: "Unique Paths",
    accept: "64.8%",
    diff: "Medium",
    company: "Google",
    question:
    "There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time. Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner. The test cases are generated so that the answer will be less than or equal to 2 * 109.",
    example:{
      input: `m = 3, n = 2`,
      output:`3`,
      explanation:`From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down`
    }
  },
  {
    title: "Plus One",
    accept: "46.2%",
    diff: "Easy",
    company: "Google",
    question:
    "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.",
    example:{
      input: `digits = [1,2,3]`,
      output:`[1,2,4]`,
      explanation:` The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].`
    },
    testCase:[

    ]
  },
  {
    title: "Happy Number",
    accept: "56.8%",
    diff: "Easy",
    company: "Google",
    question:
    "Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy. Return true if n is a happy number, and false if not.",
    example:{
      input: `n = 19`,
      output:`true`,
      explanation:`12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1`
    }
  },
  {
    title: "Median of Two Sorted Arrays",
    accept: "41.5%",
    diff: "Hard",
    company: "Google",
    question:
    "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).",
    example:{
      input: `nums1 = [1,3], nums2 = [2]`,
      output:`2.00000`,
      explanation:`merged array = [1,2,3] and median is 2.`
    }
  }, {
    title: "Combination Sum",
    accept: "72.8%%",
    diff: "Medium",
    company: "Google",
    question:`Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequencyof at least one of the chosen numbers is different.
The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

`,
    example:{
      input: `candidates = [2,3,6,7], target = 7`,
      output:`[[2,2,3],[7]]]`,
      explanation:`2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.`
    }
  }, {
    title: "Pow(x, n) ",
    accept: "35.6%",
    diff: "Medium",
    company: "Google",
    question:
    "Implement pow(x, n), which calculates x raised to the power n (i.e., xn).",
    example:{
      input: `x = 2.00000, n = -2`,
      output:` 0.25000`,
      explanation:`2-2 = 1/22 = 1/4 = 0.25`
    }
  }, {
    title: "N-Queens",
    accept: "70.0%",
    diff: "Hard",
    company: "Google",
    question:
    `The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively`,
    example:{
      input: ` n = 4`,
      output:`[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`,
      explanation:`There exist two distinct solutions to the 4-queens puzzle as shown above.`
    }
  }, {
    title: "Sqrt(x)",
    accept: "39.4%",
    diff: "Easy",
    company: "Google",
    question:
    `Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
You must not use any built-in exponent function or operator.
For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.`,
    example:{
      input: `x = 8`,
      output:`2`,
      explanation:`The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.`
    }
  }, {
    title: "Palindrome Partitioning",
    accept: "70.3%",
    diff: "Medium",
    company: "Google",
    question:
    `Given a string s, partition s such that every substring of the partition is a palindrome . Return all possible palindrome partitioning of s.`,
    example:{
      input: ` s = "aab"`,
      output:`[["a","a","b"],["aa","b"]]`,
      explanation:`NA`
    }
  }, {
    title: "Sort List",
    accept: "59.5%",
    diff: "Medium",
    company: "Google",
    question:
    "Given the head of a linked list, return the list after sorting it in ascending order.",
    example:{
      input: ` head = [-1,5,3,4,0]`,
      output:`[-1,0,3,4,5]`,
      explanation:`NA`
    }
  }, {
    title: "LRU Cache",
    accept: "43.3%",
    diff: "Medium",
    company: "Google",
    question:
   `Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.`,
    example:{
      input: `["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]`,
      output:`[null, null, null, 1, null, -1, null, -1, 3, 4]`,
      explanation:`LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1} \n
lRUCache.put(2, 2); // cache is {1=1, 2=2} \n
lRUCache.get(1);    // return 1 \n
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3} \n
lRUCache.get(2);    // returns -1 (not found) \n
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3} \n
lRUCache.get(1);    // return -1 (not found) \n
lRUCache.get(3);    // return 3 \n
lRUCache.get(4);    // return 4 \n`
    }
  }, {
    title: "Valid Number",
    accept: "20.4%",
    diff: "Hard",
    company: "Google",
    question:
    `Given a string s, return whether s is a valid number.

For example, all the following are valid numbers: "2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789", while the following are not valid numbers: "abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53".

Formally, a valid number is defined using one of the following definitions:

An integer number followed by an optional exponent.
A decimal number followed by an optional exponent.
An integer number is defined with an optional sign '-' or '+' followed by digits.

A decimal number is defined with an optional sign '-' or '+' followed by one of the following definitions:

Digits followed by a dot '.'.
Digits followed by a dot '.' followed by digits.
A dot '.' followed by digits.
An exponent is defined with an exponent notation 'e' or 'E' followed by an integer number.

The digits are defined as one or more digits.

 `,
    example:{
      input: `s = "0"`,
      output:`true`,
      explanation:`NA`
    }
  }, {
    title: "Sort Colors",
    accept: "65.0%",
    diff: "Medium",
    company: "Google",
    question:
    `Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.`,
    example:{
      input: `nums = [2,0,2,1,1,0]`,
      output:`[0,0,1,1,2,2]`,
      explanation:`NA`
    }
  },
];


export const language={
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
 
}

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Alex';\necho $name;\n",
};

export const answers=[
  
 { 
  name:"Two Sum",
  q:`
  class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        int n = nums.length;

        // Build the hash table
        for (int i = 0; i < n; i++) {
            numMap.put(nums[i], i);
        }

        // Find the complement
        for (int i = 0; i < n; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement) && numMap.get(complement) != i) {
                return new int[]{i, numMap.get(complement)};
            }
        }

        return new int[]{}; // No solution found
    }
}
`},
{
  name:"Add Two Numbers",
  q:`
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode tail = dummyHead;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int digit1 = (l1 != null) ? l1.val : 0;
            int digit2 = (l2 != null) ? l2.val : 0;

            int sum = digit1 + digit2 + carry;
            int digit = sum % 10;
            carry = sum / 10;

            ListNode newNode = new ListNode(digit);
            tail.next = newNode;
            tail = tail.next;

            l1 = (l1 != null) ? l1.next : null;
            l2 = (l2 != null) ? l2.next : null;
        }

        ListNode result = dummyHead.next;
        dummyHead.next = null;
        return result;
    }
}
`},
{
  name:"Median of Two Sorted Arrays",
  q:`
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int n1 = nums1.length, n2 = nums2.length;
        
        // Ensure nums1 is the smaller array for simplicity
        if (n1 > n2)
            return findMedianSortedArrays(nums2, nums1);
        
        int n = n1 + n2;
        int left = (n1 + n2 + 1) / 2; // Calculate the left partition size
        int low = 0, high = n1;
        
        while (low <= high) {
            int mid1 = (low + high) >> 1; // Calculate mid index for nums1
            int mid2 = left - mid1; // Calculate mid index for nums2
            
            int l1 = Integer.MIN_VALUE, l2 = Integer.MIN_VALUE, r1 = Integer.MAX_VALUE, r2 = Integer.MAX_VALUE;
            
            // Determine values of l1, l2, r1, and r2
            if (mid1 < n1)
                r1 = nums1[mid1];
            if (mid2 < n2)
                r2 = nums2[mid2];
            if (mid1 - 1 >= 0)
                l1 = nums1[mid1 - 1];
            if (mid2 - 1 >= 0)
                l2 = nums2[mid2 - 1];
            
            if (l1 <= r2 && l2 <= r1) {
                // The partition is correct, we found the median
                if (n % 2 == 1)
                    return Math.max(l1, l2);
                else
                    return ((double)(Math.max(l1, l2) + Math.min(r1, r2))) / 2.0;
            }
            else if (l1 > r2) {
                // Move towards the left side of nums1
                high = mid1 - 1;
            }
            else {
                // Move towards the right side of nums1
                low = mid1 + 1;
            }
        }
        
        return 0; // If the code reaches here, the input arrays were not sorted.
    }
}
`},
{name:"Palindrome Number",
  q:`
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        long reversed = 0;
        long temp = x;

        while (temp != 0) {
            int digit = (int) (temp % 10);
            reversed = reversed * 10 + digit;
            temp /= 10;
        }

        return (reversed == x);
    }
}
`},
{name:"3Sum",
  q:`
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);

        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i-1]) {
                continue;
            }
            
            int j = i + 1;
            int k = nums.length - 1;

            while (j < k) {
                int total = nums[i] + nums[j] + nums[k];

                if (total > 0) {
                    k--;
                } else if (total < 0) {
                    j++;
                } else {
                    res.add(Arrays.asList(nums[i], nums[j], nums[k]));
                    j++;

                    while (nums[j] == nums[j-1] && j < k) {
                        j++;
                    }
                }
            }
        }
        return res;        
}}
`},
{
  name:"Remove Duplicates from Sorted Array",
  q:`
class Solution {
    public int removeDuplicates(int[] nums) {
        int j = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
}
`},
{name:"Jump Game II",
  q:`
class Solution {
    public int jump(int[] nums) {
        int near = 0, far = 0, jumps = 0;

        while (far < nums.length - 1) {
            int farthest = 0;
            for (int i = near; i <= far; i++) {
                farthest = Math.max(farthest, i + nums[i]);
            }
            near = far + 1;
            far = farthest;
            jumps++;
        }

        return jumps;        
    }
}
`},
{name: "Unique Paths",
  q:`
class Solution {
    public int uniquePaths(int m, int n) {
        int[] aboveRow = new int[n];
        Arrays.fill(aboveRow, 1);

        for (int row = 1; row < m; row++) {
            int[] currentRow = new int[n];
            Arrays.fill(currentRow, 1);
            for (int col = 1; col < n; col++) {
                currentRow[col] = currentRow[col - 1] + aboveRow[col];
            }
            aboveRow = currentRow;
        }

        return aboveRow[n - 1];        
    }
}
`},
{
  name:"Plus One",
  q:`
class Solution {
    public int[] plusOne(int[] digits) {
        for (int i = digits.length - 1; i >= 0; i--) {
            if (digits[i] + 1 != 10) {
                digits[i] += 1;
                return digits;
            }
            digits[i] = 0;
        }
        
        int[] newDigits = new int[digits.length + 1];
        newDigits[0] = 1;
        return newDigits;        
    }
}
`},
{
  name:"Happy Number",
  q:`
import java.util.LinkedList;

class Solution {
    public boolean isHappy(int n) {
        
        int slow = n;
        int fast = n;
//while loop is not used here because initially slow and 
//fast pointer will be equal only, so the loop won't run.
        do {
//slow moving one step ahead and fast moving two steps ahead

            slow = square(slow);
            fast = square(square(fast));
        } while (slow != fast);

//if a cycle exists, then the number is not a happy number
//and slow will have a value other than 1

        return slow == 1;
    }
    
//Finding the square of the digits of a number

    public int square(int num) {
        
        int ans = 0;
        
        while(num > 0) {
            int remainder = num % 10;
            ans += remainder * remainder;
            num /= 10;
        }
        
        return ans;
    }
}
`},
{ 
  name:"Combination Sum",
  q:`
  class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<>();

        makeCombination(candidates, target, 0, new ArrayList<>(), 0, res);
        return res;        
    }

    private void makeCombination(int[] candidates, int target, int idx, List<Integer> comb, int total, List<List<Integer>> res) {
        if (total == target) {
            res.add(new ArrayList<>(comb));
            return;
        }

        if (total > target || idx >= candidates.length) {
            return;
        }

        comb.add(candidates[idx]);
        makeCombination(candidates, target, idx, comb, total + candidates[idx], res);
        comb.remove(comb.size() - 1);
        makeCombination(candidates, target, idx + 1, comb, total, res);
    }    
}
`},
{ 
  name:"Pow(x, n)",
  q:`
  class Solution {
    public double myPow(double x, int n) {
        return binaryExp(x, (long) n);
    }

    private double binaryExp(double x, long n) {
        if (n == 0) {
            return 1;
        }
       
        if (n < 0) {
            return 1.0 / binaryExp(x, -n);
        }
       
        if (n % 2 == 1) {
            return x * binaryExp(x * x, (n - 1) / 2);
        } else {
            return binaryExp(x * x, n / 2);
        }
    }
}
`},
{ 
  name:"N-Queens",
  q:`
 class Solution {
    public boolean isSafe(int col,int row, int n,char[][] board){
        int duprow = row;
        int dupcol  = col;

        while(row>=0 && col>=0){
            if(board[row][col] ==  'Q') return false;
            row--;
            col--;
        }

        row = duprow;
        col = dupcol;

        while(col>=0){
            if(board[row][col] == 'Q') return false;
            col--;
        }

        col = dupcol;

        while(row<n && col>=0){
            if(board[row][col] == 'Q') return false;
            row++;
            col--;
        }

        return true;
    }
    public List<String> construct(char[][] board){
        List<String> rowadd = new ArrayList<>();
        for(int i =0;i<board.length;i++){
            String row = new String(board[i]);
            rowadd.add(row);
        }
        return rowadd;
    }
    public void solve(List<List<String>> ans,char[][] board,int n ,int col){
        if(col == n){
            ans.add(construct(board));
            return;
        }

        for(int row = 0;row<n;row++){
            if(isSafe(col,row,n,board)){
                board[row][col] = 'Q';
                solve(ans,board,n,col+1);
                board[row][col] = '.';
            }
        }

    }
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> ans = new ArrayList<>();
        char[][] board = new char[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] = '.';
            }
        }
        solve(ans,board,n,0);
        return ans;
    }
}
`},
{ 
  name:"Sqrt(x)",
  q:`
 class Solution {
    public int mySqrt(int x) {
        // For special cases when x is 0 or 1, return x.
        if (x == 0 || x == 1)
            return x;

        // Initialize the search range for the square root.
        int start = 1;
        int end = x;
        int mid = -1;

        // Perform binary search to find the square root of x.
        while (start <= end) {
            // Calculate the middle point using "start + (end - start) / 2" to avoid integer overflow.
            mid = start + (end - start) / 2;

            // If the square of the middle value is greater than x, move the "end" to the left (mid - 1).
            if ((long) mid * mid > (long) x)
                end = mid - 1;
            else if (mid * mid == x)
                // If the square of the middle value is equal to x, we found the square root.
                return mid;
            else
                // If the square of the middle value is less than x, move the "start" to the right (mid + 1).
                start = mid + 1;
        }

        // The loop ends when "start" becomes greater than "end", and "end" is the integer value of the square root.
        // However, since we might have been using integer division in the calculations,
        // we round down the value of "end" to the nearest integer to get the correct square root.
        return Math.round(end);
    }
}
`},
{ 
  name:"Palindrome Partitioning",
  q:`
  class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> res=new ArrayList<>();
        List<String> sub=new ArrayList<>();
        findPartition(s, 0, res, sub);
        return res;
    }

    public void findPartition(String s, int index, List<List<String>> res, List<String> sub){
        if(index==s.length()){
            res.add(new ArrayList<>(sub));
            return;
        }
        for(int i=index;i<s.length();i++){
            if(isPalindrome(s,index,i)){
                sub.add(s.substring(index,i+1));
                findPartition(s, i+1, res, sub);
                sub.remove(sub.size()-1);
            }
        }
    }

    private boolean isPalindrome(String s, int start, int e){
        while(start<=e){
            if(s.charAt(start)!= s.charAt(e)){
                return false;
            }
            start++;
            e--;
        }
        return true;
    }
}
`},
{ 
  name:"Sort List",
  q:`
  /**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
 //Algo Used: Merge Sort
class Solution {
    public ListNode sortList(ListNode head) {
        // Base case: if the head is null or there's only one element in the list
        if (head == null || head.next == null) {
            return head;
        }

        // Split the list into two halves
        ListNode mid = getMid(head);
        ListNode left = head;
        ListNode right = mid.next;
        mid.next = null; // Break the link between the two halves

        // Recursively sort the left and right halves
        left = sortList(left);
        right = sortList(right);

        // Merge the two sorted halves
        return merge(left, right);
    }

      // Function to get the middle of the linked list
    private ListNode getMid(ListNode head) {
        ListNode slow = head, fast = head;

        // Use two pointers: slow and fast to find the middle
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    // Function to merge two sorted linked lists
    private ListNode merge(ListNode left, ListNode right) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        // Merge the two sorted lists
        while (left != null && right != null) {
            if (left.val < right.val) {
                current.next = left;
                left = left.next;
            } else {
                current.next = right;
                right = right.next;
            }
            current = current.next;
        }

        // Append the remaining elements
        if (left != null) {
            current.next = left;
        }
        if (right != null) {
            current.next = right;
        }

        return dummy.next;
    }
}
`},
{ 
  name:"LRU Cache",
  q:`
  class LRUCache {
    class Node {
        int key;
        int val;
        Node prev;
        Node next;

        Node(int key, int val) {
            this.key = key;
            this.val = val;
        }
    }

    Node head = new Node(-1, -1);
    Node tail = new Node(-1, -1);
    int cap;
    HashMap<Integer, Node> m = new HashMap<>();

    public LRUCache(int capacity) {
        cap = capacity;
        head.next = tail;
        tail.prev = head;
    }

    private void addNode(Node newnode) {
        Node temp = head.next;

        newnode.next = temp;
        newnode.prev = head;

        head.next = newnode;
        temp.prev = newnode;
    }

    private void deleteNode(Node delnode) {
        Node prevv = delnode.prev;
        Node nextt = delnode.next;

        prevv.next = nextt;
        nextt.prev = prevv;
    }

    public int get(int key) {
        if (m.containsKey(key)) {
            Node resNode = m.get(key);
            int ans = resNode.val;

            m.remove(key);
            deleteNode(resNode);
            addNode(resNode);

            m.put(key, head.next);
            return ans;
        }
        return -1;
    }

    public void put(int key, int value) {
        if (m.containsKey(key)) {
            Node curr = m.get(key);
            m.remove(key);
            deleteNode(curr);
        }

        if (m.size() == cap) {
            m.remove(tail.prev.key);
            deleteNode(tail.prev);
        }

        addNode(new Node(key, value));
        m.put(key, head.next);
    }
}
`},
{ 
  name:"Valid Number",
  q:`
  class Solution {
    public boolean isNumber(String s) {
        int i=0;
        boolean ex=false,dig=false,dot=false;
        while(i<s.length()){
            char ch=s.charAt(i);
            if(isDigit(ch)){
                dig=true;
            }else if(ch=='-' || ch=='+'){
                if(i>0 && s.charAt(i-1)!='e' && s.charAt(i-1)!='E') return false;
            }
            else if(ch=='e' || ch=='E'){
                if(ex || !dig) return false;
                ex=true;
                dig=false;
            }else if(ch=='.'){
                if(dot || ex) return false;
                dot=true;
            }else return false;
            i++;
        }
        return dig;
    }
    public boolean isDigit(char ch){
        if(ch>='0' && ch<='9') return true;
        return false;
    }
}
`},
{ 
  name:"Sort Colors",
  q:`
  class Solution {
    public void sortColors(int[] nums) {
        int zeros = 0, ones  = 0, n = nums.length;

        for(int i = 0; i < n; i++){
            if(nums[i] == 0) zeros++;
            if(nums[i] == 1) ones++;
        }

        for(int i = 0; i < n; i++) {
            if(i < zeros) nums[i] = 0;
            if(zeros <= i && i < zeros + ones) nums[i] = 1;
            if(i >= zeros + ones) nums[i] = 2;
        }
    }
}

`},
]




