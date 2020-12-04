const validateProject = (req, res, next) => {
	try {
		const { name, description } = req.body;
		if (!name || !description) {
			res.status(400).json({
				message: 'missing required project_id, description or name field',
			});
		} else next();
	} catch (err) {
		console.log(err.message);
		res.stats(500).json({ errorMessage: '500 error' });
	}
};

module.exports = validateProject;
