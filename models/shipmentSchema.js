const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShipmentSchema = new Schema({
  shipmentId: {
    type: String,
    required: true,
    unique: true
  },
  containerId: {
    type: String,
    required: true
  },
  route: {
    type: [String],
    required: true
  },
  currentLocation: {
    type: String,
    required: true
  },
  currentETA: {
    type: Date,
    required: true
  },
}, {
  timestamps: true
});

const Shipment = mongoose.model('ShipmentSchema', ShipmentSchema);

module.exports = Shipment;
