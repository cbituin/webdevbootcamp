var faker = require("faker");

console.log("===============================");
console.log("Welcome to " + faker.company.companyName() + "!");
console.log("===============================");

function fakeInfo(){
        console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}

for(var i = 0; i < 10; i++){
    fakeInfo();
}
 
