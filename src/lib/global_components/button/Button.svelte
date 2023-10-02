<script>
    import { Box } from '../'
    export let buttonAction,
        variant = 'base'
    export let className = null
    export { className as class }
</script>

<button class={['btn', className].join(' ')} on:click={buttonAction}>
    <Box tag="p">
        <slot />
    </Box>
</button>

<style>
    .btn {
        height: 55px;
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
        padding: 5px 10px;
        margin-left: 10px;
    }
    .btn:hover {
        border-color: #ff649f;
    }
    .btn:focus,
    .btn:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
</style>
