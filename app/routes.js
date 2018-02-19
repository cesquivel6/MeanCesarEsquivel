// Dependencies
var PilotoCtrl = require('./controllers/ctPilotos.js');
var CamionCtrl = require('./controllers/ctCamiones.js');
var PaqueteCtrl = require('./controllers/ctPaquete.js');
// Opens App Routes
module.exports = function(express,app) {

//API
var api = express.Router();
 //Pilotos
 api.route('/getPilotos/')
 .get(PilotoCtrl.findAll)
 api.route('/updpiloto/')
 .put(PilotoCtrl.updateById)
 api.route('/delpiloto/:dpi')
 .delete(PilotoCtrl.deleteById)
 api.route('/getpiloto/:dpi')
 .get(PilotoCtrl.findById)
 api.route('/Addpiloto/') 
 .post(PilotoCtrl.add)
//Camiones
api.route('/getCamiones/')
.get(CamionCtrl.findAll)
api.route('/updCamion/')
.put(CamionCtrl.updateById)
api.route('/delCamion/:placa')
.delete(CamionCtrl.deleteById)
api.route('/getCamion/:placa')
.get(CamionCtrl.findById)
api.route('/AddCamion/') 
.post(CamionCtrl.add);
//Paquetes
api.route('/getPaquetesByEstado/:estado')
.get(PaqueteCtrl.findByStatus)
api.route('/updPaquete/')
.put(PaqueteCtrl.updateById)
api.route('/delPaquete/:Tracking')
.delete(PaqueteCtrl.deleteById)
api.route('/getPaquete/:Tracking')
.get(PaqueteCtrl.findById)
api.route('/AddPaquete/') 
.post(PaqueteCtrl.add);

app.use('/api/', api);
};