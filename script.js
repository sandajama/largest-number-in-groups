// Good Luck 💪🏾
function findLargestNumbers(arr){
    let largest=[]
  for(let i=0;i<arr.length;i++){
    let group=0
    for(let j=0;j<=arr[i].length;j++){
      if(arr[i][j]>group){
        group=arr[i][j];

      }
    }
    largest.push(group);
   }
 return largest;

}

console.log(findLargestNumbers([[7, 3, 8, 11], [54, 12, 43, 77], [16, 11, 8]]))// ➞ [11, 77, 16]
console.log(findLargestNumbers([[22, 55, 12], [45, 66, 95], [22, 5, 11]])) //➞ [55, 95, 22]