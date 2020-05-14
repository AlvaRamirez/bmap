var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heladieriasSchema = new Schema({
    id:{type: String},
    lat:{type: String},
    lng:{type: String},
    name:{type: String},
    description:{type: String},
    type: {type: String},
    web: {type:String},
    img: {type:String}

});

module.exports = mongoose.model('Heladeria', heladieriasSchema, 'heladerias' );