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
 * Complete the 'searchSuggestions' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY repository
 *  2. STRING customerQuery
 */

function searchSuggestions(repository, customerQuery) {
    // use TRIE?
    
    // build trie helper?
    
    // sort repo?
    
    
    repository.sort()
    
    let res = new Array(customerQuery.length)
    
    for (let i = 0; i < customerQuery.length; i++){
        res[i] = (repository = repository.filter((word) => word[i] === customerQuery[i])).slice(0, 3)
    }
    
    return res
    
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const repositoryCount = parseInt(readLine().trim(), 10);

    let repository = [];

    for (let i = 0; i < repositoryCount; i++) {
        const repositoryItem = readLine();
        repository.push(repositoryItem);
    }

    const customerQuery = readLine();

    const result = searchSuggestions(repository, customerQuery);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();
}

