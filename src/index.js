const app = require("./app");

const port = process.env.PORT || 3005;

app.listen(port, function () {
    console.log(`app listening on port ${port}`);
});