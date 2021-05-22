
  const express = require('express')
  const path = require('path')
  const PORT = process.env.PORT || 3001

  const app = express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/views/index.html'));
    })


  const http = require('http').createServer(app);


  http.listen(PORT, () => console.log(`Listening on ${ PORT }`));