const fs = require("fs");

const loggerMiddleware = (req, res, next) => {
  let reqData = `Method: ${req.method} | EndPoint: ${req.url}`;

  fs.appendFileSync("./logs.txt", reqData+ "\n");
  next();
};

module.exports = loggerMiddleware;
