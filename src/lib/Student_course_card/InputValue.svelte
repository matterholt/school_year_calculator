<script>
    export let targetValue = ''

    let isAbleToEdit = true

    function handleHeaderUpdate(e) {
        if (e.key !== 'Enter') {
            return
        }

        isAbleToEdit = !isAbleToEdit
    }
</script>

<div class="valueInputDisplay">
    {#if isAbleToEdit}
        <button
            class="targetValue buttonEdit"
            on:click={() => (isAbleToEdit = !isAbleToEdit)}
        >
            {targetValue}
        </button>
    {:else}
        <input
            class="targetValue valueInput"
            bind:value={targetValue}
            type="text"
            on:keydown={handleHeaderUpdate}
        />
        <button on:click={() => (isAbleToEdit = !isAbleToEdit)}>✔️</button>
    {/if}
</div>

<style>
    .valueInputDisplay {
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
        width: 100%;
    }
    .targetValue {
        font-weight: 700;
        text-transform: uppercase;
    }
    .valueInput {
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
