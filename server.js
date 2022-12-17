let express = require("express");

let app = express();

app.use(express.static("public"))

app.listen(5500, () => {
    console.log(`Server is running on http://localhost:5500/`)
})