var combinationSum = function(candidates, target) {
    let solutions = []
    let sortedCand = candidates.sort((a, b) => a - b)

    function findSum(numsPicked, numsRem, target) {
        for (var i = 0; i < numsRem.length; i++) {
            let sum

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
                let newNumsRem = numsRem.slice(i)
                findSum(newNumsPicked, newNumsRem, target)
            } else {
                break
            }
        }
    }

    findSum([], sortedCand, target)
    return solutions
};

console.log(combinationSum([3,4,5,6,7,8,9,11,12], 15))