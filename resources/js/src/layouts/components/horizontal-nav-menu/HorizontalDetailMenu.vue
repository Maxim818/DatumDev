<template>
  <div class="relative">
    <div class="vx-navbar-wrapper nav-menu-wrapper">
      <vs-navbar class="vx-navbar navbar-custom navbar-skelton" :color="navbarColor" style="padding: 8px 0px;">
          
          <vs-checkbox class="detail-item" v-model="isCoins">Coins</vs-checkbox>
          <vs-checkbox class="detail-item" v-model="isTokens">Tokens</vs-checkbox>

          <FilterDropDown />

<!--          <div class="mx-auto flex " /> -->
          <v-select class="w-32 currency-select detail-item" v-model="currency" label="currency" :options="currencies" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
      </vs-navbar>
    </div>
  </div>
</template>

<style lang="scss">
    .detail-item {
        margin-right: 20px;
    }

    .vx-navbar-wrapper {
        //padding-left: 150px;
    }

    .vs__clear {
        display: none;
    }

    .v-select {
        padding: 10px 0px;
    }
</style>

<script>
import vSelect from 'vue-select'
import FilterDropDown from "../navbar/components/FilterDropDown.vue"

export default {
  props: {
    //navbarColor  : { type: String, default: "#fff", },
    //navMenuItems : { type: Array,  required: false   },
    isCoins: true,
    isTokens: false,
  },
  components: {
      'v-select': vSelect,
      FilterDropDown,
  },
  computed: {
    navbarColor() {
      return this.$store.state.theme === "dark" ? "#10163a" : "#fff"
    }
  },
  data() {
        return {   
            currency: "USD",
            currencies: [
                {
                    currency: "USD",
                },
                {
                    currency: "GBP",
                },
                {
                    currency: "EUR",
                },
            ]
        }
    },
  methods: {
  }
}
</script>

<style lang="scss">
@import "@sass/vuexy/components/horizontalNavMenu.scss"
</style>
