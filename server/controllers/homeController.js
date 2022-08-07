'use strict';
const trnsfunc = require('../../assets/js/translate-func.js');
const numToNepaliWords = require('../../assets/js/numToword.js');
const adbs = require('../../assets/js/asTobsDateConverter.js');

exports.list_all_unicode = function(req, res) {
  res.json(trnsfunc.smartTranslateWords(req.query.convert));
};

exports.convert_a_unicode = function(req, res) {
  if(req.body.value){
    res.json(trnsfunc.smartTranslateWords(req.body.value));
  }
  else
   res.json('Not found value!');
};

/* convert a date */
exports.list_all_date = function(req, res) {
  res.json(trnsfunc.smartTranslateWords(req.query.convert));
};

exports.convert_a_date = function(req, res) {  
  if(req.body.value)
    if(req.body.type == 'BS'){
      res.json(adbs.ad2bs(req.body.value));
    }
    else
    {
      res.json(adbs.bs2ad(req.body.value));
    }
  else
   res.json('Not found value!');
    
};

/* convert a num to word*/
exports.list_all_num = function(req, res) {
  res.json(trnsfunc.smartTranslateWords(req.query.convert));
};

exports.convert_a_num = function(req, res) {  
  if(req.body.value)    
    if(req.body.type == 'en'){
      res.json(numToNepaliWords(req.body.value,'en'));
    }
    else   
    res.json(numToNepaliWords(req.body.value,'np'));
  else
   res.json('Not found value!');
  
};
