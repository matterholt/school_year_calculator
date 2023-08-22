<script>
    import EventDateView from '../component/EventDateView.svelte'
    import EventDateInput from '../component/EventDateInput.svelte'

    import { noLessonDays } from '../../store/noLessonDays.js'
    const { scheduledDaysOff } = $noLessonDays

    let plannedHolidays = scheduledDaysOff
</script>

<section>
    <label for="plannedHolidays">Planned Holidays / Vacations:</label>
    <EventDateView scheduleEvent={plannedHolidays} />
    <EventDateInput bind:scheduledDays={plannedHolidays} />
</section>

<style>
</style>
