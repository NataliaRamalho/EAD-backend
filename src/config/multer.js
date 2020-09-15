const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const aws = require("aws-sdk");
const multerS3 = require('multer-s3');

module.exports ={
    dest:path.resolve(__dirname, '..','..','tmp','uploads'),
    storage: multerS3({
        s3: new aws.S3(),
        bucket: 'COLOCAR O NOME DO BUCKET',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req,file,cb) =>{
            crypto.randomBytes(16, (err, hash) =>{
                if(err) cb(err);
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                
                cb(null,fileName);
    
            })
        }  
    })
}


/*module.exports = {
   dest: path.resolve(__dirname, '..','..','tmp','uploads'),
   storage: multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, path.resolve(__dirname, '..','..','tmp','uploads'))
    },
    filename: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) =>{
            if(err) cb(err);
            file.key = `${hash.toString('hex')}-${file.originalname}`;
            
            cb(null,file.key)

        })
    },
   }),
}*/