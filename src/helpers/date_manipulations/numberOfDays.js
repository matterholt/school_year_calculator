
function numberOfDays(selectedDays) {
    return selectedDays.reduce((acc, crt) => acc + crt.dayCount, 0)
}


export default numberOfDays