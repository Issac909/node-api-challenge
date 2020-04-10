module.exports = function validateProject(req, res, next) {
    resource = {
        name: req.body.name,
        description: req.body.description
    }

    if(!req.body.description) {
        return res.status(404).json({ message: 'Cant post with empty description' })
    } else if (req.body.description.length <= 128){
        req.body = resource;
        next();
    } else {
        return res.status(500).json({ message: 'Description cant be over 128 characters' })
    }
};