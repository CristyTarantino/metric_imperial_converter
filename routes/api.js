/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      const input = req.query.input;
    
      if (!input) {
        return res.status(400).json({ error: 'input is required' });
      }
        
      try {
        const initNum = convertHandler.getNum(input);
        const initUnit = convertHandler.getUnit(input);
        
        const returnNum = convertHandler.convert(initNum, initUnit);
        const returnUnit = convertHandler.getReturnUnit(initUnit);
        const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        
        res.status(200).json(toString);
      } catch (e) {
        
        try {
          const initUnit = e.message === 'invalid number' && convertHandler.getUnit(input);
        } catch (e) {
          res.status(400).json({error: 'invalid number and unit'});
        }
        
        res.status(400).json({error: e.message});
      }
    });
    
};
