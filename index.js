function cutFruitPieces(d) {
    return d * 4;
}



function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(fruitProcessor(2, 3));

function cutCarParts(car){
    return car * 5;
}

function carProcessor(toyota, honda){
    const toyotaParts = cutCarParts(toyota);
    const hondaParts = cutCarParts(honda);

    return `Car with ${toyotaParts} parts of toyota and ${hondaParts} parts of honda.`;
}

