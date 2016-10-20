var express = require('express');
var bodyParser  = require('body-parser');
var bdd = require('./bdd');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// dès qu'une requête de type options est envoyé à une url de l'api
// le serveur répond qu'il accepte les méthodes GET, PUT, POST, DELETE et OPTIONS
app.options('/api/*', function (request, response, next) {
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    response.send();
});


// pour les get c'est pour tout récupérer
// pour les get avec parametre recupere les donnée en fonction du parametre
// pour le post c'est l'ajout en bdd
// le put est pour la modification



app.get('/internoffer', bdd.findAllInternOffer);
app.get('/internoffer/:idAccount', bdd.findOneInternOffer);
app.post('/internoffer', bdd.addInternOffer);
app.put('/internoffer/:id', bdd.updateInterOffer);
app.delete('/internoffer/:id', bdd.deleteInternOffer);

app.get('/criteriafav', bdd.findAllCriteriaFav);
app.get('criteriafav/:id', bdd.findOneCriteriaFav);
app.post('/criteriafav', bdd.addCriteriaFav);


app.get('/newsletterfilter', bdd.findAllnewsletterFilter);
app.get('/newsletterfilter/:idtrainneraccount', bdd.findOneNewsLetterFilter);
app.post('/newsletterfilter', bdd.addnewsletterFilter);


app.get('/trainneraccount', bdd.findAlltrainneraccount);
app.get('/trainneraccount/:login/:password', bdd.findOnetrainneraccount);
app.post('/trainneraccount', bdd.addtrainneraccount);
app.put('/trainneraccount/:id', bdd.updatetraineraccount);


app.get('/companyaccount', bdd.findAllcompanyaccount);
app.get('companyaccount/:id', bdd.findOneCompanyaccount);
app.post('/companyaccount', bdd.addcompanyaccount);
app.put('/companyaccount/:id', bdd.updatecompanyaccount);


app.get('/apply', bdd.findAllapply);
app.get('/apply/:idAccount', bdd.finOneApply);
app.post('/apply', bdd.addapply);


app.get('/stateinternoffer', bdd.findAllstateinternoffer);
app.get('/stateinternoffer/:id', bdd.findOnestatinternOfferByIDApply);
app.post('/stateinternoffer', bdd.addstateinternoffer);


app.get('/notice', bdd.findAllnotice);
app.get('/notice/trainneraccount/:idtrainneraccount', bdd.findOneNoticebyIdTraineeAccount);
app.get('/notice/company/:idCompany', bdd.findOneNoticebyIdCompany);
app.post('/notice', bdd.addnotice);


app.get('/cart/trainneraccount/:idtraineeaccount', bdd.findOneCartbyTraineeAccount);
app.get('/cart/internoffer/:idinternoffer', bdd.findOneCartbyInternOffer);
app.post('/cart', bdd.addCart);


app.listen(3000);
console.log('Listening on port 3000...');
