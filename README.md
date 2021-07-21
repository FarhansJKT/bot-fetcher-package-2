# INSTALL 
```bash
> npm i bot-fetch2
```

# CONTRIBUTOR
you can download *.zip* 

# EXAMPLE
```javascript
var { fetchJson, getBuffer } = require('bot-fetch2');

fetchJson(url, options)
.then(anu => console.log(anu))
// FIX BUG FETCHER JSON

getBuffer(url, options)
// BUG ATAU ENGGAKNYA LAPOR AE
```

# EXAMPLE CASE BOT
```javascript
case 'tiny':
var { fetchJson } = require('bot-fetch2');
query = body.slice(6)
fetchJson('https://docs-api-fhans.herokuapp.com/api/short/tiny?apikey=FhansGanss&url=${query}')
.then(anu => {
    q = 'link asli : ${query}\nlink short : ${anu.result.link}'
    client.sendMessage(from, q, text, {quoted: mek})
})
break
```
