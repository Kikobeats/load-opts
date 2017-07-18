'use strict'

const fs = require('fs')
const path = require('path')
const existFile = require('exists-file')
const trimNewlines = require('trim-newlines')
const isDirectory = require('is-directory').sync

const getFile = (namespace, base, env) => {
  env = env ? '.' + env : ''
  return path.join(base, namespace + env + '.opts')
}

const fileDetected = (namespace, filepath, env) => {
  const envFile = getFile(namespace, filepath, env)
  return existFile.sync(envFile) ? envFile : null
}

module.exports = (namespace) => (yargs = process.argv.slice(2)) => {
  if (yargs.length !== 1) return yargs

  let filepath = path.resolve(yargs[0])
  if (!isDirectory(filepath)) filepath = path.join(filepath, '..')

  filepath = fileDetected(namespace, filepath, process.env.NODE_ENV)
  if (!filepath) return yargs

  const config = trimNewlines(fs.readFileSync(filepath, 'utf8')).split('\n')
  return config.concat(yargs)
}
