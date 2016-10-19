
var mongo = require('mongoose');

// Use native Node promises
mongo.Promise = global.Promise;


// connect to MongoDB
mongo.connect('mongodb://127.0.0.1/booking')
	.then(() =>  console.log('connection succesful'))
	.catch((err) => console.error(err));




///////////////////////////////////
////////////////////// INTERN OFFER

var interOfferSchema = new mongo.Schema({
  label: String,
  earning: String,
  description: String,
  referent: String // cle id company account
});

interOfferModel = mongo.model('interOffer', interOfferSchema);


exports.findAllInternOffer = function(req, res) {
    interOfferModel.find(function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
};

exports.addInternOffer = function(req, res) {
    interOfferModel.create(req.body, function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
}


//////////////////////////////////
////////////////////// creteriaFav

var criteriaFavSchema = new mongo.Schema({
  location: String,
  studiesLevel: String,
  company: String,
  skills: String,
  startDate: String,
  period: String
});

criteriaFavModel = mongo.model('criteriaFav', criteriaFavSchema);


exports.findAllCriteriaFav = function(req, res) {
    criteriaFavModel.find(function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
};

exports.addCriteriaFav = function(req, res) {
    criteriaFavModel.create(req.body, function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
}




//////////////////////////////////
////////////////////// NewsletterFilter

var newsletterFilterSchema = new mongo.Schema({
  location: String,
  studiesLevel: String,
  company: String,
  skills: String
});

newsletterFilterModel = mongo.model('NewsletterFilter', newsletterFilterSchema);


exports.findAllnewsletterFilter = function(req, res) {
    newsletterFilterModel.find(function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
};

exports.addnewsletterFilter = function(req, res) {
    newsletterFilterModel.create(req.body, function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
}


//////////////////////////////////
////////////////////// trainneraccount

var trainneraccountSchema = new mongo.Schema({
	
});

trainneraccountModel = mongo.model('trainneraccount', trainneraccountSchema);


exports.findAllnewsletterFilter = function(req, res) {
    trainneraccountModel.find(function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
};

exports.addnewsletterFilter = function(req, res) {
    trainneraccountModel.create(req.body, function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
}