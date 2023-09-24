<script>
    import { noLessonDays } from '../../../../../store/noLessonDays'
    import { nationalHoliday } from '../../../../../store/nationalHoliday'
    import { numberOfDays } from '../../../../../helpers/date_manipulations'
    import { Box } from '../../../../global_components'

    $: daysOffList = [
        Object.values($noLessonDays).flat(),
        $nationalHoliday.filter((x) => x.isObserved),
    ].flat()
    $: totalTallyOfDaysOff = numberOfDays(daysOffList)
</script>

<Box tag="p">Days Off : {totalTallyOfDaysOff}</Box>

<style>
</style>
