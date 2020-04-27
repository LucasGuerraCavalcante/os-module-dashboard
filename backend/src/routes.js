const express = require('express');
const osmodule = require('./controller/osmodule');

const router = express.Router();

router.get('/', osmodule.index);

module.exports = router;