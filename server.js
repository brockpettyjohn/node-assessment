const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const controller = require('./userCtrl');

app.use (bodyParser.json());


app.get('/api/users',controller.allUsers); 
app.get('/api/users/:userId',controller.userId); 
app.get('/api/admins',controller.admins); 
app.get('/api/nonadmins',controller.nonAdmins); 
app.get('/api/user_type/:userType',controller.userType); 
app.put('/api/users/:userId',controller.putUserId); 
 
 
app.post('/api/users/',controller.postUsers); 
 
 
app.delete('/api/users/:userId',controller.deleteUserId);


app.listen(3000, () =>{
    console.log('listening on port 3000')
});