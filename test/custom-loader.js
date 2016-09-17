'use strict'

const test = require('ava')
const ai = require('../index')

test('custom loader', t => t.deepEqual(
    ai('./fixtures', '*.+(js|es)', p => {
        const result = {}
        const name = p.split(/[\/\\]+/).slice(-2).join('/')
        result[name] = require(p)
        return result
    }),
    {
        'fixtures/a.es'     : {name: 'a.es file'},
        'fixtures/b.es'     : {name: 'b.es file'},
        'fixtures/a.js'     : {name: 'a.js file'},
        'fixtures/b.js'     : {name: 'b.js file'},
        'fixtures/index.js' : {name: 'index.js file'},
    }
))
