let http = (url, body) => {
    var myHeaders = new Headers()

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'deafult'
    }

    let paramsList = Object.entries(body)

    console.log(paramsList)

    let params = paramsList.map((param) => {
        return `${param[0]}=${param[1]}`
    }).join('&')

    url = url + '?' + params
    console.log(url)

    fetch(url, myInit)
        .then(e => e.json())
        .then(data => {
        console.log(data)
    })
}

export default http