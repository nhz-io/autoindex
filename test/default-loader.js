'use strict'

const test = require('ava')
const ai = require('../index')

test('Validate `directory` argument', t =>
    t.throws(() => ai())
)

test('Default loader', t => t.deepEqual(
    ai('./fixtures'),
    {a: {name: 'a.js file'}, b: {name: 'b.js file'}}
))


test('Custom glob', t => t.deepEqual(
    ai('./fixtures', '*.es'),
    {a: {name: 'a.es file'}, b: {name: 'b.es file'}}
))
