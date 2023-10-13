<script>
    export let isPressed = false
    let label = 'test',
        name = ''

    const toggleIsPressed = () => {
        isPressed = !isPressed
    }
</script>

<button class="tes" aria-pressed={isPressed} on:click={toggleIsPressed}>
    <svg
        aria-hidden="true"
        class="icon"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="10" cy="10" r="10" />
    </svg>
</button>

<style>
    button {
        width: 55px;
        border-radius: 25px;
        border: none;
        padding: 5px;
        background-color: inherit;
    }
    .icon {
        height: 20px;
    }
    [aria-pressed='true'] .icon {
        fill: rebeccapurple;
        transform: translate(20px);
        transition: transform 0.5s;
    }
    [aria-pressed='false'] .icon {
        fill: black;

        transform: translate(0px);
        transition: transform 0.5s;
    }
    [aria-pressed='true'].tes {
        border: 2px solid #9b6bcc75;
        transition: border 0.5s;
    }
    [aria-pressed='false'].tes {
        border: 2px solid #101011;
        transition: border 0.5s;
    }
</style>
