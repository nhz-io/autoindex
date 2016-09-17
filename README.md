<h1 align="center">@nhz.io/autoindex</h1>

<p align="center">
  <a href="https://npmjs.org/package/@nhz.io/autoindex">
    <img src="https://img.shields.io/npm/v/@nhz.io/autoindex.svg?style=flat"
         alt="NPM Version">
  </a>

  <a href="https://www.bithound.io/github/nhz-io/autoindex">
    <img src="https://www.bithound.io/github/nhz-io/autoindex/badges/score.svg"
         alt="Bithound Status">
  </a>

  <a href="https://github.com/nhz-io/autoindex/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/nhz-io/autoindex.svg?style=flat"
         alt="License">
  </a>

  <a href="https://npmjs.org/package/@nhz.io/autoindex">
  <img src="http://img.shields.io/npm/dm/@nhz.io/autoindex.svg?style=flat"
  alt="Downloads">
  </a>  
</p>

<h3 align="center">Autoindex directory (require) with custom loader<h2>

## Install
```shell
npm i -S @nhz.io/autoindex
```

## Usage
```javascript
const ai = require('@nhz.io/autoindex')

module.exports = ai(__dirname, glob, loader)
...
```

## Example

```javascript
/** +-+
  *   +- index.js
  *   +- a.js
  *   +- b.js
  */

// File: index.js
const ai = require('@nhz.io/autoindex')

module.exports = ai(__dirname) // a.js and b.js are autorequired and exported
```

## Notes
* `glob` and `loader` are optional
* Default `glob` is: `*.+(js|json)`
* Default loader will skip `index.*` files
* Custom `loader` will receive the path of the matching module as a first argument

## License

### [MIT](LICENSE)
