<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Form from './lib/Form.svelte'



  const formInputs =[
    "start date", "number of seesion per week", "end date", "list of national holidays", "planed holidays / vacations", "unplanned holidays"
  ]
  const studentFormList = {
    name:"",
    classes :[
      {subject_matter : "",
      number_of_chapters : ""}
    ]
  } 


</script>



<main>

<Form />


</main>

<style>

</style>
