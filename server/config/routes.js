const teams = require('../controllers/teams.js');
const mongoose = require("mongoose");
const Team = mongoose.model("Team");
const path = require('path')

module.exports = function (app){
    // console.log("this is the routes")
    app.get('/get_players', teams.display);
    app.post('/create', teams.create); 
    app.put('/update/:id', teams.update)
    app.put('/distroy/:id', teams.remove);

    app.get("/*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}
