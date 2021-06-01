module.exports = (err, req, res, next) => res.status(200).send({ status: 404, message: 'Object not found' });
