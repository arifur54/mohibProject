const multer = require('multer');

const fileTypes = ["image/png","image/jpeg","image/jpg", "image/webp" ]

// set storage


var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'uploads')
    },
    filename: function(req, file, callback){
        var ext = file.originalname.substring(file.originalname.lastIndexOf(".")); 
       // console.log(file)     
        callback(null, `${file.fieldname}-${Date.now()}${ext}`)
    }
})

const store = multer({
    storage: storage,
    fileFilter: function(req, file, callback){
        if(fileTypes.indexOf(file.mimetype) > -1){
            callback(null, true)
        }else{
            callback("Wrong file type", false)
        }
    }
})

module.exports = store; 