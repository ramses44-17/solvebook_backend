const globalErrorsHandler = (error,req,res,next)=>{
  if (error.message) {
    res.status(400).json({
      status:"failed",
      error:error.message
    })
    return
  }
  if (error) {
    res.status(400).json({
      status:"failed",
      error:error
    })
    return
  }
  next()
}

module.exports = globalErrorsHandler