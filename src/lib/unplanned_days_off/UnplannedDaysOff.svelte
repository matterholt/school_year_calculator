<script>
    import EventDateView from '../component/EventDateView.svelte'
    import EventDateInput from '../component/EventDateInput.svelte'

    import { noLessonDays } from '../../store/noLessonDays.js'

    function handleUpdateStore(newDayOff) {
        noLessonDays.addLessonFreeDay(newDayOff, 'unPlannedDaysOff')
    }
    $: console.log($noLessonDays)
</script>

<section>
    <label for="unplannedHolidays">Unplanned Days/ Sick:</label>
    <EventDateView scheduleEvent={$noLessonDays.unPlannedDaysOff} />
    <EventDateInput {handleUpdateStore} />
</section>

<style>
</style>
