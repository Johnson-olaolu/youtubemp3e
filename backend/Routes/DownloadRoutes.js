const { Router } = require("express");
const router = Router()

const { getItem, downloadItem } = require("../Controllers/DownloadContoller");

router.post("/", getItem)
router.get("/download", downloadItem)


module.exports  = router