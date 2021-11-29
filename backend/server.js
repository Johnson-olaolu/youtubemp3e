const express = require("express")

const app = express()
const router = express.Router()

const { errorMiddleware, pageNotFound } = require("./middleware/errorMiddleware")

app.use(express.json())

//get routes
const downloadRoutes = require("./Routes/DownloadRoutes")
const playlistRoutes = require("./Routes/PlaylistRoutes")
const searchRoutes = require("./Routes/SearchRoutes")

//use routes 
app.use("/single", downloadRoutes)
app.use("/playlist", playlistRoutes)
app.use("/search", searchRoutes)


// add error middleware
app.use(errorMiddleware)
app.use(pageNotFound)

//app listen
app.listen(5000, function () {
    console.log("app listening on port 5000")
})


