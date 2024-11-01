const tracker = (req, _, next) => {
  console.log({
    method: req.method,
    path: req.path,
    query: req.query,
    body: req.body,
    params: req.params,
    header: req.header,
    timeStamp: new Date(),
  });

  next();
};

module.exports = { tracker };
