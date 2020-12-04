const express = require('express');

const Projects = require('./projects-model');

//middlewares
const validateProjectId = require('../middlewares/validateProjectId');
const validateProject = require('../middlewares/validateProject');

const router = express.Router();

// 🌕   [GET] /api/projects (sends array of projects or empty array as res)
router.get('/', async (_, res) => {
	try {
		const projects = await Projects.get();
		res.status(200).json(projects);
	} catch (err) {
		console.log(err);
		res.status(500).json({ errorMessage: '500 errror' });
	}
});

// 🌕   [GET] /api/projects/:id (sends project with given id as res)
router.get('/:id', [validateProjectId], async (req, res) => {
	res.status(200).json(req.project);
});

// 🌕   [POST] /api/projects (sends new project as res)
router.post('/', [validateProject], async (req, res) => {
	await Projects.insert(req.body);
	res.status(200).json(req.body);
});

// 🌕   [PUT] /api/projects/:id (sends updated project as res)
router.put('/:id', [validateProjectId], [validateProject], async (req, res) => {
	const { id } = req.params;
	await Projects.update(id, req.body);
	res.status(201).json(req.body);
});

// 🌕   [DELETE] /api/projects/:id (sends confirmation as res)
router.delete('/:id', [validateProjectId], async (req, res) => {
	const { id } = req.params;
	await Projects.remove(id);
	res.status(200).json(`project with id ${id} deleted`);
});

// 🌕   [GET] /api/projects/:id/actions (sends array of actions or empty array as res)
router.get('/:id/actions', [validateProjectId], async (req, res) => {
	const { id } = req.params;
	const projectActions = await Projects.getProjectActions(id);
	res.status(200).json(projectActions);
});

module.exports = router;
