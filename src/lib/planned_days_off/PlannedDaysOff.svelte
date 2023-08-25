<script>
    import EventDateView from '../component/EventDateView.svelte'
    import EventDateInput from '../component/EventDateInput.svelte'

    import { noLessonDays } from '../../store/noLessonDays.js'

    function handleUpdateStore(newDayOff) {
        noLessonDays.addLessonFreeDay(newDayOff, 'scheduledDaysOff')
    }
    // TODO -> get total amount of days for the
</script>

<section>
    <label for="plannedHolidays">Planned Holidays / Vacations:</label>
    <EventDateView scheduleEvent={$noLessonDays.scheduledDaysOff} />
    <EventDateInput {handleUpdateStore} />
</section>

<style>
</style>
