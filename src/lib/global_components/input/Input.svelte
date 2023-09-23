<script>
    export let className = null,
        type = 'text',
        id = undefined,
        name = undefined,
        value = '',
        // a string that show relationship with other DOM elements
        ariaDescribedby = undefined,
        // accessible name for DOM elements if name is missing or does not describe
        ariaLabel = undefined,
        // able to reffer to other dom elements on page to define accessible name
        ariaLablelledby = undefined,
        placeholder = undefined,
        min = undefined,
        max = undefined

    export { className as class }

    function onChange() {
        value = this.value
    }
</script>

<input
    class={['input_comp', className].join(' ')}
    {id}
    {name}
    {type}
    {placeholder}
    {min}
    {max}
    aria-describedby={ariaDescribedby}
    aria-labelledby={ariaLablelledby}
    aria-label={ariaLabel}
    {value}
    on:change={onChange}
/>

<style>
    .input_comp {
        /* padding: styles.$control-padding;
        color: awsui.$color-text-body-default; */
        font-size: 1.7rem;
        padding: 5px;
        margin: 5px;
        cursor: text;
        box-sizing: border-box;
        border: none;

        border-radius: 5px;
    }
</style>
