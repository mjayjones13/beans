var express = require('express');
var router = express.Router();

const indexHTML = `
    <html>
    <head>
        <link rel="stylesheet" href="../../client/css/beans.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="http://localhost:8080/beans.bundle.js"></script>
    </head>

    <body id="BeansApp" onload="Beans.mount('#BeansApp')">
    </body>
    </html>
`;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(indexHTML);
  next();
});

module.exports = router;
