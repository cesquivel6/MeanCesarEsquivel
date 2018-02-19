// Dependencies
var mongoose = require('mongoose');
var Piloto = require('../models/mdlpiloto.js');

//GETALL
exports.findAll = function(req, res) {
 Piloto.find(function(err, pilotos) {
 if(err) return res.status(500).send(err.message);
 res.status(200).json(pilotos);
 });
};

//GET
exports.findById = function(req, res) {
 Piloto.findOne({dpi:req.params.dpi}, function(err, pilot) {
 if(err) return res.status(500).send(err.message);
 res.status(200).json(pilot);
 });
};

//POST
exports.add = function(req, res) {
 var pilot = new Piloto({
 dpi: req.body.dpi,
 nombres:req.body.nombres,
 apellidos:req.body.apellidos,
 licencia:req.body.licencia,
 tipolicencia:req.body.tipolicencia,
 estado:req.body.estado
 });
 pilot.save()
 .then(item => {
 res.status(200).json("Guardado con Exito");
 })
 .catch(err => {
 res.status(500).send("error al Guardar Registro");
 });
};
//DELETE
exports.deleteById = function(req, res) {
    Piloto.remove({dpi:req.params.dpi}, function(err, pilot) {
    if(err) return res.status(500).send(err.message);
    res.status(200).json("Eliminado con Exito");
    });
   };

//UPDATE
exports.updateById = function(req, res) {
    Piloto.findOne({dpi:req.body.dpi}, function(err, pilot) {
    if(err) return res.status(500).send(err.message);
        pilot.dpi =req.body.dpi;
        pilot.nombres= req.body.nombres;
        pilot.apellidos=req.body.apellidos;
        pilot.licencia=req.body.licencia;
        pilot.tipolicencia=req.body.tipolicencia;
        pilot.estado=req.body.estado;

        pilot.save()
        .then(item => {
        res.status(200).json("Actualizacion con Exito");
        })
        .catch(err => {
        res.status(500).send("Error al Actualizar Registro");
        });
    });
   };
