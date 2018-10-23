const router = require("express").Router();
const articlesController = require("../../ModelsandControllers/controllers/articlesController");

// NOTE: these are "/api/articles" 
router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);

// NOTE: these are to "/api/articles/:id" - for certain individual articles
router.route("/:id")
    .get(articlesController.findById)
    .put(articlesController.update)
    .delete(articlesController.remove);

module.exports = router;