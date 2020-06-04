const crudHeladerias = (app) => {
    const Heladeria = require('../models/heladerias.js')


    findAllHeladerias = (req, res) => {
        console.log('entro en heladerias');
        Heladeria.find((err, heladerias) => {
            console.log('error', err);
            if (!err) {
                console.log('GET /heladerias');
                res.send(heladerias)
            }

        })

    }

    addHeladeria = function (req, res) {

        console.log('POST');
    
        console.log(req.body);
    
        var heladeria = new Heladeria({
    
            id: req.body.id,
            lat: req.body.lat,
            lng: req.body.lng,
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            web: req.body.web,
            img: req.body.img
    
        });
    
    
        heladeria.save(function (err) {
    
            if (!err) {
    
                console.log('Created');
    
            } else {
    
                console.log('ERROR: ' + err);
    
            }
    
        });
    
        res.send(heladeria);
    
    };

    modificarHeladerias = function (req, res) {

        Heladeria.findById(req.params.id, function (err, heladeria) {
    
            heladeria.id = req.body.id;
            heladeria.lat = req.body.lat;
            heladeria.lng = req.body.lng;
            heladeria.name = req.body.name;
            heladeria.description = req.body.description;
            heladeria.type = req.body.type;
            heladeria.web = req.body.web;
            heladeria.img = req.body.img;
            heladeria.save(function (err) {
    
                if (!err) {
    
                    console.log('Updated');
    
                } else {
    
                    console.log('ERROR: ' + err);
    
                }
    
                res.send(heladeria);
    
            });
    
        });
    
    }

    deleteHeladeria = function (req, res) {

        Heladeria.findById(req.params.id, function (err, heladeria) {
    
            heladeria.remove(function (err) {
    
                if (!err) {
    
                    console.log('Removed');
    
                } else {
    
                    console.log('ERROR: ' + err);
    
                }
    
                res.send(heladeria);
    
            })
    
        });
    
    }
    
    app.get('/heladerias', findAllHeladerias);

    app.post('/heladerias', addHeladeria);
         
    app.put('/heladerias/:id', modificarHeladerias);
         
    app.delete('/heladerias/:id', deleteHeladeria);
}

module.exports = crudHeladerias;








