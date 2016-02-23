'use strict'

var fs = require('fs')
var path = require('path')
var existFile = require('exists-file')
var trimNewlines = require('trim-newlines')
var isDirectory = require('is-directory').sync

module.exports = function (filename) {
  return function readConfig (yargs) {
    yargs = yargs || process.argv.slice(2)
    if (yargs.length !== 1) return yargs

    var filepath = path.resolve(yargs[0])
    if (!isDirectory(filepath)) filepath = path.join(filepath, '..')

    filename = filename + '.opts'
    filepath = path.join(filepath, filename)

    if (!existFile(filepath)) return yargs

    var config = fs.readFileSync(filepath, 'utf8')
    config = trimNewlines(config).split('\n')

    return config.concat(yargs)
  }
}
