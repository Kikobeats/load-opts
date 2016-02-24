'use strict'

var fs = require('fs')
var path = require('path')
var existFile = require('exists-file')
var trimNewlines = require('trim-newlines')
var isDirectory = require('is-directory').sync

function getFile(namespace, base, env) {
  env = env ? '.' + env : ''
  return path.join(base, (namespace + env + '.opts'))
}

function fileDetected(namespace, filepath, env) {
  var envFile = getFile(namespace, filepath, env)
  if (existFile(envFile)) return envFile
  return null;
}

module.exports = function (namespace) {
  return function readConfig (yargs) {
    yargs = yargs || process.argv.slice(2)
    if (yargs.length !== 1) return yargs

    var filepath = path.resolve(yargs[0])
    if (!isDirectory(filepath)) filepath = path.join(filepath, '..')

    filepath = fileDetected(namespace, filepath, process.env.NODE_ENV)
    if (!filepath) return yargs

    var config = fs.readFileSync(filepath, 'utf8')
    config = trimNewlines(config).split('\n')

    return config.concat(yargs)
  }
}
