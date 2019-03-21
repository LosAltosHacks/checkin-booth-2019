const bodyParser = require("body-parser");
const child_process = require("child_process");
const express = require("express");
const fs = require("fs");
const https = require("https");
const path = require("path");
const cors = require('cors');

const app = express();

app.use(bodyParser.json());;
app.use(cors());
app.options('*', cors())

app.post('/print', (req, res) => {
  child_process.execSync(
    `osascript printBadge.applescript "${req.body.first_name}" "${req.body.last_name}" "${req.body.id}"`,
    {
      cwd: path.join(__dirname, "scripts")
    }
  );
  res.send('success!');
})

let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`))
