const express  = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Server is working!'
    });
});

app.listen(6000,()=>{
    console.log('server  start at 6000')
})