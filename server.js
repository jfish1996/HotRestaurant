// =============================================================
var express = require("express");
var path = require("path");

// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================
var reservations = [
    {
        uniqueID: "rachel",
        name: "Rachel",
        phoneNumber: "2068990651",
        email: "rach123@hotmail.com",
      }
];

// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "addTable.html"));
});

// Displays all characters
app.get("/api/reservation", function(req, res) {
  return res.json(reservations);
});

// Displays a single character, or returns false
app.get("/api/reservations/:reserve", function(req, res) {
    var chosen = req.params.reserve;
  
    console.log(chosen);
  
    for (var i = 0; i < reserve.length; i++) {
      if (chosen === reserve[i].routeName) {
        return res.json(reserve[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
  
    console.log(newTable);
  
    reservations.push(newTable);
  
    console.log(reservations);

    res.json(newTable);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  