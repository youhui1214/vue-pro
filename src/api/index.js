import request from './helpers'


export function getData() {
    return request({
        url:'./data.json',
        method: 'get'
    })
}

