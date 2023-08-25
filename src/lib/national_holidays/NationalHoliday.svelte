<script>
    import { nationalHoliday } from '../../store/nationalHoliday'

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

    $: numberOfDays = selectedDays.reduce((acc, crt) => acc + crt.dayValue, 0)
</script>

<div class="national_holiday">
    <section>
        <h2>Available Holiday</h2>
        {#each unselectedDays as holiday, index}
            <div class="holiday">
                <button
                    class="holiday_unselection"
                    on:click={() => handleStore(holiday.name, 'isObserved')}
                >
                    <p class="holiday_title">{holiday.name}</p>
                    <span class="sub">{holiday.date}</span>
                </button>
            </div>
        {/each}
    </section>
    <section>
        <h2>Selected Holiday ---> {numberOfDays}</h2>
        {#each selectedDays as selectDay}
            <div class="holiday selected">
                <button
                    class="holiday_selection"
                    on:click={() => handleStore(selectDay.name, 'isObserved')}
                    >X</button
                >
                <p class="holiday_title">{selectDay.name}</p>

                <label class="selectedLabel" for={selectDay.name + 'daysOff'}>
                    Days Off
                    <input
                        class="selectedInput"
                        id={selectDay.name + 'daysOff'}
                        bind:value={selectDay.dayValue}
                        on:change={() => handleStore(selectDay.name)}
                        type="number"
                    />
                </label>
            </div>
        {/each}
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
    .selectedInput {
        grid-area: input;
    }
    .selectedLabel {
        grid-area: label;
        display: flex;
        flex-direction: column;
    }
    button {
        height: 100%;
        width: 100%;
    }
    input {
        display: grid;
        place-items: center;
        padding: 10px;
        font-size: 15px;
        width: 50%;
        border: none;
        border-radius: 5px;
        place-self: center;
        height: 50%;
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
