<script context="module">
    import { formatDate, definedWeekValue } from '../helpers/date_manipulations'
    import { dateOnRefreshed } from '../store/currentDate.js'

    let countValue

    dateOnRefreshed.subscribe((value) => {
        countValue = value
    })

    const currentDate = formatDate()
    const weekNumberOfStart = definedWeekValue(countValue)
    const currentWeekOfSchool =
        definedWeekValue('10-05-2023') - weekNumberOfStart
</script>

<script>
    import StudentCourses from '../lib/student_courses/StudentCourses.svelte'
    import Tabs from '../lib/component/Tabs.svelte'
    import {NationalHoliday,PlannedDaysOff,UnplannedDaysOff} from '../lib/feature/scheduling_days_off'
    // import PlannedDaysOff from '../lib/planned_days_off/PlannedDaysOff.svelte'
    // import UnplannedDaysOff from '../lib/unplanned_days_off/UnplannedDaysOff.svelte'
    import Summary from '../lib/summary/Summary.svelte'
    import YearlyScheduler from '../lib/yearly_scheduler/YearlyScheduler.svelte'

    let sections = [
        { label: 'Summary', value: 0, component: Summary },
        { label: 'Student', value: 1, component: StudentCourses },
        { label: 'Planned Days Off', value: 2, component: PlannedDaysOff },
        { label: 'Unplanned Days Off', value: 3, component: UnplannedDaysOff },
        { label: 'National Holiday', value: 4, component: NationalHoliday },
        { label: 'Year Scheduler', value: 5, component: YearlyScheduler },
    ]
</script>

<div class="layout">
    <div class="header">
        <p>Date: {currentDate}</p>
        <p>Week of school: {currentWeekOfSchool}</p>
    </div>

    <div class="data">
        <Tabs items={sections} />
    </div>
</div>

<style>
    .layout {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 50px min-content 50px 1fr;
    }
    .timeDateSetter {
        grid-column: 1/3;
        grid-row: 2;
    }
    .actions {
        grid-column: 1/3;
        grid-row: 3;
        display: flex;
    }
    .data {
        grid-column: 1/3;
        grid-row: 4;
        display: flex;
        flex-direction: column;
        width: 90vw;
        min-height: 50vh;
    }

    .header {
        grid-column: 1/3;
        grid-row: 1;
        display: flex;
        width: 250px;
        justify-content: space-evenly;
    }
</style>
