class DateHelper {
    today(){
        var today = new Date()
        return this.extractDate(today)
    }

    previousDay(){
        var previousDay = new Date()
        previousDay.setMonth(previousDay.getMonth() - 6)
        return this.extractDate(previousDay)
    }

    extractDate(input){
        var dd = String(input.getDate()).padStart(2, '0')
        var mm = String(input.getMonth() + 1).padStart(2, '0')
        var yyyy = input.getFullYear()
        return yyyy + '-' + mm + '-' + dd
    }
}

const date = new DateHelper();
export default date;