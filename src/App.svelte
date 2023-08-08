<script>
    import ScheduleDaysOff from './lib/formSections/ScheduleDaysOff.svelte'
    import StudentCourses from './lib/student_stuff/StudentCourses.svelte'
    import TimeDateSetter from './lib/time_date_setter/TimeDateSetter.svelte'
</script>

<main>
    <TimeDateSetter />
    <StudentCourses />
    <ScheduleDaysOff />
</main>

<style>
    main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 550px 1fr;
    }
</style>
