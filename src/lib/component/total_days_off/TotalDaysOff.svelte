<script>
    import { noLessonDays } from '../../../store/noLessonDays'
    import { nationalHoliday } from '../../../store/nationalHoliday'
    import { numberOfDays } from '../../../helpers/date_manipulations'

    $: daysOffList = [
        Object.values($noLessonDays).flat(),
        $nationalHoliday.filter((x) => x.isObserved),
    ].flat()
    $: totalTallyOfDaysOff = numberOfDays(daysOffList)
</script>

<p>Days Off : {totalTallyOfDaysOff}</p>

<style>
</style>
