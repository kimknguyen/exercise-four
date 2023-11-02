const express = require('express'); 
const app = express.Router(); 


//define the home page route
router.get('/', (req, res) => {
  res.send('Hello World!'); 
})

module.exports = router; 