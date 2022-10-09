# HelloWorld-ExpressJS
Hello World Express JS Application. 

## Hello world example

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Source: [ExpressJS](http://expressjs.com/en/starter/hello-world.html)
