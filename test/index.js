/* global afterEach, describe, it */

'use strict'

const loadOpts = require('..')('test')
const path = require('path')

const cloneArray = (arr) => arr.slice(0)
const originalArgv = cloneArray(process.argv)

describe('load-opts', function () {
  afterEach(function () {
    process.argv = originalArgv
  })

  it("without detect file and don't pass CLI options, return empty array", function () {
    loadOpts([]).length.should.be.equal(0)
  })

  it('without file but with cli options, returns cli options as array', function () {
    loadOpts(['-w 2']).length.should.be.equal(1)
  })

  it('passing a file, detect config in the path', function () {
    const filepath = path.join(__dirname, 'fixture')
    loadOpts([filepath]).should.be.eql(['-w 1', filepath])
  })

  it('passing file and cli options, choose cli options', function () {
    const filepath = path.join(__dirname, 'fixture')
    loadOpts(['-w 2', filepath]).should.be.eql(['-w 2', filepath])
  })

  it('load opts files based on env', function () {
    const filepath = path.join(__dirname, 'fixture')
    process.env.NODE_ENV = 'testing'
    loadOpts([filepath]).should.be.eql(['-w 3', filepath])
  })
})
