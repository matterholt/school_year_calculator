<script lang="ts">
    import EventDateView from '../component/EventDateView.svelte'
    import EventDateInput from '../component/EventDateInput.svelte'
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
