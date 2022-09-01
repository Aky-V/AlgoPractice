function LinearSearch(arr,item2find) {
    let a = 0
    if (arr[a]===item2find) {
        return a;
    }
    a+=1;
    LinearSearch(arr,item2find)
}