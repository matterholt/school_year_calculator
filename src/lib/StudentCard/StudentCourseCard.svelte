
<script>
    import CardHeader from '../component/CardHeader.svelte'
    import CardCourseInputs from '../component/CardCourseInputs.svelte'
    import CardCourseList from '../component/CardCourseList.svelte'

    let courseWork = 
        {number_of_chapters : 120,
        subject_matter:"Math",
        leson_per_wk:"4"}
    

    let subjectMatter = ''
    let totalLessons = ''
    let daysPerWeek = 4



</script>

<div class="studentCourseCard">
    <CardHeader studentName={`Student ${1}`} />
    <CardCourseList {...courseWork}

    />
    <CardCourseInputs />
</div>

<style>
.studentCourseCard{
    width:100%;
}
</style>
