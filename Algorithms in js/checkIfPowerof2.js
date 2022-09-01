// function isPowerOfTwo (n) {
//     if (n<1) {
//         return false;
//     }
//     let d =n;
//     while (d !== 1) {
//         if (d%2!=0) {
//             return false;
//         }
//         d=d/2;
//     }
// }

function isPowerOfTwo(n) {
    if (n<1) {
        return false;
    }
    return (n & (n-1)) ===0
}