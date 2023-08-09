<script>
    import moment from 'moment'

    let daysPerWeek = 4
    let longestLesson = 120

    let typicalSchoolWeeks = 36
    let typicalSchoolDays = typicalSchoolWeeks * 5

    let weeksNeedForCourse = longestLesson / daysPerWeek
    let daysNeedForCourse = longestLesson

    let daysScheduledOff = 30
    let weekScheduledOff = daysScheduledOff / 5
</script>

<section class="schedule_column">
    <h3>estimated school year</h3>
    <div class="schedule_row">
        <p />
        <p>weeks/Days</p>
    </div>
    <div class="schedule_row">
        <p>Public School @ {5} days</p>
        <p>{typicalSchoolWeeks} / {typicalSchoolDays}</p>
    </div>
    <div class="schedule_row">
        <p>Home School @ {daysPerWeek} days</p>
        <p>{weeksNeedForCourse} / {daysNeedForCourse}</p>
    </div>
    <div class="schedule_row">
        <p>Difference</p>
        <p>
            {typicalSchoolWeeks - weeksNeedForCourse} / {typicalSchoolDays -
                daysNeedForCourse}
        </p>
    </div>
</section>

<style>
    .schedule_column {
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        height: min-content;
        grid-column: 2;
    }
    .schedule_row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
</style>
