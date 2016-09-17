'use strict'

const path = require('path')
const globSync = require('glob').sync
const cc = require('camelcase')

const defaultGlob = '*.+(js|json)'

const defaultLoader = p => {
    const result = {}
    const name = cc(path.parse(p).name)

    if (!name.match(/index/i)) { // Skip index
        result[name] = require(p)
    }

    return result
}

module.exports = function (directory, glob, loader) {
    if (!directory) {
        throw new Error('missing directory')
    }

    glob = glob || defaultGlob
    loader = loader || defaultLoader

    return globSync(path.resolve(directory, glob)).reduce((a, p) => {
        return Object.assign(a, loader(p))
    }, {})
}
