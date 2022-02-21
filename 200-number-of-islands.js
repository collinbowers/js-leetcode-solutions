/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    // recursive dfs
    let count = 0
    
    let dfs = function(i,j){
        if(i < 0 || i >= grid.length || j >= grid[0].length || j < 0 || grid[i][j] === '0'){
            return
        }
        grid[i][j] = '0'
        dfs(i + 1, j) //right
        dfs(i, j + 1) //down
        dfs(i - 1, j) //left
        dfs(i, j - 1) //up
    }
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                dfs(i,j)
                count += 1
            }
        }
    }
    return count
};