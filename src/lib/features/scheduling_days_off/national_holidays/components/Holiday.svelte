<script>
    export let holiday
    let { isObserved, id, name, date, month, dayCount } = holiday
    import {
        Box,
        Button,
        Input,
        ToggleSwitch,
    } from '../../../../global_components/'
</script>

<div class={isObserved ? 'active holiday_section' : 'holiday_section'}>
    <div class="holiday_title-layout">
        <Box tag="h4">{name}</Box>
    </div>

    <div class="holiday_date-layout">
        <Box tag="p" class="smaller">{date}</Box>
    </div>

    {#if isObserved}
        <div class="daycount">
            <label for="dayCount">Day Count</label>
            <Input id="dayCount" type="number" min="0" bind:value={dayCount} />
        </div>
    {/if}

    <div class="odserverButton-layout">
        <ToggleSwitch bind:isPressed={isObserved} />
    </div>
</div>

<style>
    .holiday_section {
        font-size: 1.5rem;
        height: 100px;
        width: 720px;
        display: grid;
        padding: 0px 25px;
        border-radius: 100px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 25px);
        align-content: center;
        align-items: center;

        grid-template-areas:
            'title  daycount  action'
            'date daycount  action';
    }
    .active {
        background-color: #28282b;
        transition: background-color 0.4s;
    }
    .holiday_title-layout {
        grid-area: title;
    }
    .daycount {
        grid-area: daycount;
    }
    .holiday_date-layout {
        grid-area: date;
    }

    .odserverButton-layout {
        grid-area: action;
        justify-self: end;
    }
</style>
