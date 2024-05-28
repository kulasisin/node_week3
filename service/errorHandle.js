function errorHandle(res, message) {
  res.send({
    status: false,
    message,
  });
  res.end();
}
module.exports =  errorHandle;
