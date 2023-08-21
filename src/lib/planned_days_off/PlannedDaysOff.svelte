<script>
    import EventDateInput from '../component/EventDateInput.svelte'
    let plannedHolidays = [
        { text: 'Family Skiing Trip to the Alps ', StratDate: '01-01-01' },
    ]
</script>

<section>
    <label for="plannedHolidays">Planned Holidays / Vacations:</label>
    <EventDateInput bind:scheduledDays={plannedHolidays} />
</section>

<style>
</style>
