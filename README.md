# load-opts

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/load-opts.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/load-opts.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/load-opts/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/load-opts)
[![Dependency status](http://img.shields.io/david/Kikobeats/load-opts.svg?style=flat-square)](https://david-dm.org/Kikobeats/load-opts)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/load-opts.svg?style=flat-square)](https://david-dm.org/Kikobeats/load-opts#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/load-opts.svg?style=flat-square)](https://www.npmjs.org/package/load-opts)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Load opts config file.

## Install

```bash
$ npm install load-opts --save
```

## Usage

```js
const loadOpts = require('load-opts')('myFileName')
loadOpts() // => [...]
```

## How Works

1) If you provide CLI params, then the methods returns it.
2) If you don't provide CLI but a opts file exists in the path of the file, returns file params.

## License

MIT © [Kiko Beats](http://kikobeats.com)
