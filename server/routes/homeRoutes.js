'use strict';
module.exports = function(app) {
  var homeList = require('../controllers/homeController');
  const baseUrl = "/api/v2/";
  // homeList Routes
  app.route(`${baseUrl}convertunicode`)
    .get(homeList.list_all_unicode)
    .post(homeList.convert_a_unicode);

    
  app.route(`${baseUrl}convertdate`)
    .get(homeList.list_all_date)
    .post(homeList.convert_a_date);
  
  app.route(`${baseUrl}convertnumtoword`)
    .get(homeList.list_all_num)
    .post(homeList.convert_a_num);


  // app.route('/convert/:msg')
  //   .get(homeList.get_msg)
  //   .put(homeList.update_a_msg)
  //   .delete(homeList.delete_a_msg); 
};