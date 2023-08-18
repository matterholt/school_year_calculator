<script>
    import CourseWork from './CourseWork.svelte'

    export let pupil = {}
    export let studentCourseWork = []
</script>

<li>
    <div class="student_header">
        <p class="sudentName">
            {pupil.name}
        </p>
    </div>

    <CourseWork {studentCourseWork} />
</li>

<style>
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0px;
    }
    p {
        margin: 5px;
    }
    .sudentName {
        font-weight: 900;
        text-transform: uppercase;
    }
    .remove_X {
        color: rgb(0, 132, 255);
        border: solid 2px rgb(0, 132, 255);
    }
    .student_header {
        display: flex;
        justify-content: space-between;
        background: rgb(0, 132, 255);
        border-radius: 10px;
        width: 100%;
    }
</style>
