function checkPrime(n) {
 for (let i = 2; i<Math.sqrt(number); i++) {
    if (n % i === 0) {
        return false
    }
 }
 return true
}