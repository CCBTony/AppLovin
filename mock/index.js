module.exports = (req, res) => {
  require('.' + req.baseUrl)(req, res);
};
