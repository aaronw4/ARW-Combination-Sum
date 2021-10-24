var combinationSum = function(candidates, target) {
    let solutions = []
    let filteredCand = candidates.filter((x) => x <= target)
    let sortedCand = filteredCand.sort((a, b) => a - b)

    function findSum(numsPicked, numsRem, target) {
        for (var i = 0; i < numsRem.length; i++) {
            let sum

            if (numsRem[i] === numsRem[i-1]) {
                continue
            }

            if (numsPicked.length === 0) {
                sum = numsRem[i]
            } else {
                sum = numsPicked.reduce((a, b) => a + b) + numsRem[i]
            }

            if (sum === target) {
                numsPicked.push(numsRem[i])
                solutions.push(numsPicked)
                break
            } else if (sum < target) {
                let newNumsPicked = [...numsPicked]
                newNumsPicked.push(numsRem[i])
                let newNumsRem = numsRem.slice(i+1)
                findSum(newNumsPicked, newNumsRem, target)
            } else {
                break
            }
        }
    }
    
    findSum([], sortedCand, target)
    return solutions
};

console.log(combinationSum([2,5,2,1,2,7], 5))