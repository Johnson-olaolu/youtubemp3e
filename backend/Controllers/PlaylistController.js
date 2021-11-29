
const getPlaylistList = (req, res) => {
    res.rend("get playlist list")
}

const downloadPlaylistItem = (req,res) => {
    res.send("download playlist item")
}

module.exports = {
    getPlaylistList,
    downloadPlaylistItem
}