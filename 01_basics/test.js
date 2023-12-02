const myNums = [1,2,3,4,5,6,7,8,9]

const newval = myNums.reduce( (acc, curr) =>{
    return acc + curr
},0)
// console.log(newval)


const val = myNums.reduce( (acc,curr)=> acc+curr,0)
console.log(val)