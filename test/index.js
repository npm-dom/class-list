var test = require('tape');
var cl = require('../');


test('cl(element).add("my-class")', function (t) {
  t.plan(2);
  var div = document.createElement('div');
  cl(div).add('my-class');
  t.equal(div.getAttribute('class'), 'my-class');
  cl(div).add('my-class');
  t.equal(div.getAttribute('class'), 'my-class');
});

test('cl(element).remove("my-class")', function (t) {
  t.plan(2);
  var div = document.createElement('div');
  div.setAttribute('class', 'my-class');
  cl(div).remove('my-class');
  t.equal(div.getAttribute('class'), '');
  cl(div).remove('my-class');
  t.equal(div.getAttribute('class'), '');
});

test('cl(element).contains("my-class")', function (t) {
  t.plan(2);
  var div = document.createElement('div');
  div.setAttribute('class', 'my-class');
  t.equal(cl(div).contains('my-class'), true);
  div.setAttribute('class', 'not-my-class');
  t.equal(cl(div).contains('my-class'), false);
});

test('cl(element).toggle("my-class")', function (t) {
  t.plan(2);
  var div = document.createElement('div');
  cl(div).toggle('my-class');
  t.equal(div.getAttribute('class'), 'my-class');
  cl(div).toggle('my-class');
  t.equal(div.getAttribute('class'), '');
});
