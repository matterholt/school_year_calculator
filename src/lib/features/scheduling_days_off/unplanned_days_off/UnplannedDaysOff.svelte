<script>
    import { EventDateView, EventDateInput } from '../component'
    import { numberOfDays } from '../../../../helpers/date_manipulations'

    import { noLessonDays } from '../../../../store/noLessonDays.js'

    function handleUpdateStore(newDayOff) {
        noLessonDays.addLessonFreeDay(newDayOff, 'unPlannedDaysOff')
    }

    $: totalDayCount = numberOfDays($noLessonDays.unPlannedDaysOff)
</script>

<section>
    <label for="unplannedHolidays">Unplanned Days/ Sick: {totalDayCount}</label>
    <EventDateView scheduleEvent={$noLessonDays.unPlannedDaysOff} />
    <EventDateInput {handleUpdateStore} sectionType="unPlannedDaysOff" />
</section>

<style>
</style>
