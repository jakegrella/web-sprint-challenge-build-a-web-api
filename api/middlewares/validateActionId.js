const Actions = require('../actions/actions-model');

const validateActionId = async (req, res, next) => {
	const { id } = req.params;
	try {
		const action = await Actions.get(id);
		if (!action) {
			res.status(404).json({ message: `action with id ${id} was not found` });
		} else {
			req.action = action;
			next();
		}
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errorMessage: '500 error' });
	}
};

module.exports = validateActionId;
