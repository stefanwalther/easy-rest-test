const Winston = require('winston');

module.exports = {
  development: [
    {
      transporter: Winston.transports.Console,
      options: {
        name: 'Console',
        level: 'trace',
        colorize: true,
        json: false,
        prettyPrint(object) {
          return JSON.stringify(object, null, 2);
        },
        handleExceptions: true
      }
    }
  ],
  production: [
    {
      transporter: Winston.transports.File,
      options: {
        name: 'File',
        filename: 'foo.log'
      }
    }
  ],
  test: [
    // your transports for test
  ]
};
