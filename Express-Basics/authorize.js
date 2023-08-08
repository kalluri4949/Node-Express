const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'rakesh') {
    req.user = { name: 'rakesh', id: 1 };
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
  console.log('Authorized');
  next();
};
module.exports = authorize;
