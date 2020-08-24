var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const data = [
    { Name: "Albania" },
    { Name: "Andorra" },
    { Name: "Armenia" },
    { Name: "Austria" },
    { Name: "Azerbaijan" },
    { Name: "Belarus" },
    { Name: "Belgium" },
    { Name: "Bosnia & Herzegovina" },
    { Name: "Bulgaria" },
    { Name: "Croatia" },
    { Name: "Cyprus" },
    { Name: "Czech Republic" },
    { Name: "Denmark" },
  ];
  res.json(data);
});

module.exports = router;
