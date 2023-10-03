<script>
    export let holiday
    let { isObserved, id, name, date, month, dayCount } = holiday

    function updateObserve() {
        isObserved = !isObserved
    }
</script>

<p>component that will list out the Holidays for the school year</p>

<div class={isObserved ? 'active holiday_section' : 'holiday_section'}>
    <h4>Name:{name}</h4>
    <p>Date in year: {date}</p>
    <button on:click={() => updateObserve()}
        >{isObserved ? 'observed' : 'disregard'}</button
    >
    {#if isObserved}
        <label for="dayCount">Day Count</label>
        <input id="dayCount" type="number" min="0" />
    {/if}
</div>

<style>
    .holiday_section {
        font-size: 1.5rem;
    }
    .active {
        background-color: #1a1a1a;
    }
</style>
