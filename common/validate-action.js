module.exports = function validateAction(req, res, next) {
    resource = {   
      description: req.body.description,
      notes: req.body.notes
    };
  
    if (!req.body.notes) {
      return res.status(404).json({ message: "Cant submit empty notes" });
    } else if (req.body.description.length <= 128) {
      req.body.notes = resource.notes;
      req.body.description = resource.description;
      next();
    } else {
      return res
        .status(500)
        .json({ message: "Description can only be 128 characters" });
    }
  };