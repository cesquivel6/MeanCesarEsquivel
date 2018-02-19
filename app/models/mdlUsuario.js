var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuaSchema = new Schema({ 
 usuario: { type: String, required: true },
 password: { type: String, required: true },
 estado: { type: String, required: true }
});

module.exports = mongoose.model('cl_usuarios', UsuaSchema);