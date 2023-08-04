
<script>
import StudentSection from "./StudentSection.svelte"

// save to storage
  export let students=[
    { name: "sarah", student_id:  11 },
    { name: "sam", student_id:  12 }
  ] ;

// save to storage
  let classesAdded =[
    {id: 1, student_id:  11,subject_matter:"math", number_of_chapters: 204, current_chapter: 0},
    {id: 2, student_id:  11,subject_matter:"reading", number_of_chapters: 150,current_chapter: 0},
    {id: 3, student_id:  12,subject_matter:"math", number_of_chapters: 300,current_chapter: 0},
    {id: 4, student_id:  12,subject_matter:"writing", number_of_chapters: 200,current_chapter: 0},
  ]
  let addAStudentStatus = ""

  let studentName = `Student ${students.length + 1}`;
  
  function pupilsClasses (id){
    return classesAdded.filter(x => x.student_id ===  id)
  }




// !! don't use length for ID, if need to remove something then will mess up the order, and will have an id of the same value
  function addTask() {
    if (studentName.trim() !== '') {
      students = [...students, { name: studentName, student_id:  1 }];
     studentName = `Student ${students.length + 1}`
    }
  }

  function udpateStatus (action){

  }




</script>
<h2>Student Stuff </h2>

    <ul>
    {#each students as pupil, index}
    <StudentSection {pupil} studentCourseWork={pupilsClasses(pupil.student_id)}/>

    {/each}

      <div>
      {#if addAStudentStatus === "edit"}
    <input  type="text" bind:value={studentName} placeholder={studentName}>
    <button  on:click={addTask}>Add</button>
    <button  on:click={()=> addAStudentStatus ="done"}>DONE</button>
    {:else}
    <button  on:click={()=> addAStudentStatus ="edit"}>edit</button>

    {/if}


  </div>
  </ul>

<style>
  /* Add your custom styles here */

  input[type="text"] {
    flex: 1;
    padding: 5px;
  }

  button {
    padding: 5px 10px;
    margin-left: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }



</style>
