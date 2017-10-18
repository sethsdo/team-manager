const mongoose = require("mongoose");
const Team = mongoose.model("Team");
const session = require('express-session');

module.exports = {
    display: (req, res) => {
        // console.log("this is display")
        Team.find({})
            .then(teams => res.json(teams)) 
            .catch(err => {
                console.log("can't find")
                res.status(500).json(err)
            })
    },
    create: (req, res) => {
        // console.log("you are in the create method")
        // console.log(req.body)
        let currentTeam = new Team( req.body );
        currentTeam.save() 
            .then(teams => res.json(true))
            .catch(err => {
                console.log("can't find")
                res.status(500).json(err)
            })
    },
    update: (req, res) => {
        console.log(req.params.id)
        console.log(req.body)
        const team = Team.findOne({_id: req.params.id}).exec(function (err, team) {
            if (err) { console.log("something went wrong!" , team) }
            else {
                team.status = req.body.status;
                console.log(team.completed)
                team.save((err, team) => {
                    if (err) {
                        res.status(500).send(err)
                    }
                    res.json(true)
                });
            }
        })
             
            
        //     { status: req.body })
        // team.save()
        //     .then(teams => res.json(true))
        //     .catch(err => {
        //         console.log("can't find")
        //         res.status(500).json(err)
        //     })
    },
    remove: (req, res) => {
        // console.log(req.params.id)
        Team.findByIdAndRemove({_id: req.params.id})
            .then(teams => res.json(true))
            .catch(err => {
                console.log("can't find")
                res.status(500).json(err)
            })
    },
}
