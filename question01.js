function getMaxPurchase(budget,keyboardPrices,mousePrices){
    let maxspend = -1;

    for(let i=0; i<keyboardPrices.length; i++){
        for(let j=0; j<mousePrices.length; j++){
            let total = keyboardPrices[i]+mousePrices[j];
            if(total<=budget && total>maxspend){
                maxspend = total;
            }
        }
    }
    return maxspend;
}
console.log(getMaxPurchase(60,[3,1],[5,2,8]));
console.log(getMaxPurchase(20,[30,15],[8,10,6]));