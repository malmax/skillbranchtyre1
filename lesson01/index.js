var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODVjMTFhNWVlNWI1ODAwMTE4YmY2M2UiLCJ1c2VybmFtZSI6Im1hbG1heC5zcGJAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE0ODM3MDE2NTV9.hDBUMqz07V-V6Uq0DuIt-igiTUcsvtz7jQnzjbrp1dQ';
var skb = new Skb(token);
skb.taskHelloWorld('Приветствую Вас');

console.log('hello');
