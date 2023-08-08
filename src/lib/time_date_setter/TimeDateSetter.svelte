<script>
    import moment from 'moment'

    let setStartDate = '2023-08-10'

    // Initial page load will have the projected date based on calculation
    $: setEndDate = moment(setStartDate, 'YYYY-MM-DD')
        .add(timeNeedForCourse + timeOffScheduled, 'days')
        .format('YYYY-MM-DD')

    $: numberOfWeekForSchoolYear =
        moment(setStartDate).diff(setEndDate, 'weeks') * -1

    $: totalDay = moment(setEndDate).diff(setStartDate, 'days')

    let sessionsPerWeek = 5
    let timeNeedForCourse = 215
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
    <label for="sessionsPerWeek" class="input_daysPerWeek"
        >Number of Sessions per Week:
        <input
            type="number"
            id="sessionsPerWeek"
            bind:value={sessionsPerWeek}
            min="1"
        /></label
    >
    <div class="timeDate_info">
        <p>estimated weeks: <br />{numberOfWeekForSchoolYear}</p>
        <p><span style=" color:red ">weeks for course:</span> <br /> {0}</p>

        <p>
            estimated days:<br />
            {numberOfWeekForSchoolYear * sessionsPerWeek}
        </p>
        <p>
            <span style=" color:red ">days needed for course:</span> <br />
            {timeNeedForCourse}
        </p>
        <p>
            <span style=" color:yellow ">Day oFF:</span> <br />
            {timeOffScheduled}
        </p>
    </div>
</section>

<style>
    .timeDate_info {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 50px;
    }
    .input_endDate {
        grid-row: 2;
        grid-column: 1;
    }
    .input_startDate {
        grid-row: 1;
        grid-column: 1;
    }
    .input_daysPerWeek {
        grid-row: 3;
        grid-column: 1;
    }
    section {
        grid-column: 1/2;
        display: grid;
        grid-template-rows: repeat(3, 150px);
        grid-template-columns: repeat(2, 1fr);
        outline: solid;
        width: 80vw;
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
