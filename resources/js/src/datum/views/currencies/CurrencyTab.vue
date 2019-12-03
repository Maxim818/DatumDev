<!-- =========================================================================================
    File Name: TabsPosition.vue
    Description: Rendering of default Tabs
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="mt-5">
    <vs-tabs color="rgb(201, 32, 178)">
        <vs-tab label="Markets">
            <CurrencyMarket />
        </vs-tab>
        <vs-tab label="Charts">
            <CurrencyChart />
        </vs-tab>
        <vs-tab label="Historical Data">
            <CurrencyMarket />
        </vs-tab>
    </vs-tabs>
  </div>
</template>

<style lang="scss">
  .con-ul-tabs {
    margin: 0px 20px;
  }
</style>

<script>
import CurrencyMarket from '@/datum/views/currencies/CurrencyMarket.vue'
import CurrencyChart from '@/datum/views/currencies/CurrencyChart.vue'

export default {
  components: {
    CurrencyMarket,
    CurrencyChart,
  }
}
</script>
