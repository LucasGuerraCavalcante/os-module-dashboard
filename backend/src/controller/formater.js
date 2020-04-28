
module.exports = { 

    number(num) {
        if (num < 10) {
            return `0${num}`
        } else {
            return `${num}`
        }
    },

    week(week) {
        if (week == 0) {
            return "Sunday"
        }
        else if (week == 1) {
            return "Monday"
        }
        else if (week == 2) {
            return "Tuesday"
        }
        else if (week == 3) {
            return "Wednesday"
        }
        else if (week == 4) {
            return "Thursday"
        }
        else if (week == 5) {
            return "Friday"
        }
        else if (week == 6) {
            return "Saturday"
        }
    },

    operationalSystem(os) {
        if (os == "Darwin") {
            return "macOS"
        } else if (os == "Windows_NT'") {
            return "Windows"
        } else {
            return os
        }
    },



}