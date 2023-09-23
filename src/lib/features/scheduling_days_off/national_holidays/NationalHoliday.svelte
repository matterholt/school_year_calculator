<script>
    import { Button, Input } from '../../../global_components/'

    import { nationalHoliday } from '../../../../store/nationalHoliday'
    import { numberOfDays } from '../../../../helpers/date_manipulations'

    $: unselectedDays = $nationalHoliday
        .filter((holiday) => !holiday.isObserved)
        .sort((a, b) => a.id - b.id)

    $: selectedDays = $nationalHoliday
        .filter((holiday) => holiday.isObserved)
        .sort((a, b) => a.id - b.id)

    function handleStore(selectedHoliday, valueChangeKey) {
        const getSelectedHoliday = $nationalHoliday.find(
            (x) => x.name === selectedHoliday
        )

        const updateHolidayObserved = {
            ...getSelectedHoliday,
            isObserved:
                valueChangeKey === 'isObserved'
                    ? !getSelectedHoliday.isObserved
                    : getSelectedHoliday.isObserved,
        }

        nationalHoliday.updateNationalHoliday(updateHolidayObserved)
    }

    $: totalNationalDayCount = numberOfDays(selectedDays)
</script>

<div class="national_holiday">
    <section>
        <h2>Available Holiday</h2>
        {#each unselectedDays as holiday, index}
            <div class="holiday">
                <Button
                    class="holiday_unselection"
                    buttonAction={() => handleStore(holiday.name, 'isObserved')}
                >
                    <p class="holiday_title">{holiday.name}</p>
                    <span class="sub">{holiday.date}</span>
                </Button>
            </div>
        {/each}
    </section>
    <section>
        <h2>Selected Holiday ---> {totalNationalDayCount}</h2>
        {#each selectedDays as selectDay}
            <div class="holiday selected">
                <Button
                    class="holiday_selection"
                    buttonAction={() =>
                        handleStore(selectDay.name, 'isObserved')}>X</Button
                >
                <p class="holiday_title">{selectDay.name}</p>

                <label class="selectedLabel" for={selectDay.name + 'daysOff'}>
                    Days Off
                    <Input
                        class="selectedInput"
                        id={selectDay.name + 'daysOff'}
                        bind:value={selectDay.dayCount}
                        on:change={() => handleStore(selectDay.name)}
                        type="number"
                    />
                </label>
            </div>
        {/each}
        <Button buttonAction={() => nationalHoliday.resetToInitial()}
            >CLEAR</Button
        >
    </section>
</div>

<style>
    .national_holiday {
        display: flex;
    }
    .holiday {
        width: 250px;
        height: 75px;
        margin: 6px;
    }
    .selected {
        display: grid;
        border: solid 5px #202020;
        border-radius: 15px;
        grid-template-columns: 50px 1fr 50px;
        grid-template-areas: 'button name label';
        align-items: center;
    }
    .holiday_title {
        grid-area: name;
        margin: 0;
        padding: 0;
    }

    .holiday_selection {
        grid-area: button;
        height: 50%;
        place-self: baseline;
    }
    :global(.selectedInput) {
        grid-area: input;
    }
    .selectedLabel {
        grid-area: label;
        display: flex;
        flex-direction: column;
    }
    :global(.holiday_unselection) {
        width: 100%;
    }

    .sub {
        font-size: 10px;
        margin-top: 10px;
    }
    section {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
