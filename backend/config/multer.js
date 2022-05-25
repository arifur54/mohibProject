const multer = require('multer');

// set storage

var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'uploads')
    },
    filename: function(req, file, callback){
        var ext = file.originalname.substring(file.originalname.lastIndexOf("."));        
        callback(null, `${file.fieldname}-${Date.now()}${ext}`)
    }
})

const store = multer({
    storage: storage,
    fileFilter: function(req, file, callback){
        if(file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype=="image/jpg"){
            callback(null, true)
        }else{
            callback("Wrong file type", false)
        }
    }
})

module.exports = store; 