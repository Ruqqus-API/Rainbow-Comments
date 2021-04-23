module.exports = (router) => {
    router
		.get("/", (req, res) => {
			res.render("changelog")
		});
    return router;
};
