# Laborit - Application test

This project is part of Laborit admission process. 
It's goal is to implement a RESTful API, with 3 simple CRUD and a public area where the user will be able to consult the vehicles by first selecting the vehicle brand and then the vehicle model and application should list the vehicles in ascending order of price. 

# Installing

## Prerequisites

```
- NodeJS (12.0 version or above)
- Any Linux Distribution
- npm or yarn installed
```
## NPM packages
To run this program, you must have this packages installed.
```
- Express
- Body parser
- Supertest
- Chai
- Request
- Should
- Nodemon
```

## Setting the Environment

A step by step series of examples that tell you how to get a development env running
Example:

  1. Clonning repository
```bash
git clone https://github.com/Hugo-cruz/laborit-application-test
cd laborit-application-test
```

## Testing laborit-application-test
  1. Start app 
To test the application, you just have to type:
```
test index.js
```
If the test application do not finish itself after all tests passed, you'll have to exit manually (by pressing Ctrl+Z) and kill all node process manually, by tiping:
```bash
sudo pkill -9 node
```

## Running laborit-application-test
  1. Start app
 
You can execute as a simple node application, by using:
```bash
node index.js
```
But we strongly recommend to run with nodemon, to avoid having to send a SIGKILL signal to finish the node process.
To run this way, go with:
```bash
yarn dev
```
  2. Requests 

After the server is up, you'll send all of your requests to localhost:3000, to get the proper data, by using your favorite request software (I recommend [Insomnia](https://insomnia.rest/download/)).

## CRUD
  1. Create

If you want to create a record, the request can be written in URL format as:
```bash
POST localhost:3000/api/{brands, vehicles or models}
```
To brands and models, you have to send a body containing:
```bash
{"name":"desired name"}
```
To vehicles, you have to send a body containing:
```bash
{
    "value": "00000.00",
    "brand": "brand_name",
    "model": "model_name",
    "yearModel": 0000,
    "fuel": "fuel_name"
}
```
  2. Update

If you want to update a record, the request can be written in URL format as:
```bash
PUT localhost:3000/api/{brands, vehicles or models}/id
```
To brands and models, you have to send a body containing:
```bash
{"name":"desired name"}
```
To vehicles, you have to send a body containing:
```bash
{
    "value": "00000.00",
    "brand": "brand_name",
    "model": "model_name",
    "yearModel": 0000,
    "fuel": "fuel_name"
}
```
  3. Read

If you want to get a specific record, the request can be written in URL format as:
```bash
GET localhost:3000/api/{brands, vehicles or models}/id
```
If you want to get all records, the request can be written in URL format as:
```bash
GET localhost:3000/api/{brands, vehicles or models}
```
  4. Delete

If you want to delete a specific record, the request can be written in URL format as:
```bash
DELETE localhost:3000/api/{brands, vehicles or models}
```
## Establishing a database
Fot this application, we used a MySQL server based on the cloud. If you prefer, you can connect with your own MySQL server, just altering the **connection** object on *index.js* and */test/tests.js* files with your MySQL database settings. Then, just run:
```bash
node create-database.js
```


## Authors

* **Hugo Fellipe Lage alvarães da Cruz**