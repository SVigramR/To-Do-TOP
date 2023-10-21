import { addDays, format, getDay, isAfter, nextSunday, startOfWeek, parse } from "date-fns";

function formatDate(getDate) {
    return format(new Date(Date.parse(getDate)), 'LLL do yyyy')
}

function filterDate(date, arrayObject) {
    return arrayObject.filter((findDate) => {
        return findDate.dueDate === date
    })
}

function findDateIndex(mainArray, projectName) {
    let indexNumber = [];
    if (projectName === 'today') {
        let ind = mainArray.findIndex(item => { return item.dueDate === formatDate(new Date())})
        indexNumber.push(ind.toString())
    }

    return indexNumber;
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
    let unique = [];
    let nextWeek = [];
    array.forEach(element => {
        if (!unique.includes(element.dueDate)) { 
                unique.push(element.dueDate);
        } 
    }); 
    unique.sort()
    for (let index = 0; index < unique.length; index++) {
        if (isAfter(formatStringToDate(unique[index]), formatStringToDate(nextWeekStart)) || unique[index] === nextWeekStart) {
            nextWeek.push(unique[index])
        }
    }
    return nextWeek;
}

function formatStringToDate(date) {
    return parse(date, 'LLL do yyyy', new Date());
}

export { formatDate, filterDate, findDateIndex, evaluateWeekDays, evaluateUpcomingdays, formatStringToDate }