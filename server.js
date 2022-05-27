const express  = require('express');
const app = express();

app.listen(6647, () => {
    console.log('Server is Start!!!');
}); 

app.get('/lunch', async (req, res) => {
    let menu = req.params;


});
