/**
 * `BadRequestError` error.
 *
 * @api public
 */
function BadRequestError(message) {
  Error.call(this);
  // The 5th edition of ECMAScript (ES5) forbids use of arguments.callee() in strict mode.
  // Error.captureStackTrace(this, arguments.callee);
  this.name = 'BadRequestError';
  this.message = message || null;
};

/**
 * Inherit from `Error`.
 */
BadRequestError.prototype.__proto__ = Error.prototype;


/**
 * Expose `BadRequestError`.
 */
module.exports = BadRequestError;
