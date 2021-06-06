const { request, response } = require('express');
const express = require('express');
const app = express();
const faker = require('faker');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

const createUser = () => {
    const newUser = {
        firstName:faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
}

const createrCompany = () => {
    const newCompany = {
        companyName: faker.company.companyName(),
        department: faker.commerce.department(),
        address: {
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state:faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

app.get("/api/users/new", (request, response) => {
    const newUser = createUser();
    console.log(newUser);
    response.json(newUser);
})

app.get("/api/companies/new", (request, response) => {
    let newCompany = createrCompany();
    console.log(newCompany);
    newCompany.department = faker.commerce.department();
    response.json(newCompany);
})

app.get("/api/user/company", (request, response) => {
    let newUser = createUser();
    let newCompany = createrCompany();

    console.log(newUser);
    console.log(newCompany);
    response.json({
        user: newUser,
        company: newCompany
    })
})


app.listen(8000, () => console.log("Listening on port 8000"));