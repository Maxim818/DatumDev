<template>
    <div class="content-area__content">
        <h4>Watchlist</h4>
        <span />
        <the-data-list />
    </div>
</template>
<style lang="scss">
    h4 {
        padding: 20px 0px;
    }
</style>

<script>
import TheDataList from '@/views/ui-elements/data-list/list-view/DataListListViewDatum.vue'

export default {
  components: {
    TheDataList
  },
  data() {
      return {}
  },
  watch: {
  },
  computed: {
  },
  methods: {
  },
  created() {
  }
}

</script>