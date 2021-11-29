const { Router } = require("express");
const { getPlaylistList, downloadPlaylistItem } = require("../Controllers/PlaylistController");

const router = Router()

router.post("/", getPlaylistList)
router.get("/download", downloadPlaylistItem)

module.exports = router;