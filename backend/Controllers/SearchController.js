const getSearchList = (req, res)  => {
    res.send("get search list")
}

const downloadSearchItem = (req, res) => {
    res.send("download search item")
}


module.exports = {
    getSearchList,
    downloadSearchItem
}