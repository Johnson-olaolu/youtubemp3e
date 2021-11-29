const { Router, application } = require("express")
const { getSearchList, downloadSearchItem } = require("../Controllers/SearchController")

const router = Router()

router.post("/", getSearchList)
router.get("/download", downloadSearchItem)

module.exports = router