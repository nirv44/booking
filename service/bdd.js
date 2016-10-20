
var mongo = require('mongoose');

// Use native Node promises
//mongo.Promise = global.Promise;


// connect to MongoDB
mongo.connect('mongodb://127.0.0.1/booking1');
	//.then(() =>  console.log('connection succesful'))
	//.catch((err) => console.error(err));


///////////////////////////////////
/////////////////////// Cart

var cartSchema = new mongo.Schema({
	idtrainneeAccount: String,
	idInternOffer: String
});
cartModel = mongo.model('cart',cartSchema);

exports.findOneCartbyTraineeAccount = function(req, res){
	cartModel.findOne({ idtraineeAccount: req.params.idtraineeaccount }, function (err, post) {
	if(err) return next(err);
		res.json(post);
	});
}
exports.findOneCartbyInternOffer = function(req, res) {
	cartModel.findOne({ idInternOffer: req.params.idinternoffer }, function (err, post){
		if(err) return next (err);
		res.json(post);
	});
}

exports.addCart = function (req, res) {
	cartModel.create(req.body, function (err, post) {
		if(err) return next(err);
		res.json(post);
	});
}
///////////////////////////////////
////////////////////// INTERN OFFER

var interOfferSchema = new mongo.Schema({
  label: String,
  earning: String,
  description: String,
  duration: String,
  location: String,
  referent: {
    name: String,
    logoLink: String
  }, 
  currentApply:{
    state: Number,
    stateLabel: String
  },
  applies: {
    state: Number,
    stateLabel: String
  }
});

interOfferModel = mongo.model('interOffer', interOfferSchema);

exports.findAllInternOffer = function(req, res) {
    interOfferModel.find(function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
};

exports.findOneInternOffer = function(req, res) {
  console.log(req);
  interOfferModel.findOne({ _id: req.params.id }, function (err, user) {
    if(err) return next(err);
      res.json(user);
  });
}

exports.addInternOffer = function(req, res) {
    interOfferModel.create(req.body, function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
}

exports.updateInterOffer = function(req, res){
  interOfferModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
  if (err) return next(err);
    res.json(post);
  });
}

exports.deleteInternOffer = function(req, res) {
  interOfferModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
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
  period: String,
  idtrainneraccount: String
});

criteriaFavModel = mongo.model('criteriaFav', criteriaFavSchema);


exports.findAllCriteriaFav = function(req, res) {
    criteriaFavModel.find(function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
};

exports.findOneCriteriaFav = function(req, res) {
  criteriaFavModel.findOne({ _id: req.params.id}, function(err, post){
    if(err) return (err)
      res.json(post);
  });
}

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
  skills: String,
  idtrainneraccount: String
});

newsletterFilterModel = mongo.model('NewsletterFilter', newsletterFilterSchema);


exports.findAllnewsletterFilter = function(req, res) {
    newsletterFilterModel.find(function (err, post) {
    if (err) return next(err);
    	res.json(post);
	});
};
exports.findOneNewsLetterFilter = function(req, res) {
  newsletterFilterModel.findOne({ idtrainneraccount: req.params.idtrainneraccount}, function (err, post){
    if(err) return (err);
    res.json(post);
  })
}
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
  studiesLevel: String,
  lastName: String,
  firstName: String
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

exports.updatetraineraccount = function(req, res) {
  trainneraccountModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
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
  fonction: String,
  logoLink: String,
  name: String,
  description: String,
  turnover: String,
  type: String,
  numberEmployee: String,
  website: String,
  creationDate: String
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
exports.findOneCompanyaccount = function(req, res) {
  companyaccountModel.findOne({ _id: req.params.id}, function(err, post) {
    if(err) return (err);
    res.json(post);
  });
}

exports.updatecompanyaccount = function(req, res) {
  companyaccountModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
  if (err) return next(err);
    res.json(post);
  });
}

//////////////////////////////////
////////////////////// apply

var applySchema = new mongo.Schema({
  idAccount: String,
  State: {
    value: String
  },
  InternOffer: {
    label: String,
    earning: String,
    description: String,
    referent: String,
    duration: String,
    location : String
  }
  });

applyModel = mongo.model('apply', applySchema);


exports.findAllapply = function(req, res) {
    applyModel.find(function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
};

exports.finOneApply = function() {
  console.log(req.params);
  applyModel.findOne({ idAccount: req.params.idAccount }, function (err, user) {
    if(err) return next(err);
      res.json(user);
  });
}

exports.addapply = function(req, res) {
    applyModel.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
}

//////////////////////////////////
////////////////////// stateinternoffer

var stateinternofferSchema = new mongo.Schema({
  value: String,
  idApply: String
});

stateinternofferModel = mongo.model('stateinternoffer', stateinternofferSchema);


exports.findAllstateinternoffer = function(req, res) {
    stateinternofferModel.find(function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
};

exports.findOnestatinternOfferByIDApply = function(){
  stateinternoffer.findOne({ idApply: req.params.id}, function(err, post) {
    if(err) return (err);
      res.json(post);
  })
}

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
  comment: String,
  idtrainneraccount: String,
  idCompany: String
});

noticeModel = mongo.model('notice', noticeSchema);


exports.findAllnotice = function(req, res) {
    noticeModel.find(function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
};


exports.findOneNoticebyIdTraineeAccount = function(req, res) {
  console.log(req.params);
  noticeModel.findOne({ _id: req.params.idtrainneraccount }, function (err, user) {
    if(err) return next(err);
      res.json(user);
  });
}

exports.findOneNoticebyIdCompany = function(req, res) {
  console.log(req.params);
  noticeModel.findOne({ _id: req.params.idCompany }, function (err, user) {
    if(err) return next(err);
      res.json(user);
  });
}


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
