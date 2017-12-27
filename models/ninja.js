const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja schema on model 
const NinjaSchema = new Schema({
    name : {
        type: String,
        required: [true, 'Name Field is required'],
    },
    rank: {
        type: String
    },
    available: {
        type:Boolean,
        default : false
    }
    // add in geolocation
});

const Ninja = mongoose.model('ninja', NinjaSchema);
module.exports = Ninja;