<script>
    import svelteLogo from './assets/svelte.svg'
    import viteLogo from '/vite.svg'
    import ScheduleDaysOff from './lib/formSections/ScheduleDaysOff.svelte'
    import StudentCourses from './lib/student_stuff/StudentCourses.svelte'
</script>

<main>
    <StudentCourses />
    <ScheduleDaysOff />
</main>

<style>
    main {
        display: flex;
    }
</style>
