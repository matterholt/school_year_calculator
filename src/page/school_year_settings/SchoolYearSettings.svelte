<script>
    import { Box } from '../../lib/global_components'
    import { SchoolDateSetter, NationalHoliday } from '../../lib/features'

    // updated from the schoolDateSetter component.
    let totalDayOfSchool = 0
</script>

<section class="school_year_settings">
    <Box tag="h2">School Year Settings</Box>
    <Box tag="p">
        Total Days of school: {totalDayOfSchool}
    </Box>
    <Box class="dateSetter_position">
        <SchoolDateSetter bind:totalDayOfSchool />
    </Box>
    <Box class="school_year_settings_nationalHoliday">
        <NationalHoliday />
    </Box>
</section>

<style>
    .school_year_settings {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    :global(.dateSetter_position) {
        grid-column: 1/3;
        grid-row: 2;
    }
    :global(.school_year_settings_nationalHoliday) {
        grid-column: 1/3;
        grid-row: -1;
    }
</style>
