<script>
    export let showModal // boolean

    let dialog // HTMLDialogElement

    $: if (dialog && showModal === 'open') dialog.showModal()
    $: if (showModal === 'outSideClosed') handleModal()

    function handleModal() {
        showModal = 'closed'
        dialog.close()
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close={() => (showModal = 'closed')}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->

    <div on:click|stopPropagation>
        <button on:click={handleModal}>X</button>

        <slot name="header" />
        <hr />
        <slot />
        <!-- svelte-ignore a11y-autofocus -->
    </div>
</dialog>

<style>
    dialog {
        width: 550px;
        border-radius: 0.2em;
        border: none;
        padding: 0;
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    dialog > div {
        padding: 1em;
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    button {
        display: block;
    }
</style>
