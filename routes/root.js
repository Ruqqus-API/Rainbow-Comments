module.exports = {
	path: '/',
	config: (router) => {
		router.get('/', (req, res) => {
			res.render('index');
		})

		return router;
	},
};
