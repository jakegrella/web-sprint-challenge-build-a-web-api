const Projects = require('../projects/projects-model');

const validateProjectId = async (req, res, next) => {
	const { id } = req.params;
	try {
		const project = await Projects.get(id);
		if (!project) {
			res.status(404).json({ message: `project with id ${id} was not found` });
		} else {
			req.project = project;
			next();
		}
	} catch (err) {
		console.log(err.message);
		res.status(500).json({ errorMessage: '500 error' });
	}
};

module.exports = validateProjectId;
