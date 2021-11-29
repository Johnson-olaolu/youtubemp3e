const errorMiddleware = (err,req,res,next) => {
    res.json({
        message: err.message,
        stack : err.stack
      });
      next()
}

const pageNotFound = (req, res, next)  => {
    res.status(404).json({
        message : "page not found"
    })
}


module.exports = {
    errorMiddleware,
    pageNotFound
}