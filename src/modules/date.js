import { addDays, format, getDay, isAfter, nextSunday, startOfWeek, parse, isBefore } from "date-fns";

function formatDate(getDate) {
    return format(new Date(Date.parse(getDate)), 'LLL do yyyy')
}

function filterDate(date, arrayObject) {
    return arrayObject.filter((findDate) => {
        return findDate.dueDate === date
    })
}

function evaluateWeekDays(weekDate) {
    const day = getDay(weekDate)
    const week = []
    let weekStart = startOfWeek(weekDate);
    for (let index = day; index < 7; index++) {
        let loop = addDays(weekStart, index)
        week.push(formatDate(loop))
    }
    return week
}

function evaluateUpcomingdays(date, array) {
    const nextWeekStart = formatDate(nextSunday(date))
    const uniqueDate = uniqueDates(array);
    let nextWeek = [];
    for (let index = 0; index < uniqueDate.length; index++) {
        if (isAfter(formatStringToDate(uniqueDate[index]), formatStringToDate(nextWeekStart)) || uniqueDate[index] === nextWeekStart) {
            nextWeek.push(uniqueDate[index])
        }
    }
    return nextWeek;
}

function evaluatePendingDays(date, array) {
    const uniqueDate = uniqueDates(array);
    let previousDate = []
    for (let index = 0; index < uniqueDate.length; index++) {
        if(isBefore(formatStringToDate(uniqueDate[index]), date)) {
            previousDate.push(uniqueDate[index])
        }
    }
    return previousDate;
}

function uniqueDates(array) {
    let unique = [];
    array.forEach(element => {
        if (!unique.includes(element.dueDate)) { 
                unique.push(element.dueDate);
        } 
    }); 
    return unique.sort()
}

function formatStringToDate(date) {
    return parse(date, 'LLL do yyyy', new Date());
}

export { formatDate, filterDate, evaluateWeekDays, evaluateUpcomingdays, evaluatePendingDays,formatStringToDate }