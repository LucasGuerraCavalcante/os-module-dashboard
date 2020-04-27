const os = require('os')

module.exports = {

    index: (req, res) => {

        const total = parseInt(os.totalmem() / 1024 / 1024)
        const mem = parseInt(os.freemem() / 1024 / 1024)
        const percents = parseInt((mem / total) * 100 )

        const arch = os.arch()
        const platform = os.platform()
        const hostname = os.hostname()
        const release = os.release()
        const type = os.type()

        // https://www.w3resource.com/javascript/object-property-method/date-getDay.php
        const weekDay = new Date().getDay()
        const day = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()
        const timezone = new Date().getTimezoneOffset()

        // const networkInterfaces = os.networkInterfaces()

        // const cpus = os.cpus()
        // const model = cpus.model
        // const speed = cpus.speed


        const stats = {

            memory: {
                raw: {
                    free: mem,
                    total: total,
                    usage: percents
                },
                formatted: {
                    free: `${mem} MB`,
                    total: `${total} MB`,
                    usage: `${percents}%`
                }
            },
            arch: arch,
            platform: platform,
            hostname: hostname,
            release: release,
            type: type,
            weekDay: weekDay,
            day: day,
            month: month,
            year: year,
            timezone: timezone

        
        }

        return res.json(stats)
    },

}