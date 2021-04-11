/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const placeA = email.lastIndexOf('@');
  const result = email.slice(placeA + 1, email.length);
  return result;
}

module.exports = getEmailDomain;
