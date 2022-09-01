function findElement(sortedArr,it2search,offset) {
    let startIndex = 0;
    let endIndex = sortedArr.length -1;
        const middleIndex = Math.floor((endIndex-startIndex)/2)
        if (sortedArr[middleIndex]===it2search) {
            return middleIndex+offset
        }
        if (sortedArr[middleIndex]<it2search) {
            startIndex=middleIndex+1;
            offset=offset+middleIndex+1;
        } else {
            endIndex=middleIndex
        }
        return findElement(sortedArr.slice(startIndex,endIndex +1),it2search,offset)
    }  
