const Express = require('express')
const AppIdController = require("controllers/AppId.controller")
const AppListController = require("controllers/AppList.controller")
const { log } = require('middleware/logging')

const router = Express.Router()
class Route {
    init() {
        return [
            this.get('/apps/id/:appId', (req, res, next) => new AppIdController(req, res,next).index()),
            this.get('/apps/id/:appId/reviews', (req, res, next) => new AppIdController(req, res,next).review()),
            this.get("/apps/lists/", (req, res, next) => new AppListController(req, res, next).index()),
            this.get("/apps/list/categories", (req, res, next) => new AppListController(req, res, next).allCategories()),
            this.get("/apps/list/collections", (req, res, next) => new AppListController(req, res, next).allCollections()),
            this.get("/apps/list/category/:category", (req, res, next) => new AppListController(req, res, next).showCategory()),
            this.get("/apps/list/collection/:collection", (req, res, next) => new AppListController(req, res, next).showCollection()),
            this.get("/apps/search", (req, res, next) => new AppListController(req, res, next).search()),
        ]
    }

    // eslint-disable-next-line class-methods-use-this
    get(...args) {
        // add middleware log
        args.push(log)
        return router.get(...args)
    }
}

exports.Route = Route