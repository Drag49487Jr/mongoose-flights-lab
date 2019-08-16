var Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {title: 'All Flights', flights});
    });
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {title: 'Movie Detail', flight});
    });
}
function newFlight(req, res) {
    res.render('flights/new', {title: 'All Flights'});
};

function create(req, res) {
    for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body)
    flight.save(function(err){
        console.log(flight);
        //if(err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
}
