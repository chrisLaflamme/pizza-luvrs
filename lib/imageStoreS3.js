const AWS = require('aws-sdk');

const s3 = new AWS.S3();

module.exports.save = (name, data, callback) => {
  let params = {
    Bucket: 'chris-bucket0',
    Key: `pizzas/${name}.png`,
    Body: new Buffer(data, 'base64'),
    ContentEncoding: 'base64',
    ContentType: 'image/png'
  };

  s3.putObject(params, (err, data) => {
    callback(err, `//s3.amazonaws.com/chris-bucket0/${params.Key}`)
  });
};
