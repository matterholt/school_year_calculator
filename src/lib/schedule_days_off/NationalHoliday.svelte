<script>
  export let holidays = [];
  export let selectedDays

let nationalHolidayList = holidays.map((holiday) =>{ 
   const {name,date }=holiday
   return {
     name, date, isObserved: false
   }
   });

   $: selectedDays = nationalHolidayList.filter( x => x.isObserved)

</script>


{#each nationalHolidayList as holiday, index}
  <div class="holiday-checkbox">
    <input
      type="checkbox"
      bind:checked={holiday.isObserved}
    />
    <label>{holiday.name} <br/> <span class="sub">{holiday.date}<span></label>
  </div>
{/each}

<style>
  .holiday-checkbox {
    margin: 10px ;
    display:flex;
    text-align:left;
  }
  label{
    line-height: 16px;
  }
  .sub{
    font-size:10px;
    margin-top:0px;
  }

</style>
