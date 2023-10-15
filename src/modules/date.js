import { format, isToday, parseISO } from "date-fns";

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

export { formatDate, filterDate, findDateIndex }