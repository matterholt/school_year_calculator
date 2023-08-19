<script>
    import DaysOff from '../component/DaysOff.svelte'
    let plannedHolidays = [{ text: 'dayone', date: '01-01-01' }]
</script>

<section>
    <label for="plannedHolidays">Planned Holidays / Vacations:</label>
    <DaysOff bind:scheduledDays={plannedHolidays} />
</section>

<style>
</style>
