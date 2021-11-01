const tail = function(arr) {
    if(arr.length) {
        return arr.splice(1);
    }
}

module.exports = tail;