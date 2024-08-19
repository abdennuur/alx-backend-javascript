/**
 * Contains the miscellaneous route handlers.
 * @authorabdennour khatib <https://github.com/abdennuur>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
