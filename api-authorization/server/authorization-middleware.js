const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  /* your code here */
  /**
   * Try to get the 'X-Access-Token' from the req.headers.
   * If no token is provided,
   *   throw a 401 error with the message 'authentication required'
   * Use jwt.verify() to verify the authenticity of the token and extract its payload
   * Assign the extracted payload to the user property of the req object.
   * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
   */
  const authToken = req.headers['x-access-token'];
  if (!authToken) {
    throw new ClientError(401, 'authentication required');
  } else {
    try {
      const payload = jwt.verify(authToken, process.env.TOKEN_SECRET);
      req.user = payload;
      next();
    } catch (err) {
      next(err);
    }
  }
  /**
    * References:
    * https://nodejs.org/api/http.html#http_message_headers
    * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    */
}

module.exports = authorizationMiddleware;
