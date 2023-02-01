use hotel;
db.dropDatabase();


db.bookings.insertMany([
    {name: "Bob McJim",
    email: "bobmcjim@gmail.com",
    checkedin: false},
    
    {name: "Ruby Sparks",
    email: "rubydooby@gmail.com",
    checkedin: true}
])