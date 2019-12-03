<template>
    <vx-card title="Line Chart" code-toggler>
        <vue-apex-charts type="line" height="350" :options="apexChatData.lineChartSimple.chartOptions" :series="apexChatData.lineChartSimple.series"></vue-apex-charts>
        <template slot="codeContainer">
                {{ apexChatData.lineChartSimpleCode }}
        </template>
    </vx-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import apexChatData from '@/views/charts-and-maps/charts/apex-charts/apexChartData.js'

export default {
    data() {
        return {
            apexChatData: apexChatData
        }
    },
    components: {
        VueApexCharts
    }
}
</script>