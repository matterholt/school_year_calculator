<script>
    import { enrolledStudents } from '../../store/enrolledStudents.js'

    let studentName = `Student ${$enrolledStudents.length + 1}`

    let nameEdit = true
    import { onMount } from 'svelte'

    onMount(() => {
        enrolledStudents.test(studentName)
    })

    function handleHeaderUpdate(e) {
        if (e.key !== 'Enter') {
            return
        }

        nameEdit = !nameEdit
    }
</script>

<div class="student_header">
    {#if nameEdit}
        <button
            class="studentName buttonEdit"
            on:click={() => (nameEdit = !nameEdit)}
        >
            {studentName}
        </button>
    {:else}
        <input
            class="studentName nameInput"
            bind:value={studentName}
            type="text"
            on:keydown={handleHeaderUpdate}
        />
        <button on:click={() => (nameEdit = !nameEdit)}>confirm</button>
    {/if}
</div>

<style>
    .student_header {
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        width: 100%;
    }
    .studentName {
        font-weight: 700;
        text-transform: uppercase;
    }
    .nameInput {
        width: 100%;
        padding: 9.6px 19px;
        border-radius: 7px;
        border: none;
    }
    .buttonEdit {
        width: 100%;
        text-align: left;
    }
</style>
