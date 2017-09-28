// my attempt

const queryString =
{
  stringify (params, Object) {
    return '?' + params + '&' + Object
  }
}

queryString.stringify({})

// solution
const queryString = {
  stringify: function(object) {
    const keys = Object.keys(object)

    if (keys.length < 1) return ''
    let result = []
    for (var i = 0; i < keys.length; i++) {
      if (i === 0) {
        result.push('?' + keys[i] + '=' + object[keys[i]])
      } else {
        result.push('&' + keys[i] + '=' + object[keys[i]])
      }
    }

    return result.join('')
  }
}
