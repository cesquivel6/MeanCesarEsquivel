// Dependencies
var mongoose = require('mongoose');
var Paquete = require('../models/mdlpaquete.js');

//buscar paquetes por su estado
exports.findByStatus = function(req, res) {
 Paquete.find({estado:req.params.estado},function(err, paquetes) {
 if(err) return res.status(500).send(err.message);
 res.status(200).json(paquetes);
 });
};

//GET
exports.findById = function(req, res) {
 Camion.findOne({tracking:req.params.tracking}, function(err, paquete) {
 if(err) return res.status(500).send(err.message);
 res.status(200).json(paquete);
 });
};

//POST 
exports.add = function(req, res) {
 var paquete = new Paquete({
    tracking: req.body.tracking,
    propietario:req.body.propietario,
    idorigen:req.body.idorigen,
    iddestino:req.body.iddestino,
    fragil:req.body.fragil,
    comentarios:req.body.comentarios,
    estado:req.body.estado
 });
 paquete.save()
 .then(item => {
 res.status(200).json("Guardado con Exito");
 })
 .catch(err => {
 res.status(500).send("error al Guardar Registro "+err.message);
 });
};
//DELETE
exports.deleteById = function(req, res) {
    Paquete.remove({tracking:req.params.tracking}, function(err, paquete) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json("Eliminado con Exito");
    });
   };

//UPDATE solo se puede editar si esta en estado 1
exports.updateById = function(req, res) {
    Paquete.findOne({tracking:req.body.tracking}, function(err, paquete) {
    if(err) return res.status(500).send(err.message);
        if (paquete.estado!=1) return res.status(500).send("El paquete ya no se encuentra pendiente de envio, no es posible editar");
        paquete.tracking =paquete.tracking;
        paquete.propietario= req.body.propietario;
        paquete.idorigen=req.body.idorigen;
        paquete.iddestino=req.body.iddestino;
        paquete.fragil=req.body.fragil;
        paquete.comentarios=req.body.comentarios;
        paquete.estado=req.body.estado;

        paquete.save()
        .then(item => {
        res.status(200).json("Actualizacion con Exito");
        })
        .catch(err => {
        res.status(500).send("Error al Actualizar Registro "+err.message);
        });
    });
   };
