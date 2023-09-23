<script>
    import { EventDateView, EventDateInput } from '../component'
    import { numberOfDays } from '../../../../helpers/date_manipulations'

    import { noLessonDays } from '../../../../store/noLessonDays.js'

    function handleUpdateStore(newDayOff) {
        noLessonDays.addLessonFreeDay(newDayOff, 'scheduledDaysOff')
    }
    // TODO -> get total amount of days for the
    $: totalDayCount = numberOfDays($noLessonDays.scheduledDaysOff)
</script>

<section>
    <label for="plannedHolidays"
        >Planned Holidays / Vacations: {totalDayCount}</label
    >
    <EventDateView scheduleEvent={$noLessonDays.scheduledDaysOff} />
    <EventDateInput {handleUpdateStore} sectionType="scheduledDaysOff" />
</section>

<style>
</style>
