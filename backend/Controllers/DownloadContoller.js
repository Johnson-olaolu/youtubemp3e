const getItem = (req, res, next) => {
    res.send("single download")
//    const err = new Error("error")
//    next(err)
}

const downloadItem = (req, res) => {
    res.send("send item")
}


module.exports = {
    getItem,
    downloadItem
}
