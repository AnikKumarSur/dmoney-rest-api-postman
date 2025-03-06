const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    
    //collection: `https://api.postman.com/collections/35168321-dbd18633-31e2-433a-82e0-6fad567e2260?access_key=${process.env.access_key}`,
    collection: require("./collection/Dmoney Rest API.postman_collection.json"),
    //environment: require(""),
    reporters: "htmlextra",
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./reports/reports.html",
        title: "Domeny API Testing",
      },
    },
  },
  function (err) {
    if (err) throw err;
    console.log("Collection run completed");
  }
);