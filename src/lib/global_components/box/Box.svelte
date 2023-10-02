<script>
    export let tag = 'div',
        className = null,
        htmlFor = undefined

    export { className as class }
</script>

<svelte:element this={tag} class={['base', className].join(' ')} for={htmlFor}>
    <slot />
</svelte:element>

<style>
    .base {
        padding: 5px;
        margin: 2px;
    }
    div {
        font-size: 1rem;
    }
    h1 {
        font-size: 3em;
    }
    h2 {
        font-size: 2.5em;
    }
    h3 {
        font-size: 1.7em;
    }
    p {
        font-size: 1.2em;
    }
    label {
        text-transform: uppercase;
        font-size: 1.2em;
        font-weight: 600;
    }
</style>
