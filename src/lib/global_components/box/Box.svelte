<script>
    export let tag = 'div',
        className = null

    export { className as class }
</script>

<svelte:element this={tag} class={['base', className].join(' ')}>
    <slot />
</svelte:element>

<style>
    .base {
        padding: 5px;
        margin: 2px;
    }
    div {
        font-size: 1.6em;
    }
    h1 {
        font-size: 3em;
    }
    h2 {
        font-size: 2.5em;
    }
    h3 {
        font-size: 2em;
    }
    p {
        font-size: 1.6em;
    }
</style>
