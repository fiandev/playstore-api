const Controller = require('cores/Controller')
const gplay  = require("google-play-scraper")
const { language, default_country } = require('../../config')

class AppListController extends Controller {
  index () {
    try {
      const { request } = this
      const { limit } = request.query
      gplay.list({
        category: gplay.category.GAME_ACTION,
        collection: gplay.collection.TOP_FREE,
        num: limit > 0 ? limit : 1
      }).then((result) => {
       this.success(result)
        
      })
    } catch (e) {
      console.error(e)
      this.error(null, e.message)
    }
  }
  allCategories () {
    try {
      const { request } = this
      
      this.success(gplay.category)
    } catch (e) {
      console.error(e)
      this.error(null, e.message)
    }
  }
  allCollections () {
    try {
      const { request } = this
      
      this.success(gplay.collection)
    } catch (e) {
      console.error(e)
      this.error(null, e.message)
    }
  }
  async showCategory () {
    try {
      const { request } = this
      const { category } = request.params
      const { 
        limit = 0, 
        detail = false,
        lang = language,
        country = default_country
      } = request.query
      
      let counter = 0
      for await (let key of Object.keys(gplay.category)) {
        if (key.toLowerCase() === category.toLowerCase()) {
          gplay.list({
            category: gplay.category[category.toUpperCase()],
            num: limit > 0 ? limit : 1,
            lang: lang,
            country: country,
            fullDetail: detail
          }).then((result) => {
           this.success(result)
          })
          
          return false
        }
        
        if (counter === Object.keys(gplay.category).length - 1) this.error(null, `parameter ${ category } is not found!`)
        
        counter++
      }
      
    } catch (e) {
      this.error(null, e.message)
    }
  }
  async showCollection () {
    try {
      const { request } = this
      const { collection } = request.params
      const { 
        limit = 0, 
        detail = false,
        lang = language,
        country = default_country
      } = request.query
      
      let counter = 0
      for await (let key of Object.keys(gplay.collection)) {
        if (key.toLowerCase() === collection.toLowerCase()) {
          gplay.list({
            collection: gplay.collection[collection.toUpperCase()],
            num: limit > 0 ? limit : 1,
            lang: lang,
            country: country,
            fullDetail: detail
          }).then((result) => {
           this.success(result)
          })
          
          return false
        }
        
        if (counter === Object.keys(gplay.collection).length - 1) this.error(null, `parameter ${ collection } is not found!`)
        
        counter++
      }
      
    } catch (e) {
      this.error(null, e.message)
    }
  }
  async search() {
    try {
      const { request } = this
      const { 
        q = null, 
        detail = false, 
        limit = 1,
        lang = language,
        country = default_country
      } = request.query
      
      if (!q) {
        this.error(null, "Need Parameter q As keyword!")
        return false
      }
      
      gplay.search({
        term: q,
        num: limit > 0 ? limit : 1,
        detail: detail,
        lang: lang,
        country: country
      }).then((result) => {
        this.success(result)
      })
    } catch (e) {
      this.error(null, e)
    }
  }
  
}

module.exports = AppListController