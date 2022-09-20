const labenuGroups: string[] = [
   "Newton",
   "Bouman",
   "Sagan",
   "Hamilton",
   "Julian",
   "Melo",
   "Turing",
   "Jackson",
   "Tang",
   "Dumont"
]



const removeItem = (array: any[], indexToRemove: number)=> {
      for(let i = indexToRemove; i< array.length; i++){
         array[i] =array[i+1]
      }
      array.pop()
}

removeItem(labenuGroups, 1)

console.log(labenuGroups);