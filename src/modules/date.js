import { format } from "date-fns";

function formatDate(getDate) {
    return format(new Date(Date.parse(getDate)), 'LLL do yyyy')
}

function filterDate(date, arrayObject) {
    return arrayObject.filter((findDate) => {
        return findDate.dueDate === date
    })
}

export { formatDate, filterDate }