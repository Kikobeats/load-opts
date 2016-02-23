/* global describe, it */

'use strict'

var loadOpts = require('..')('test')
var path = require('path')

describe('load-opts', function () {
  it('without file', function () {
    loadOpts().length.should.be.equal(9)
  })

  it('without file and without cli', function () {
    process.argv = [process.argv[0], process.argv[1]]
    loadOpts().length.should.be.equal(0)
  })

  it('with file', function () {
    var filepath = path.join(__dirname, 'fixture')
    process.argv.push(filepath)

    var expected = [ '-w 1', filepath ]
    loadOpts().should.be.eql(expected)
  })
})
