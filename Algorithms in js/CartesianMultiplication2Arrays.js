function cartProduct(setA,setB) {
    const product = []
    for (const setAel of setA) {
        for (const setBel of setB) {
            product.push([setAel,setBel])
        }
    }
    return product
}