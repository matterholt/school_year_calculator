<script>
    import DateEstimation from '../date_estimation/DateEstimation.svelte'
</script>

<header>
    <slot />
    <DateEstimation />
</header>

<style>
    header {
        background-color: rgba(255, 255, 255, 0.445);
    }
</style>
