const express = require('express');
const app = express();
const faker = require('faker');

// configure your server here
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))
// we can create a function to return a random / fake "Product"

const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: '$' + faker.commerce.price(),
        department: faker.commerce.department(),
        id: faker.datatype.uuid()
    };
    return newFake;
};
    

// EVERY ROUTE needs an HTTP verb (function), path AND a function to run
//   VERB: get
//   path: "/kevin"
//   function:  arrow function MUST accept 2 parameters: request, response
app.get("/kevin/:user", (request, response) => {
  console.log("Hello Kevin!  This is a very cool API!");
  console.log(request.params);
  response.json({
    name: "Kevin",
    job: "Class Clown"
  })
})

app.post("/kevin", (request, response) => {
  console.log("We are in the post for /kevin");
  console.log(request.body);
  console.log("Hello " + request.body.name + "!")
  console.log("You are the: " + request.body.job);

  // a response is REQUIRED!!!  Even if you don't send anything back!
  response.json({ message: "Thank you for contacting our API!" + request.body.name })
  // response.send();
})

app.post("/faker", (request, response) => {
  const newFakeProduct = createProduct();
  console.log(newFakeProduct);

  response.json({ 
    message: "This is our latest product!",
    product: newFakeProduct,
    price: newFakeProduct.price
  });
})

// this is USUALLY the last line of your server.js
//    We start the server listening AFTER we create ALL routes
//    and configure the server for json and url encoding
// start your server listening for requests
app.listen(8000, () => console.log("Listening on port 8000"));