<script>
    import moment from 'moment'

    let setStartDate = '2023-10-10'

    $: setEndDate = moment(setStartDate, 'YYYY-MM-DD')
        .add(timeNeedForCourse + timeOffScheduled, 'days')
        .format('YYYY-MM-DD')

    $: numberOfWeekForSchoolYear =
        moment(setStartDate).diff(setEndDate, 'weeks') * -1

    let sessionsPerWeek = 5
    let timeNeedForCourse = 200
    let timeOffScheduled = 80
</script>

<section>
    <label for="startDate" class="input_startDate"
        >Start Date:
        <input type="date" id="startDate" bind:value={setStartDate} />
    </label>

    <label for="endDate" class="input_endDate"
        >End Date:
        <input type="date" id="endDate" bind:value={setEndDate} />
    </label>
    <label for="sessionsPerWeek"
        >Number of Sessions per Week:
        <input
            type="number"
            id="sessionsPerWeek"
            bind:value={sessionsPerWeek}
            min="1"
        /></label
    >
    <div>
        <p>INPUTS for calculations</p>
        <ul>
            <li>
                {setEndDate}
            </li>
            <li>
                TOTAL days {moment(setEndDate).diff(setStartDate, 'days')}
            </li>
            <li>
                number of weeks {moment(setEndDate).diff(setStartDate, 'w')}
            </li>
            <li>{timeNeedForCourse} for course works</li>
            <li>{timeOffScheduled} day planed Off</li>
            <li>{numberOfWeekForSchoolYear} number of weeks</li>
        </ul>
    </div>
</section>

<style>
    .input_endDate {
        grid-row: 2;
        grid-column: 1;
    }
    .input_startDate {
        grid-row: 1;
        grid-column: 1;
    }
    section {
        grid-column: 1/2;
        display: grid;
        grid-template-rows: repeat(3, 150px);
        grid-template-columns: repeat(2, 1fr);
    }
    label {
        font-weight: bold;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 150px;
    }

    input,
    textarea {
        margin-bottom: 10px;
        padding: 5px;
    }
</style>
