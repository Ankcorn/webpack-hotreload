const matrix = require('./matrix')




matrix.sparse(10,10,0.2)
matrix.lowRank(4,2)


if(module.hot){
    module.hot.accept()
}