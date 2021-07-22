// V 1.0.0
var fetch = require('node-fetch')
var { err_bug, err_fetch, err_get } = require('./lib/text')
var axios = require('axios')
var fs = require('fs')

module.exports = {
    // FIX BUG BY FARHAN ID
    fetchJson: async function(link, opti) {
        return new Promise((resolve, reject) => {
                fetch(link, opti)
                    .then(response => response.json())
                    .then(json => {
                        resolve(json)
                    })
                    .catch((err) => {
                         reject(err)
                    })
        })
    },
    getBuffer: async function(link, opti) {
        // ENTAH BUG ATAU TDK
        return new Promise((resolve, reject) => {
                try {
                        options ? options : {}
                        const res = axios({
                                method: "get",
                                url,
                                headers: {
                                        'DNT': 1,
                                        'Upgrade-Insecure-Request': 1
                                },
                                ...options,
                                responseType: 'arraybuffer'
                        })
                        return res.data
                } catch (e) {
                        console.log(err_get())
                }
        })
    }
}

/* | TERIMAKASIH |

- FarhanID
- Fhteam
- Riri
- All contributor



















*/

