const express = require("express");

const app = express();

function checkparams(keys) {
    return (req, res, next) => {
        for (const key of keys) {
            if (!req.query[key]) {
                return res.status(400).send(`Please provide ${key} parameter`);
            }
        }
        next();
    }

}

app.get("/calculateDisselUsageForDistance", checkparams(['distance', 'yearOfProduction', 'fuelUsagePer100KM']), (req, res) => {
    let distance = req.query.distance;
    let yearOfProduction = req.query.yearOfProduction;
    let fuelUsagePer100KM = req.query.fuelUsagePer100KM;
    if ((isNaN(distance)) || (isNaN(yearOfProduction)) || (isNaN(fuelUsagePer100KM))) {
        return res.status(400).send('All parameters should be provided as a number');
    }
    let fuelUsage = distance * fuelUsagePer100KM / 100;
    res.send(fuelUsage.toString());
})

app.get("/probabilityOfUnitInjectorFail", checkparams(['VIN']), (req, res) => {
    let VIN = req.query.VIN;
    if ((VIN.length !== 17)) {
        return res.status(400).send('VIN should consist of 17 characters');
    }
    let failProbability = Math.round(((Math.random() * 101 / 100) + Number.EPSILON) * 100) / 100;
    res.send(failProbability.toString());
})

app.listen(5000, () => {
    console.log('Your server is running on port 5000');
})