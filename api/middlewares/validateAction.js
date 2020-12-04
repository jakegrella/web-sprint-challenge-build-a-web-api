const validateAction = (req, res, next) => {
	try {
		const { project_id, description, notes } = req.body;
		if (!project_id || !description || !notes) {
			res.status(400).json({
				message: 'missing required project_id, description or name field',
			});
		} else next();
	} catch (err) {
		console.log(err.message);
		res.stats(500).json({ errorMessage: '500 error' });
	}
};

module.exports = validateAction;
