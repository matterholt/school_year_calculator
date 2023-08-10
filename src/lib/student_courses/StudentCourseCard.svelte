<script>
    import CardHeader from '../component/CardHeader.svelte'
    import CardCourseInputs from '../component/CardCourseInputs.svelte'
    import CardCourseList from '../component/CardCourseList.svelte'

    let subjectMatter = ''
    let totalLessons = ''
    let daysPerWeek = 4
</script>

<div>
    <CardHeader studentName={`Student ${1}`} />
    <CardCourseList
        number_of_chapters="120"
        subject_matter="Math"
        lessonPerWeek="4"
    />
    <CardCourseInputs />
</div>

<style>
</style>
