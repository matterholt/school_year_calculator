<script>
    import ScheduleDaysOff from './lib/schedule_days_off/ScheduleDaysOff.svelte'
    import StudentCourses from './lib/student_courses/StudentCourses.svelte'
    import TimeDateSetter from './lib/time_date_setter/TimeDateSetter.svelte'
    import StudentCourseCard from './lib/Student_course_card/StudentCourseCard.svelte'

    import Modal from './lib/component/Modal.svelte'
    let showModal = false

    let daysScheduledOff = 30
    let daysPerWeek = 4
</script>

<main>
    <div class="timeDateSetter">
        <TimeDateSetter {daysScheduledOff} />
    </div>
    <div class="actions">
        <button on:click={() => (showModal = true)}> Add Student </button>
        <Modal bind:showModal>
            <StudentCourseCard />
        </Modal>
    </div>
    <div class="studentCourses">
        <StudentCourses />
    </div>
    <div class="scheduleDaysOff">
        <ScheduleDaysOff bind:daysScheduledOff />
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: min-content 50px 1fr;
    }
    .timeDateSetter {
        grid-column: 1/3;
        grid-row: 1;
    }
    .actions {
        grid-column: 1/3;
        grid-row: 2;
    }
    .studentCourses {
        grid-column: 1;
        grid-row: 3;
    }
    .scheduleDaysOff {
        grid-column: 2;

        grid-row: 3;
    }
</style>
