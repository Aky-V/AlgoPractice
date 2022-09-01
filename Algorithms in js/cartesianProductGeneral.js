function cartProduct(setA,setB) {
    const product = []
    for (let setAel of setA) {
        if (!Array.isArray(setAel)) {
            setAel = [setAel];
        }
        for (const setBel of setB) {
            product.push([...setAel,setBel])
        }
    }
    return product
}
function cartesian(...sets) {
    let tempProduct = sets[0];
    for (let i = 1;i<sets.length; i++) {
       tempProduct = cartProduct(tempProduct,sets[i])
    }
    return tempProduct;
}