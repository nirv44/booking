
var mongo = require('mongoose');

// Use native Node promises
mongo.Promise = global.Promise;


// connect to MongoDB
mongo.connect('mongodb://127.0.0.1/booking');
	//.then(() =>  console.log('connection succesful'))
	//.catch((err) => console.error(err));




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
	isViadeo: Boolean,
  isLinkedin: Boolean,
  mail: String,
  login: String,
  password: String,
  lastName: String,
  firstName: String,
  studiesLevel: String
});

trainneraccountModel = mongo.model('trainneraccount', trainneraccountSchema);


exports.findAlltrainneraccount = function(req, res) {
    trainneraccountModel.find(function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
};

exports.findOnetrainneraccount = function(req, res) {
  console.log(req.params);
  trainneraccountModel.findOne({ login: req.params.login, password: req.params.password }, function (err, user) {
    if(err) return next(err);
    res.json(user);
  });
}

exports.addtrainneraccount = function(req, res) {
    trainneraccountModel.create(req.body, function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
}


//////////////////////////////////
////////////////////// companyaccount

var companyaccountSchema = new mongo.Schema({
  isViadeo: Boolean,
  isLinkedin: Boolean,
  mail: String,
  login: String,
  password: String,
  lastName: String,
  firstName: String,
  idCompany: String,
  fonction: String,
  logoLink: String
});

companyaccountModel = mongo.model('companyaccount', companyaccountSchema);


exports.findAllcompanyaccount = function(req, res) {
    companyaccountModel.find(function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
};

exports.addcompanyaccount = function(req, res) {
    companyaccountModel.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
}


//////////////////////////////////
////////////////////// apply

var applySchema = new mongo.Schema({
  idAccount: String,
  idState: String,
  idInternOffer: String
});

applyModel = mongo.model('apply', applySchema);


exports.findAllapply = function(req, res) {
    applyModel.find(function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
};

exports.addapply = function(req, res) {
    applyModel.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
}

//////////////////////////////////
////////////////////// stateinternoffer

var stateinternofferSchema = new mongo.Schema({
  idAccount: String,
  idState: String,
  idInternOffer: String
});

stateinternofferModel = mongo.model('stateinternoffer', stateinternofferSchema);


exports.findAllstateinternoffer = function(req, res) {
    stateinternofferModel.find(function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
};

exports.addstateinternoffer = function(req, res) {
    stateinternofferModel.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
}


//////////////////////////////////
////////////////////// notice

var noticeSchema = new mongo.Schema({
  grade: String,
  comment: String
});

noticeModel = mongo.model('notice', noticeSchema);


exports.findAllnotice = function(req, res) {
    noticeModel.find(function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
};

exports.addnotice = function(req, res) {
    noticeModel.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
}

//////////////////////////////////
////////////////////// company

var companySchema = new mongo.Schema({
  grade: String,
  comment: String
});

companyModel = mongo.model('company', companySchema);


exports.findAllcompany = function(req, res) {
    companyModel.find(function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
};

exports.addcompany = function(req, res) {
    companyModel.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
}