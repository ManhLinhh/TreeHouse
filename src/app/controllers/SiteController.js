class SiteController {
  // [GET] /
  index(req, res) {
    res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }

  // [GET] /helps
  helps(req, res) {
    res.render('helps');
  }
}

module.exports = new SiteController();
