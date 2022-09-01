let sortedArr = arr.sort()
let l = sortedArr.length()
function BinarySearch(sortedArr,it2search,) {
    let startIndex = 0;
    let endIndex = sortedArr.length -1;
    while (startIndex<=endIndex) {
        const middleIndex = startIndex + Math.floor((endIndex-startIndex)/2)
        if (sortedArr[middleIndex]===it2search) {
            return middleIndex
        }
        if (sortedArr[middleIndex]<it2search) {
            startIndex=middleIndex+1;
        } else {
            endIndex=middleIndex-1
        }
    }
}