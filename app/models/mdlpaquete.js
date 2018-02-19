var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaqueteSchema = new Schema({ 
 tracking: { type: String, required: true },
 propietario: { type: String, required: true },
 idorigen: { type: String, required: true },
 iddestino: { type: String,required: true},
 fragil: { type: String,required: true},
 comentarios: { type: String},
 estado: { type: String, required: true }
});

module.exports = mongoose.model('cl_Paquetes', PaqueteSchema);