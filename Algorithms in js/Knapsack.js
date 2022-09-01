function kpsk(item,cap,itIndex) {
    if (cap===0 ||itIndex <0) {
        return {items:[],value: 0,weight:0};
    }
    if (cap <items[itIndex].weight) {
        return kpsk(item,cap,itIndex-1);
    }

    const sackWithItem = kpsk(item,cap-items[itIndex].weight,itIndex-1);
    const sackWithoutItem = kpsk(item,cap,itIndex-1);

    const valueWithItem = sackWithItem.value + items[itIndex].value;
    const valueWithoutItem = sackWithoutItem.value;
    if (valueWithoutItem < valueWithItem) {
        const updatedsack = {
            items: sackWithItem.items.concat(items[itIndex]),
            value: sackWithoutItem.value + items[itIndex].value,
            weight: sackWithItem.weight + items[itIndex].weight,
        };
        return updatedsack
    } else {
        return sackWithoutItem;
    }
}
const items = [
    {name:"a", value:3, weight:3},
    {name:"b", value:6, weight:8},
    {name:"c", value:10, weight:3}
];

const maxCap = 8;