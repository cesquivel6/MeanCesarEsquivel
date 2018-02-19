var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PilotoSchema = new Schema({ 
 dpi: { type: String, required: true },
 nombres: { type: String, required: true },
 apellidos: { type: String, required: true },
 licencia: { type: String},
 tipolicencia: { type: String},
 estado: { type: String, required: true }
});

module.exports = mongoose.model('cl_piloto', PilotoSchema);