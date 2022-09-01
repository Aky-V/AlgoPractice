let totalWeight;
items.map(item=>{totalWeight = totalWeight+item.weight})
function kpsk(items,cap,itIndex,totalWeight) {
    // if (totalWeight<cap) {
    //     return items
    // }
    if (itIndex<0) {
        return kpSack;//error
    }
    if (kpSack[itIndex].weight>cap) {
        return (kpSack.filter((element,index)=>{return (index !== itIndex)}))
    }

    const sackCheckRemoveThisItem = kpsk(items,cap,itIndex+1,totalWeight-kpSack[itIndex].weight)// 1st item not out
    const sackCheckNotRemovedThisItem = kpsk(items,cap-kpSack[itIndex].weight,itIndex+1,totalWeight)// 1st item not out
    // 1st item considered out; 
    const valueWithRemovedItem = sackCheckRemoveThisItem.kpValue
    const valueWithItem = sackCheckNotRemovedThisItem.kpValue + items[itIndex].value;
    
    if (valueWithRemovedItem > valueWithItem) {
        const updatedSack = sackCheckRemoveThisItem.filter((element,index)=>{return (index!==itIndex)})
    }else{
        return sackCheckNotRemovedThisItem
    }

}
const items = [
    {name:"a", value:3, weight:3},
    {name:"b", value:6, weight:8},
    {name:"c", value:10, weight:3},
];

let kpSack = [
    {name:"a", value:3, weight:3},
    {name:"b", value:6, weight:8},
    {name:"c", value:10, weight:3},
    {TWeight:14},
    {kpValue:19},
];