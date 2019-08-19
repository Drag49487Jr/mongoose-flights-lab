var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema ({
    airport:{
        type:String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival:{
        type: Date,
        // default: function() {
        //     const date = new Date();
        //     const updatedYear = date.getFullYear() + 1;
        //     date.setFullYear(updatedYear);
        //     return date;
        // }
    }
}, {
    timestamps:true
});

var flightSchema = new Schema ({
    airline: {
       type: String,
       enum: ['American', 'Southwest', 'United']
    },
    flightNo:{
        type: Number,
        min: 10,
        max: 9999
    },
    airport:{
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
    },
    departs:{
        type: Date,
        default: function() {
            const date = new Date();
            const updatedYear = date.getFullYear() + 1;
            date.setFullYear(updatedYear);
            return date;
        },
    },
    destinations: [destinationSchema],
}, {
    timestamps:true
});


module.exports = mongoose.model('Flight', flightSchema);