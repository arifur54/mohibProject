let commaFiles = function(files){
    let path = '';
    files.forEach((files, index, arr) => {
        path = path + files.path + ","
    })
    path = path.substring(0, path.lastIndexOf(","))
    return path
}


module.exports = commaFiles;