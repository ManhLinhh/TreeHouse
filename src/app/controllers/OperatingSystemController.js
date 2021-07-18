class OperatingSystemController {
  // [GET] /operating-system
  index(req, res) {
    res.render('operatingsystem');
  }

  // [GET] /operating-system/:slug
  show(req, res) {
    res.send('NEWS DETAIL');
  }
}

module.exports = new OperatingSystemController();
