// Dependencies
var mongoose = require('mongoose');
var Camion = require('../models/mdlcamion.js');

//GETALL
exports.findAll = function(req, res) {
 Camion.find(function(err, camiones) {
 if(err) return res.status(500).send(err.message);
 res.status(200).json(camiones);
 });
};

//GET
exports.findById = function(req, res) {
 Camion.findOne({placa:req.params.placa}, function(err, camion) {
 if(err) return res.status(500).send(err.message);
 res.status(200).json(camion);
 });
};

//POST
exports.add = function(req, res) {
 var camion = new Camion({
 placa: req.body.placa,
 marca:req.body.marca,
 modelo:req.body.modelo,
 tonelaje:req.body.tonelaje,
 estado:req.body.estado
 });
 camion.save()
 .then(item => {
 res.status(200).json("Guardado con Exito");
 })
 .catch(err => {
 res.status(500).send("error al Guardar Registro"+err.message);
 });
};
//DELETE
exports.deleteById = function(req, res) {
    Camion.remove({placa:req.params.placa}, function(err, camion) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json("Eliminado con Exito");
    });
   };

//UPDATE
exports.updateById = function(req, res) {
    Camion.findOne({placa:req.body.placa}, function(err, camion) {
    if(err) return res.status(500).send(err.message);
        camion.placa =req.body.placa;
        camion.marca= req.body.marca;
        camion.modelo=req.body.modelo;
        camion.tonelaje=req.body.tonelaje;
        camion.estado=req.body.estado;

        camion.save()
        .then(item => {
        res.status(200).json("Actualizacion con Exito");
        })
        .catch(err => {
        res.status(500).send("Error al Actualizar Registro");
        });
    });
   };
