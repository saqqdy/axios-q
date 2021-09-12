# axios-q

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![gzip][gzip-image]][gzip-url]
[![License][license-image]][license-url]

[npm-image]: https://img.shields.io/npm/v/axios-q.svg?style=flat-square
[npm-url]: https://npmjs.org/package/axios-q
[travis-image]: https://travis-ci.com/saqqdy/axios-q.svg?branch=master
[travis-url]: https://travis-ci.com/saqqdy/axios-q
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/axios-q.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/axios-q?branch=master
[david-image]: https://img.shields.io/david/saqqdy/axios-q.svg?style=flat-square
[david-url]: https://david-dm.org/saqqdy/axios-q
[snyk-image]: https://snyk.io/test/npm/axios-q/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/axios-q
[download-image]: https://img.shields.io/npm/dm/axios-q.svg?style=flat-square
[download-url]: https://npmjs.org/package/axios-q
[gzip-image]: http://img.badgesize.io/https://unpkg.com/axios-q/lib/index.js?compression=gzip&label=gzip%20size:%20JS
[gzip-url]: http://img.badgesize.io/https://unpkg.com/axios-q/lib/index.js?compression=gzip&label=gzip%20size:%20JS
[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: LICENSE

# **完整文档请查阅： [API 完整文档](./docs/modules.md)**

## Install

```bash
# use npm
$ npm i axios-q --save

# use yarn
$ yarn add axios-q
```

## Usage

#### Global configuration

```js
// {app_root}/src/plugins/axios.js
import axiosQueue from 'axios-q'

export default options => {
    return new Promise((resolve, reject) => {
        axiosQueue
            .create(options, {
                // cancel request
                unique: true,
                setHeaders(instance) {
                    instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
                },
                // request
                onRequest(config) {
                    //
                    return config
                },
                // requestError
                onRequestError(err) {},
                // response
                onResponse(res) {
                    if (res.data.success) return res.data
                    return Promise.reject(res.data)
                },
                // responseError
                onResponseError(err) {},
                // error
                onError(err) {},
                // canceled
                onCancel(err) {}
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}
```

## Configuration

```
...
```

## Questions & Suggestions

Please open an issue [here](https://github.com/saqqdy/axios-q/issues).

## License

[MIT](LICENSE)
