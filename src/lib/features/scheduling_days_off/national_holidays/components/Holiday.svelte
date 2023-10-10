<script>
    export let holiday
    let { isObserved, id, name, date, month, dayCount } = holiday
    import { Box, Button, Input } from '../../../../global_components/'

    function updateObserve() {
        isObserved = !isObserved
    }
</script>

<div class={isObserved ? 'active holiday_section' : 'holiday_section'}>
    <h4>{name}</h4>
    <p>{date}</p>
    <Button buttonAction={() => updateObserve()}
        >{isObserved ? 'disregard' : 'observed'}</Button
    >
    {#if isObserved}
        <div class="daycount">
            <label for="dayCount">Day Count</label>
            <input id="dayCount" type="number" min="0" bind:value={dayCount} />
        </div>
    {/if}
</div>

<style>
    .holiday_section {
        font-size: 1.5rem;
        height: 100px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            'title daycount'
            'date action';
    }
    .active {
        background-color: #1a1a1a;
    }
    h4 {
        grid-area: title;
    }
    .daycount {
        grid-area: daycount;
    }
    p {
        grid-area: date;
    }

    button {
        grid-area: action;
    }
</style>
