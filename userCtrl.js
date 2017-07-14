const userData = require('./userData.json');


 module.exports = {


     allUsers: (req, res) => {


             let data = userData.filter(e => {
                 console.log(req.query);
                 for (let key in req.query) {
                     if (key == 'favorites') {
                         for (i = 0; i < e['favorites'].length; i++) {
                             if (req.query[key] == e.favorites[i]) {
                                 return true;
                             }
                         }
                     } else if (key == 'age' && e[key] < req.query[key]) {
                         return true;
                     } else if (key == 'lastname' && e['last_name'] == req.query[key]) {
                         return true;
                     } else if (key == 'email' && e.email == req.query[key]) {
                         return true;
                     } else return false;
                 }
             });
             if (data.length === 0) {
                 res.status(200).send(userData);
             } else if (data.length < 2) {
                 res.status(200).send(data[0]);
             } else res.status(200).send(data);
         }


         ,
     userId: function (req, res) {


             let winners = userData.filter(e => { //checking each element individually 
                 for (let key in req.params) { //checks all key in the object 
                     if (e.id == req.params.userId) {
                         return true;
                     }
                 }
                 return false;
             });
             if (winners.length >= 1) {
                 res.send(winners[0]);
             } else return res.status(404).send('null');
         }


         ,
     admins: function (req, res) {


             let admin = userData.filter(e => {
                 if (e.type === 'admin') {
                     return true;
                 }
             });
             res.status(200).send(admin);
         }


         ,
     nonAdmins: function (req, res) {


         let nonAdmin = userData.filter(e => {
             if (e.type != 'admin') {
                 return true;
             } else return false
         });
         res.status(200).send(nonAdmin);
     },
     userType: function (req, res) {
             let userty = userData.filter(e => {
                 let z = req.params
                 if (e.type == z.userType) {
                     return true;
                 } else return false
             });
             res.status(200).send(userty);


         }


         ,
     putUserId: function (req, res) {
             let userUpdate = userData.filter( e=> {
                 let q = req.body
                 if (e.id == q.id) {
                     for (let key in q) {
                         e[key] = q[key];
                     }
                     console.log
                     return e;
                 }
             })
             res.status(200).send(userData);
         }


         ,
     postUsers: function (req, res) {
             let q = req.body;
             q['id'] = userData[userData.length - 1].id + 1;
             userData.push(q);
             res.status(200).send(userData);
         }


         ,
     deleteUserId: function (req, res) {
         console.log(req.params.userId);
         let z = req.params.userId - 1;
         let deleted = userData.splice(z, 1)
         res.status(200).send(userData);
     }
 }