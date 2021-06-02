const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files') // Agregamos el directorio donde se guardarán los archivos.
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Le pasamos el nombre original del archvio, también podriamos cambiar el nombre concatenando la fecha actual.
    }
});

const upload = multer({storage});

exports.upload = upload;