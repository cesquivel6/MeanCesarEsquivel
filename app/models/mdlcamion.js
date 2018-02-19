var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CamionSchema = new Schema({ 
 placa: { type: String, required: true },
 marca: { type: String, required: true },
 modelo: { type: String, required: true },
 tonelaje: { type: String,required: true},
 estado: { type: String, required: true }
});

module.exports = mongoose.model('cl_camiones', CamionSchema);