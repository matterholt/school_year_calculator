<script>
    import ScheduleDaysOff from './lib/schedule_days_off/ScheduleDaysOff.svelte'
    import StudentCourses from './lib/student_courses/StudentCourses.svelte'
    import TimeDateSetter from './lib/time_date_setter/TimeDateSetter.svelte'

    let daysScheduledOff = 30
</script>

<main>
    <TimeDateSetter {daysScheduledOff} />
    <StudentCourses />
    <ScheduleDaysOff bind:daysScheduledOff />
</main>

<style>
    main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 550px 1fr;
    }
</style>
