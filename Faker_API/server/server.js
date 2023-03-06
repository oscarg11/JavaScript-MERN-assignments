const {faker} = require('@faker-js/faker');
const express = require('express');

const app = express();
const port = 8000;

// create new user object
const createUser = () => ({
    id: faker.database.mongodbObjectId(),
    fistName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

// create new company object
const createCompany = () =>({
    id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
})

// ROUTES

// This route will return a new USER
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
})

// This route will return a new COMPANY 
app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
})

// This route will return a new USER & a new COMPANY
app.get("/api/users/companies", (req,res) => {
    res.json({user: createUser(), company: createCompany()});
})

app.listen(port, () => console.log(`Listening on port: ${port}`))