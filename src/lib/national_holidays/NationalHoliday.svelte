<script>
    import { holidays } from '../../helpers/us_national_holiday.json'

    // check the store for this list if no list then will need ot construct this format
    const TEMP_local = false
    let nationalHolidayList = TEMP_local
        ? [
              {
                  name: "New Year's Day",
                  date: 'January 1',
                  dayValue: 1,
                  isObserved: false,
              },
          ]
        : holidays

    let unselectedDays = nationalHolidayList
    let selectedDays = []

    function handle(selectedHoliday) {
        let holiday = nationalHolidayList.find((x) => x.name == selectedHoliday)
        unselectedDays = unselectedDays.filter((y) => y.name !== holiday.name)
        selectedDays = [...selectedDays, holiday]
    }
</script>

<div class="national_holiday">
    <section>
        {#each unselectedDays as holiday, index}
            <div class="holiday-checkbox">
                <button on:click={() => handle(holiday.name)}>
                    <span class="checkmark">{holiday.name}</span>
                    <span class="sub">{holiday.date}</span>
                </button>
            </div>
        {/each}
    </section>
    <section>
        <h2>Selected Holiday</h2>
        {#each selectedDays as selectDay}
            <p>{selectDay.name},>>>>{selectDay.dayValue}</p>
        {/each}
    </section>
</div>

<style>
    .national_holiday {
        display: flex;
    }
    .holiday-checkbox {
        margin: 10px;
        text-align: left;
    }
    button {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
