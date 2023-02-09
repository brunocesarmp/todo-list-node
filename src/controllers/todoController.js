exports.get = (req, res) => {
    console.log("Get");
    res.send("OK Get")
}

exports.getAll = (req, res) => {
    console.log("Get All")
    res.send("OK Get All")
}

exports.add = (req, res) => {
    console.log("Add")
    res.send("OK Add")
}

exports.update = (req, res) => {
    console.log("Update")
    res.send("OK Update")
}

exports.delete = (req, res) => {
    console.log("Delete")
    res.send("OK Delete")
}