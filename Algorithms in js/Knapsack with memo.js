function kpskFn(item,cap,itIndex,mem) {
    if (mem[cap][itIndex]) {
        return mem[cap][itIndex];
    }
    if (cap===0 ||itIndex <0) {
        return {items:[],value: 0,weight:0};
    }
    if (cap <items[itIndex].weight) {
        return kpskFn(item,cap,itIndex-1,mem);
    }

    const sackWithItem = kpskFn(item,cap-items[itIndex].weight,itIndex-1,mem);
    const sackWithoutItem = kpskFn(item,cap,itIndex-1,mem);

    const valueWithItem = sackWithItem.value + items[itIndex].value;
    const valueWithoutItem = sackWithoutItem.value;
    if (valueWithoutItem < valueWithItem) {
        const updatedsack = {
            items: sackWithItem.items.concat(items[itIndex]),
            value: sackWithoutItem.value + items[itIndex].value,
            weight: sackWithItem.weight + items[itIndex].weight,
        };
        resultSack = updatedsack
    } else {
        resultSack = sackWithoutItem;
    }
    mem[cap][itIndex] = resultSack;
    return resultSack;
}
function kpsk(item,cap,itIndex) {
    const mem = Array.from(Array(cap + 1),()=>Array(items.length).fill(undefined));
    kpskFn(item,cap,itIndex,mem)
}
const items = [
    {name:"a", value:3, weight:3},
    {name:"b", value:6, weight:8},
    {name:"c", value:10, weight:3}
];

const maxCap = 8;