// Require module:
const env = require('dotenv').config({ path: '../../.env' })

var MY_SLACK_WEBHOOK_URL = `https://hooks.slack.com/services/${process.env.SLACK_TOKEN}`;
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);


slack.alert({
  text: ':sparkles: New version alive',
  fields: {
    'Information': 'Data base updated',
    'link': process.env.PREPROD_URL
  },
});