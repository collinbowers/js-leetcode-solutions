'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'foo' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codeList
 *  2. STRING_ARRAY shoppingCart
 */

function foo(codeList, shoppingCart) {
    // Write your code here
    
    // two pointers? 
    
    let codesIdx = 0
    let cartIdx = 0
    
    while (codesIdx < codeList.length && cartIdx < shoppingCart.length){
        let codeListItem = codeList[codesIdx].split(' ')
        
        let codeListItemIdx = 0
        
        while (codeListItemIdx < codeListItem.length && cartIdx < shoppingCart.length) {
            if (codeListItem[codeListItemIdx] === 'anything' || codeListItem[codeListItemIdx] === shoppingCart[cartIdx]){ 
                codeListItemIdx = codeListItemIdx + 1
            } else {
                codeListItemIdx = 0
            }
            cartIdx++
        }
        if (codeListItemIdx !== codeListItem.length) {
            return 0
        }
        codesIdx++
    }
    if (codeList.length > codesIdx){
        return 0
    } else {
        return 1
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const codeListCount = parseInt(readLine().trim(), 10);

    let codeList = [];

    for (let i = 0; i < codeListCount; i++) {
        const codeListItem = readLine();
        codeList.push(codeListItem);
    }

    const shoppingCartCount = parseInt(readLine().trim(), 10);

    let shoppingCart = [];

    for (let i = 0; i < shoppingCartCount; i++) {
        const shoppingCartItem = readLine();
        shoppingCart.push(shoppingCartItem);
    }

    const result = foo(codeList, shoppingCart);

    ws.write(result + '\n');

    ws.end();
}

