const Actions = require('../actions/actions-model');

const validateAction = (req, res, next) => {
	const { description, notes, project_id } = req.body;
	if (!description || !notes || !project_id) {
		res
			.status(400)
			.json({ message: 'missing required description or name field' });
	} else {
		req.action.id = res.id;
		next();
	}
};

module.exports = validateAction;
