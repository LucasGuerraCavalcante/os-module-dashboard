const os = require('os')
const fetch = require("node-fetch");

const format = require('./formater');

module.exports = {

    index: async (req, res) => {

        const total = parseInt(os.totalmem() / 1024 / 1024)
        const free = parseInt(os.freemem() / 1024 / 1024)
        const usage = total - free
        const percents = parseInt((free / total) * 100 )

        const arch = os.arch()
        const platform = os.platform()
        const hostname = os.hostname()
        const release = os.release()
        const type = os.type()

        const weekDay = new Date().getDay()
        const day = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()
        const hour = new Date().getHours()
        const minutes = new Date().getMinutes()

        const url = 'http://gd.geobytes.com/GetCityDetails?'

        let response = await fetch(url)
        let result = await response.json();
        const location = result

        const info = {

            memory: {
                free: free, // MB
                total: total, // MB
                usage: usage, // MB
                percents: percents // %
            },
            computer: {
                arch: arch,
                platform: platform,
                hostname: hostname,
                release: release,
                type: format.operationalSystem(type),
            },
            network: {
                ipaddress: location.geobytesipaddress,
            },
            location: {
                countryCode: location.geobytesinternet,
                country: location.geobytescountry,
                regionCode: location.geobytescode,
                region: location.geobytesregion,
                city: location.geobytescity,
                continent: location.geobytesmapreference,
                latitude: location.geobyteslatitude,
                longitude: location.geobyteslongitude,  
                currencyCode: location.geobytescurrencycode,
                currency: location.geobytescurrency,
                timezone:  `UTC ${location.geobytestimezone}`,
            },
            datetime: {
                weekDay: format.week(weekDay),
                day: format.number(day),
                month: format.number(month),
                year: year,
                hour: format.number(hour),
                minutes: format.number(minutes)
            }
        }

        return res.json(info)
    },

}