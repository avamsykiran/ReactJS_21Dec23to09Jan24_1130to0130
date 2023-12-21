let nums = [12,44,55,66,77,88,99,2,4,3,6,4,7,8,9,101];

//print all the even number of that array
console.log(nums.filter(n => n/2===0 ));

//print the smallest num 
console.log(nums.reduce((n1,n2)=>Math.min(n1,n2)))

//print the squares of each element in the nums array.
console.log(nums.map(n1=>n1*n1));
