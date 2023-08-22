<script>
    import EventDateView from '../component/EventDateView.svelte'
    import EventDateInput from '../component/EventDateInput.svelte'

    import { noLessonDays } from '../../store/noLessonDays.js'
    const { unPlannedDaysOff } = $noLessonDays

    let unplannedHolidays = unPlannedDaysOff
</script>

<section>
    <label for="unplannedHolidays">Unplanned Days/ Sick:</label>
    <EventDateView scheduleEvent={unplannedHolidays} />
    <EventDateInput bind:scheduledDays={unplannedHolidays} />
</section>

<style>
</style>
