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

    {#if isObserved}
        <div class="daycount">
            <label for="dayCount">Day Count</label>
            <input id="dayCount" type="number" min="0" bind:value={dayCount} />
        </div>
    {/if}
    <div class="odserverButton">
        <Button buttonAction={() => updateObserve()}
            >{isObserved ? 'disregard' : 'observed'}</Button
        >
    </div>
</div>

<style>
    .holiday_section {
        font-size: 1.5rem;
        height: 100px;
        width: 720px;
        display: grid;
        padding: 0px 10px;
        border-radius: 5px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: 'title date daycount  action';
        align-items: center;
    }
    .active {
        background-color: #3a3838;
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

    .odserverButton {
        grid-area: action;
        justify-self: end;
    }
</style>
