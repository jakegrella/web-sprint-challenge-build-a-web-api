const express = require('express');

const Actions = require('./actions-model');

const validateActionId = require('../middlewares/validateActionId');
const validateAction = require('../middlewares/validateAction');

const router = express.Router();

// 🌕   [GET] /api/actions (sends array of actions or empty array as res)
router.get('/', async (req, res) => {
	try {
		const actions = await Actions.get();
		res.status(200).json(actions);
	} catch (err) {
		console.log(err);
		res.status(500).json({ errorMessage: '500 errror' });
	}
});

// 🌕   [GET] /api/actions/:id (sends action with given id as res)
router.get('/:id', [validateActionId], async (req, res) => {
	res.status(200).json(req.action);
});

// 🌕   [POST] /api/actions (sends new action as res)
router.post('/', [validateAction], async (req, res) => {
	await Actions.insert(req.body);
	res.status(200).json(req.body);
});

// 🌕   [PUT] /api/actions (sends updated action as res)
router.put('/', [validateAction], async (req, res) => {
	await Actions.update(req.action.id, req.body);
	res.status(201).json(req.body);
});

module.exports = router;
