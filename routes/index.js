var express = require('express');
var router = express.Router();

const description = `
  This lot has an unbelievable view of the coastline south of San Francisco. 
  It is at the end of Olympian Way which is the highest street on Pedro Point. 
  The property is in the City of Pacifica situated on a hillside that is not subject 
  to any wave erosion and has an unblockable 180 degree view of the ocean. 
  Easy access to the BART System in Daly City (just to the north).
`

router.get('/', (req, res, next) =>{
  res.render('index', {
    title: 'Home',
    description
  });
});

router.get('/location', (req, res, next) =>{
  res.render('location', {
    title: 'Location',
    description
  });
});

router.get('/video', (req, res, next) =>{
  res.render('video', {
    title: 'Video',
    description
  });
});

router.get('/gallery', (req, res, next) =>{
  res.render('gallery', {
    title: 'Gallery',
    description
  });
});

router.get('/contact', (req, res, next) =>{
  res.render('contact', {
    title: 'Contact',
    description
  });
});


module.exports = router;
