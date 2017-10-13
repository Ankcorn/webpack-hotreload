const math = require('mathjs')

const sparse = (i, j, d) => {
    if (d >= 1) {
        throw 'sparse(i,j,d) d=' + d + ' It must be less than 1'
    }

    console.log('sparsing with ', i, ' ', j, ' ', d)

    let zero = math.zeros([j, i])
    let sparseCount = 0
    let expectedSparse = i * j * d
    let remainingCells = i * j
    let chance = d
    console.log('It is expected that there will be ' + expectedSparse + ' Sparse values')
    let sparse = zero.map((_) => {
        let row = _.map(() => {
            
            let dif = expectedSparse - sparseCount
            chance = dif / remainingCells
            remainingCells--
            // console.log('remaining cells', remainingCells, 'dif', dif, 'chance', chance)
            if (Math.random() < chance) {
                sparseCount++
                return Math.random()
            } else { return 0 }
        })
        return row
    })
    console.log(sparseCount)
    console.log(sparse)
    return sparse
}

const lowRank = (dimension, rank) => {
    let zero = math.zeros([rank,dimension])
    let matrix1 = zero.map(row => {
        let newRow = row.map((element) => {
            return Math.random()

        })
        return newRow
    })
    
    console.log(matrix1)
}


const transform = (matrix) =>{

}





module.exports = {
            test: 'test',
            sparse: sparse,
            lowRank:lowRank
        }