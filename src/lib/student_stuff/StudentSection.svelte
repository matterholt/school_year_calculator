<script>
import CourseWork from "./CourseWork.svelte"

export let pupil ={}
export let studentCourseWork =[]



$: pupilStatus  ="edit"



function  updateStatus (action){
pupilStatus = action
}

</script>



<li>
  <div class="student_header">
  <p>
  ID:{pupil.student_id}
  
  </p>
  
  <p class="sudentName">
  {pupil.name}
  </p>

{#if pupilStatus == "edit"}

  <div>
    <button class="remove_X" on:click={() => deleteTask(index)}>Delete</button>
    <button class="remove_X" on:click={() => updateStatus("save")}>Save</button>
  </div>

{/if}
{#if pupilStatus == "save"}


  <div>
    <button class="remove_X" on:click={() => updateStatus("edit")}>Edit</button>
  </div>

{/if}

  </div>


  <CourseWork  {studentCourseWork} {pupilStatus}/>



</li>


<style>
  
  h1 {
    text-align: center;
  }


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

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
  }
  p{
    margin:5px;
  }
  .sudentName {
    font-weight: 900;
    text-transform: uppercase;
    
  }
  .remove_X{
    color:red;
    border: solid 2px red;

  }
  .student_header{
    display: flex;
    justify-content: space-between;
    background: red;
    width: 100%;
  }


</style>

