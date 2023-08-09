<script>
    import moment from 'moment'
    export let daysScheduledOff = 30

    let startDate = moment('2023-09-05').format('YYYY-MM-DD')

    let daysPerWeek = 4
    let longestLesson = 120

    let typicalSchoolWeeks = 36
    $: typicalSchoolDays = typicalSchoolWeeks * 5

    $: weeksNeedForCourse = longestLesson / daysPerWeek
    $: daysNeedForCourse = longestLesson

    $: weekScheduledOff = daysScheduledOff / 5

    $: estimatedWeeks = weeksNeedForCourse + weekScheduledOff
    $: tradEstimatedWeek = weekScheduledOff + 36

    $: courseBaseEndDate = moment(startDate)
        .add(estimatedWeeks, 'weeks')
        .format('MM-DD-YYYY')

    $: tradEndDate = moment(startDate)
        .add(tradEstimatedWeek, 'weeks')
        .format('MM-DD-YYYY')

    $: diffOfDays = moment(tradEndDate).diff(courseBaseEndDate, 'days')
</script>

<section class="schedule_column">
    <h3>estimated school year</h3>
    <div class="schedule_row-date">
        <p>Start : <input type="date" bind:value={startDate} /></p>
        <p>
            day per week : <input
                type="number"
                bind:value={daysPerWeek}
                min="1"
                max="7"
            />
        </p>
        <p>Days Off : {daysScheduledOff}</p>
    </div>
    <div class="schedule_row">
        <p />
        <p>weeks/Days</p>
        <p>End Date</p>
    </div>
    <div class="schedule_row">
        <p>Traditional @ {5} days</p>
        <p>{typicalSchoolWeeks} / {typicalSchoolDays}</p>
        <p>{tradEndDate}</p>
    </div>
    <div class="schedule_row">
        <p>Course Based @ {daysPerWeek} days</p>
        <p>{weeksNeedForCourse} / {daysNeedForCourse}</p>
        <p>{courseBaseEndDate}</p>
    </div>
    <div class="schedule_row">
        <p>Difference</p>
        <p
            style="color:{typicalSchoolWeeks - weeksNeedForCourse <= 0
                ? 'red'
                : ''}"
        >
            {typicalSchoolWeeks - weeksNeedForCourse} / {typicalSchoolDays -
                daysNeedForCourse}
        </p>
        <p style="color:{diffOfDays <= 0 ? 'red' : ''}">{diffOfDays}</p>
    </div>
</section>

<style>
    .schedule_column {
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        height: min-content;
        grid-column: 1/3;
    }
    .schedule_row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .schedule_row-date {
        display: flex;
        justify-content: space-evenly;
        border-bottom: solid 2px rgb(92, 92, 92);
    }
    .lessDay {
        color: red;
    }
</style>
