module.exports = {
   create(req, res) {
      let roomId = 134521;

      res.redirect(`/room/${roomId}`)
   }
}