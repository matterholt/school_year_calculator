<script context="module">
    export let dayPlanedOff = []
    export let studentCourseWork = []
    export let schoolYearSettings = {}
    import { dateOnRefreshed } from '../store/currentDate.js'

    let countValue

    dateOnRefreshed.subscribe((value) => {
        countValue = value
    })

    import moment from 'moment'
    const currentDate = moment().format('MM-DD-YYYY')
    const weekNumberOfStart = moment(countValue).week()
    const currentWeekOfSchool = moment('10-05-2023').week() - weekNumberOfStart
</script>

<script>
    import ScheduleDaysOff from '../lib/schedule_days_off/ScheduleDaysOff.svelte'
    import StudentCourses from '../lib/student_courses/StudentCourses.svelte'
    import TimeDateSetter from '../lib/time_date_setter/TimeDateSetter.svelte'
    import StudentCourseCard from '../lib/Student_course_card/StudentCourseCard.svelte'

    import Modal from '../lib/component/Modal.svelte'
    let showModal = 'closed'

    let daysScheduledOff = 30
    let daysPerWeek = 4
</script>

<div class="layout">
    <div class="header">
        <p>Date: {currentDate}</p>
        <p>Week of school: {currentWeekOfSchool}</p>
    </div>
    <div class="timeDateSetter">
        <TimeDateSetter {daysScheduledOff} />
    </div>
    <div class="actions">
        <button on:click={() => (showModal = 'open')}> Add Student </button>
        <Modal bind:showModal>
            <StudentCourseCard bind:showModal />
        </Modal>
    </div>
    <div class="studentCourses">
        <StudentCourses />
    </div>
    <div class="scheduleDaysOff">
        <ScheduleDaysOff bind:daysScheduledOff />
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
    .studentCourses {
        grid-column: 1;
        grid-row: 4;
    }
    .scheduleDaysOff {
        grid-column: 2;
        grid-row: 4;
    }
    .header {
        grid-column: 1/3;
        grid-row: 1;
        display: flex;
        width: 250px;
        justify-content: space-evenly;
    }
</style>
