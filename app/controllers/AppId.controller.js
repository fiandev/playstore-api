const Controller = require('cores/Controller')
const gplay = require("google-play-scraper")
const { language, default_country } = require('../../config')

class AppIdController extends Controller {
  async index () {
    try {
      const { request } = this
      const { appId } = request.params
      gplay.app({
        appId: appId
      })
      .then((result) => {
        this.success(result)
      });
    } catch (e) {
      this.error(null, e.message)
    }
  }
  async review () {
    try {
      const { request } = this
      const { appId } = request.params
      const {
        lang = language,
        country = default_country,
        sort = gplay.sort.NEWEST,
        limit = 5,
      } = request.query
      gplay.reviews({
        appId: appId,
        sort: sort,
        num: limit > 0 ? limit : 1,
        lang: lang,
        country: country
      })
      .then((result) => {
        this.success(result)
      });
    } catch (e) {
      this.error(null, e.message)
    }
  }
}

module.exports = AppIdController