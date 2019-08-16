var Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
};

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {title: 'All Flights', flights});
    });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'All Flights'});
};

function create(req, res) {
    // for(let key in req.body) {
    //     if(req.body[key] === '') delete req.body[key];
    
    var flight = new Flight(req.body)
    flight.save(function(err){
        console.log(flight);
        if(err) return res.redirect('flights');
        res.redirect('flights');
    });
}
