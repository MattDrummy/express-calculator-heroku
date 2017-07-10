# Express Calculator

Create a simple calculator app using Express.  To start, make sure you have cloned this repository, then get started from this directory.

#### Objectives
- Attach request handlers to specific routes
- Gather information from the request and serve a response based on that information
- Use [`req.params`](http://expressjs.com/en/4x/api.html#req.params) to access dynamic path variables
- Serve responses with the correct status code

### Directions

Create an express application by either using the express generator, or by writing an `app.js` file.

#### TDD-Style
This exercise comes with tests. Instructors will run these tests against your code, so in order for this assignment to be considered complete **all tests must pass**. Your code must be _linted_ and clean as well.

Run the tests by typing:

```shell
$ npm test
```


### Routes

Using [`res.send`](http://expressjs.com/en/4x/api.html#res.send), make the following work:

* When a user visits `/add/9/3`, it should display 12
* When a user visits `/sub/9/3`, it should display 6
* When a user visits `/mult/9/3`, it should display 27
* When a user visits `/div/9/3`, it should display 3

### Add some logic

Using dynamic route segments (path parameters), refactor your code to use only one route rather than 4 separate routes.

### Handle Decimals

Make your app correctly calculate `/add/1.2/1.2` to `2.4`.

### Use [Status Codes](https://http.cat/)
Remember to send the correct status code as well - Express sends a 200 automatically for you, but if you get bad input (like, not numbers), you should return a [status 400](https://http.cat/400).
