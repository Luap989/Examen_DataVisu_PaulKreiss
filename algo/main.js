function twoSum(array, target) {
    const indicesMap = {}; 

    for (let i = 0; i < array.length; i++) {
        const complement = target - array[i]; 

        if (indicesMap[complement] !== undefined) {
            return [indicesMap[complement], i]; 
        }
        indicesMap[array[i]] = i;
    }

    return null; 
}


const nums = [3,3];
const target = 6;
const result = twoSum(nums, target);
console.log(result); 
