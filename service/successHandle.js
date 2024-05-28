function successHandle(obj) {
    const { res, data, message } = obj;
    res.send({
      status: true,
        message,
        data,
    })
    res.end();
  }

  module.exports =  successHandle;