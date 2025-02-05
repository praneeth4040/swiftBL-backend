const express = require('express');
const router = express.Router();
const ShipmentSchema = require('../models/shipmentSchema');


router.get('/', async (req, res) => {
     try{
        const shipments = await ShipmentSchema.find();
        res.status(200).json(shipments);
     }catch(error){
        res.status(500).json({error: error.message});
     }
});

router.post('/', async(req, res) => {
    try{
        const {shipmentId, containerId, route, currentLocation, currentETA} = req.body;
        const shipment = await ShipmentSchema.create({shipmentId, containerId, route, currentLocation, currentETA});
        shipment.save();
        res.status(201).json({message: "Shipment created successfully", shipment});
    }catch(error){
        res.status(500).json({error: error.message});
    }
});

router.get('/:shipmentId', async (req, res) => {
    try{
        const {shipmentId} = req.params;
        const shipment = await ShipmentSchema.findOne({shipmentId});
        res.status(200).json(shipment);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}); 
router.post('/:shipmentId/update-location', async (req, res) => {
    try{
        const {shipmentId} = req.params;
        const {currentLocation, currentETA} = req.body;
        const shipment = await ShipmentSchema.findOne({shipmentId});
        shipment.currentLocation = currentLocation;
        shipment.currentETA = currentETA;
        shipment.save();
        res.status(200).json({message: "Shipment updated successfully", shipment});
    }catch(error){
        res.status(500).json({error: error.message}); 
    }
});
router.get('/:shipmentId/eta', async (req, res) => {
    try{
        const {shipmentId} = req.params;
        const shipment = await ShipmentSchema.findOne({shipmentId});
        res.status(200).json({message: "ETA updated successfully",eta: shipment.currentETA});
    }catch(error){  
        res.status(500).json({error: error.message});
    }
});





module.exports = router;
