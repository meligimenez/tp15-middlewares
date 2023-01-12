let admin = ['Greta', 'Ada', 'Tim', 'Vim'];

module.exports = (req, res, next) => {
  if(admin.includes(req.query.user)){
    next()
  }else {
    return res.redirect('/noentry')
  }
}