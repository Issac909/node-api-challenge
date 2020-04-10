const express = require('express');
const actions = require('../data/helpers/actionModel');
const router = express.Router();

const validateActionId = require('../common/validate-action-id');
const validateAction = require('../common/validate-action');

router.get('/', (req, res) => {
    actions
        .get()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json({ message: 'Error retrieving actions', err }));
});

router.get('/:id', validateActionId, (req, res) => {
    actions
        .get(req.params.id)
        .then(action => res.status(200).json(action))
        .catch(err => res.status(404).json({ message: 'Cant find action with that ID', err }))
})

router.post('/', validateAction, validateActionId, (req, res) => {
    actions
        .insert(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(404).json({ message: 'Cant post action', err }));
});

router.delete('/:id', validateActionId, (req, res) => {
    actions
        .remove(req.params.id)
        .then(action=> {res.status(200).json({ message: 'Action deleted' })})
        .catch(err => res.status(404).json({ message: 'Cant delete action', err}));
});

router.put('/:id', validateAction, (req, res) => {
    actions
        .update(req.params.id, req.notes)
        .then(data => res.status(201).json(data))
        .catch(err => res.status(404).json({ message: 'Couldnt update that post', err}));
});

module.exports = router;