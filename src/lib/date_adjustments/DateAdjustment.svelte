<script>
    import moment from 'moment'
    let startDate = moment('2023-09-05').format('YYYY-MM-DD')

    let daysPerWeek = 4
    let longestLesson = 120

    let weeksNeedForCourse = longestLesson / daysPerWeek
    let daysNeedForCourse = longestLesson

    let daysScheduledOff = 30
    let weekScheduledOff = daysScheduledOff / 5

    let estimatedWeeks = weeksNeedForCourse + weekScheduledOff
    let tradEstimatedWeek = weekScheduledOff + 36

    let endDate = moment(startDate)
        .add(estimatedWeeks, 'weeks')
        .format('YYYY-MM-DD')

    let tradEndDate = moment(startDate)
        .add(tradEstimatedWeek, 'weeks')
        .format('YYYY-MM-DD')

    let diffOfDays = moment(tradEndDate).diff(endDate, 'days')
</script>

<section class="schedule_column">
    <div class="schedule_row-date">
        <p>day per week : {daysPerWeek}</p>
        <p>Start : {startDate}</p>
        <p>Days Off : {daysScheduledOff}</p>
    </div>
    <div class="schedule_row">
        <p>Public school (36 wk)<br />{tradEndDate}</p>
        <p>Home school ({weeksNeedForCourse} wk) <br />{endDate}</p>
        <p>Diff of days <br />{diffOfDays}</p>
    </div>
</section>

<style>
    .schedule_column {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        height: min-content;
        grid-column: 1;
    }
    .schedule_row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .schedule_row-date {
        display: flex;
        justify-content: space-evenly;
    }
</style>
