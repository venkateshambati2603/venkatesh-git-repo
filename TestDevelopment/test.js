arr=list(map(int,input().split()))
for i in range(len(arr)-1):
s=min(arr[i+1:])
if arr[i]<s:
arr[i]=s
else:
arr[i]=-1
print(arr)

//Question 2

function smallestSubWithSum(arr, n, x)
{let min_len = n + 1;
for (let start=0; start<n; start++)
{
let curr_sum = arr[start];
if (curr_sum > x) return 1;
for (let end=start+1; end<n; end++)
{
curr_sum += arr[end];
if (curr_sum > x && (end - start + 1) < min_len) min_len = (end - start + 1);
}
}
return min_len;
}
let arr1 =[1, 2,3,4,5,6,7,8];
let x = 20;
let n1 = arr1.length;
let res1 = smallestSubWithSum(arr1, n1, x);
(res1 == n1 + 1)? document.write("Not possible<br>") :
document.write(res1 + "<br>");
let arr2 = [1, 2,3,4,5,6,7,8];
let n2 = arr2.length; x = 7;
let res2 = smallestSubWithSum(arr2, n2, x);

(res2 == n2 + 1)? document.write("Not possible<br>") :
document.write(res2 + "<br>");
let arr3 =[1, 2,3,4,5,6,7,8];
let n3 = arr3.length; x = 21;
let res3 = smallestSubWithSum(arr3, n3, x);
(res3 == n3 + 1)? document.write("Not possible<br>") :
document.write(res3 + "<br>");

//Question 3)
res=[arr[0]]
flag=True
for i in range(1,len(arr)):
if arr[i]>res[i-1] and flag: res.append(arr[i])
elif flag:
res[i-1],res[i]=arr[i],res[i-1] elif arr[i]<res[i-1] and not flag:
res.append(arr[i])
else:
t=res[i-1] res[i-1]=arr[i] res.append(t)
flag=not flag print(res)

//Question 4)
arr=list(map(int,input().split(",")))
def is_con(nums,i,j,min,max):
if max-min!=j-i:
return False
check=[False for i in range(j-i+1)]
for k in range(i,j+1):
if check[nums[k]-min]:
return False
check[nums[k]-min]=True
return True
def findmax(nums):
l=1

start,end=0,0
for j in range(len(nums)-1):
min_val = nums[j]
max_val = nums[j]
for i in range(j+1,len(nums)):
min_val=min(min_val,nums[i])
max_val=max(max_val,nums[i])
if is_con(nums,j,i,min_val,max_val):
if l < max_val - min_val + 1:
l=max_val-min_val+1
start=j
end=i
print(nums[start:end+1])
findmax(arr)

//Question 5

from math import pow
n=int(input())
co=0
while n%2==0:
n//=2
co+=1
if n==1:
print(pow(2,co))
else:
print(pow(2,co*2+1))

//DSA

//1)

class Node {
constructor(val) {
this.data = val; this.left = null; this.right = null;
}
}
class Value
{constructor()
{
this.max_size = 0; this.is_bst = false;
this.min = Number.MAX_VALUE; this.max = Number.MIN_VALUE;
}
}
var root;
var val = new Value(); function largestBST(node) {
largestBSTUtil(node, val, val, val, val);
return val.max_size;
}

function largestBSTUtil(node, min_ref, max_ref, max_size_ref, is_bst_ref) {

if (node == null)
{
is_bst_ref.is_bst = true; return 0;
}
var min = Number.MAX_VALUE;
var left_flag = false;
var right_flag = false; var ls, rs;
max_ref.max = Number.MIN_VALUE; ls = largestBSTUtil(node.left, min_ref,
max_ref, max_size_ref, is_bst_ref);

if (is_bst_ref.is_bst ==
true && node.data > max_ref.max)
{
left_flag = true;
}
min = min_ref.min;
min_ref.min = Number.MAX_VALUE; rs = largestBSTUtil(node.right, min_ref,
max_ref, max_size_ref, is_bst_ref);
if (is_bst_ref.is_bst == true && node.data < min_ref.min)
{
right_flag = true;
}
if (min < min_ref.min)
{ min_ref.min = min;
}
if (node.data < min_ref.min) // For leaf nodes
{
min_ref.min = node.data;
}
if (node.data > max_ref.max)
{ max_ref.max = node.data;
}

if (left_flag && right_flag) {
if (ls + rs + 1 > max_size_ref.max_size)
{
max_size_ref.max_size = ls + rs + 1;
}
return ls + rs + 1;
} else {
is_bst_ref.is_bst = false; return 0;
}
}

root = new Node(50); root.left = new Node(10);
root.right = new Node(60);
root.left.left = new Node(5);
root.left.right = new Node(20);
root.right.left = new Node(55);
root.right.left.left = new Node(45);
root.right.right = new Node(70);
root.right.right.left = new Node(65);
root.right.right.right = new Node(80);
document.write("Size of largest BST is " + largestBST(root));

//2)
class Node {
constructor(v) {
this.data = v; this.left = null; this.right = null;
}
}
var root;
function printPaths(node) {

var path = Array(1000).fill(0); printPathsRecur(node, path, 0);
}
function printPathsRecur(node , path , pathLen)
{if (node == null)
return;
path[pathLen] = node.data; pathLen++;
if (node.left == null && node.right == null) printArray(path, pathLen);
else {
}
}
printPathsRecur(node.left, path, pathLen); printPathsRecur(node.right, path,
pathLen);
function printArray(ints , len)
{var i;
for (i = 0; i < len; i++)
{ document.write(ints[i] + " ");
}
}
root = new Node(11); root.left = new Node(9);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.left = new Node(3);
printPaths(root);

//3)
class Node{
constructor(d){
this.d = d this.left = null this.right = null
}
}

function
height(root){if(r oot == null)
return 0
return Math.max(height(root.left), height(root.right)) + 1
}
function
isBalanced(root){if(r oot == null)
return true
let lh = height(root.left) let rh = height(root.right)
if (Math.abs(lh - rh) <= 1 && isBalanced( root.left)== true && isBalanced(
root.right) == true)
return true return false
}
let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.left.left.left = new Node(8)
if(isBalanced(root))
document.write("Tree is balanced")
else
document.write("Tree is not balanced")

//4)
def isBST(node):
if (node == None):
return 1
if (node.left != None and node.left.data > node.data):
return 0
if (node.right != None and node.right.data < node.data):
return 0
If (!isBST(node.left) or !isBST(node.right)):
return 0
return 1