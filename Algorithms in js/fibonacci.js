// function fib(n) {
//     const fib01 = [1,1];
//     for (let i = 2;i<n+1;i++) {
//         fib01.push(fib01[i-2]+fib01[i-1]);
//     }
//     console.log(fib01)
//     return fib01[n];
// }

/*function fib(n) {
    if (n==0 ||n==1) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}*/




function fib(n,mem) {
    let returnedVal;
    if (mem[n]) {
        return mem[n];
    }
    if (n==0 ||n==1) {
        return 1;
    } else {
    return fib(n-1) + fib(n-2);
    }
    mem[n] = returnedVal;
    return returnedVal;
}