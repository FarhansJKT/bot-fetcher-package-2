const err_get = `tidak dapat melakukan tindakan buffer, mungkin kode eror`
const err_fetch = `tidak dapat melakukan tindakan fetch, mungkin kode eror`
const err_bug = `laporbug segera`

const emror_get = () => {
    return `*ERR!!* ${err_get}`
}

const emror_fetch = () => {
    return `*ERR!!* ${err_fetch}`
}

const emror_bug = () => {
    return `*ERR!!* ${err_bug}`
}

module.exports = { emror_get, emror_fetch, emror_bug }
