
REST API project that expose endpoints to calculate
average use of diesel fuel and probability of engine breakdown.

environment configuration and project launch

To run the project you need Node.js together with npm (node package manager). Node.js can be downloaded from the following page: https://nodejs.org/en/download/ NPM is bundled with Node.js. This means that no additional action is required after installing Node.js.

You also need a code editor, e.g. Visual Studio Code, available for download at the link below: https://code.visualstudio.com/

After downloading the package from github, unpack it and then open its content in the code editor.

Make sure you are in the main project folder in the terminal, and then enter the command:

npm install
This way the missing packages will be installed. To run the server you need to write the command:

node index.js
Then you need to open a browser and navigate to:
http:// localhost:5000/

You can access the project on two endpoints:
1. GET: /calculateDisselUsageForDistance
You need to provide below data as number values:
 - distance - total distance between point A and point B in KM
 - yearOfProduction - year of production of the car
 - fuelUsagePer100KM - approximate fuel consumption per 100KM
 For example:
 http://localhost:5000/calculateDisselUsageForDistance?distance=300&yearOfProduction=2007&fuelUsagePer100KM=6

 The result will be the fuel consumption on specified distance.

2. GET: /probabilityOfUnitInjectorFail
 You need to provide below data:
 - VIN - A Vehicle Identification Number (VIN) as a 17-digit code
 For example:
 http://localhost:5000/probabilityOfUnitInjectorFail?VIN=sdvshf45464545465

 The result will be a failProbability - percentage of the chance that the engine of the model will fail on the Unit Injector element.Meaning “0” means there is no such possibility, and “0,77” means that there is a 77% chance that the Unit Injector will fail.
