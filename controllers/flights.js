var Flight = require('../models/flight');
var Ticket = require('../models/ticket');


module.exports = {
    index,
    show,
    new: newFlight,
    create,
    addTicket,
    makeTicket,
};
function makeTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight){ 
    Ticket.create(req.body, function (err, tickets){
        tickets.flight.push(flight._id)
        tickets.save(function(err){
            console.log(tickets);
            res.redirect(`/flights/${flight._id}`)
        })
    })
    })
}


function addTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        res.render('tickets/new', {title: 'Add Ticket', flight});
    })
}
function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {title: 'All Flights', flights});
    });
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err, tickets){

            if(err) return res.redirect('flights/new');
            console.log(flight);
            res.render('flights/show', { title: 'Flight Detail', flight,tickets });
        });
    })
 };

function newFlight(req, res) {
    res.render('flights/new', {title: 'All Flights'});
};

function create(req, res) {
    for(let key in req.body) {
        if(req.body[key] === '') delete req.body[key];
    }
    var newFlight = new Flight(req.body);
    newFlight.save(function(err) {
        console.log(err)
        console.log(newFlight);
        //if(err) return res.redirect('/flights/');
        res.redirect(`/flights`);
    });
}
