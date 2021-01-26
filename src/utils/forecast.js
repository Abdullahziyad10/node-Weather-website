const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=19cec90ca648a1d4677289e82ec5f88f&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(
              undefined,
              body.current.weather_descriptions +
                " It is currently " +
                body.current.temperature +
                " degress out. There is a " +
                body.current.precipProbability +
                "% chance of rain."
            );
        }
    })
}

module.exports = forecast