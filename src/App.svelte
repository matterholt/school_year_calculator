<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Form from './lib/Form.svelte'
  import StudentCourses from './lib/student_stuff/StudentCourses.svelte'



  const formInputs =[
    "start date", "number of seesion per week", "end date", "list of national holidays", "planed holidays / vacations", "unplanned holidays"
  ]



</script>



<main>

<StudentCourses />
<Form />


</main>

<style>

</style>
