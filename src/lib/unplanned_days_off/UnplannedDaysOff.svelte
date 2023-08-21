<script>
    import DaysOff from '../component/EventDateInput.svelte'
    let plannedHolidays = [{ text: 'dayone', date: '01-01-01' }]
</script>

<section>
    <label for="plannedHolidays">Unplanned Days/ Sick:</label>
    <DaysOff bind:scheduledDays={plannedHolidays} />
</section>

<style>
</style>
