<template>
  <!-- NOTIFICATIONS -->
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer more-filters">

    <span class="flex items-center w-full">
      <!-- Group Icon -->
      <feather-icon icon="FilterIcon" class="filter-icon cursor-pointer mt-1 sm:mr-6 mr-2" />

      <!-- Group Name -->
      <span class="truncate mr-3 select-none">More Filters</span>
    </span>
    

    <vs-dropdown-menu class="vx-navbar-dropdown">
      
        <ul class="bordered-items">
          <li v-for="filter in customFilters" :key="filter.index" class="flex justify-between px-2 py-2 notification cursor-pointer">
            <div class="flex items-start">
              <vs-checkbox class="filter-item" v-if="filter.category === 'item'">{{ filter.title }}</vs-checkbox>
              <div class="mx-2 filter-header" v-else>
                <span class="font-medium block notification-title" >{{ filter.title }}</span>                
              </div>
              <!--
              <div class="mx-2">
                <span class="font-medium block notification-title" :class="[`text-${filter.category}`]">{{ filter.title }}</span>
                
              </div>
              -->
            </div>            
          </li>
        </ul>
      
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<style lang="scss">
  .filter-icon {
    margin-right: 5px !important;
  }

  .more-filters {
    margin-right: 30px !important;
  }

  .filter-item {
    border-bottom: none !important;
    .con-slot-label {
      margin-left: 20px !important;
    }
  }

  .filter-header {
    color: inherit !important;
    font-weight: 400 !important;
  }
</style>

<script>


export default {
  components: {
    
  },
  data() {
    return {
      customFilters: [
          {
            index    : 0,
            title    : 'Market Cap',
            category : 'primary'
          },
          { index    : 1,
            title    : '< 10m',
            category : 'item'
          },
          { index    : 2,
            title    : '11m - 100m',
            category : 'item'
          },
          { index    : 3,
            title    : '101m - 500m',
            category : 'item'
          },
          { index    : 4,
            title    : '> 501m',
            category : 'item'
          },
          {
            index    : 5,
            title    : 'Maximum Supply',
            category : 'primary'
          },
          { index    : 6,
            title    : '< 500,000',
            category : 'item'
          },
          { index    : 7,
            title    : '500,000 - 10m',
            category : 'item'
          },
          { index    : 8,
            title    : '10m - 100m',
            category : 'item'
          },
          { index    : 9,
            title    : '> 100m',
            category : 'item'
          },
          {
            index    : 10,
            title    : 'Calculating Supply % of Max',
            category : 'primary'
          },
          { index    : 11,
            title    : '< 10%',
            category : 'item'
          },
          { index    : 12,
            title    : '11% - 50%',
            category : 'item'
          },
          { index    : 13,
            title    : '51% - 75%',
            category : 'item'
          },
          { index    : 14,
            title    : '> 75%',
            category : 'item'
          },
      ],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: .60,
      },
    }
  },
  methods: {
    elapsedTime(startTime) {
      let x        = new Date(startTime)
      let now      = new Date()
      var timeDiff = now - x
      timeDiff    /= 1000

      var seconds = Math.round(timeDiff)
      timeDiff    = Math.floor(timeDiff / 60)

      var minutes = Math.round(timeDiff % 60)
      timeDiff    = Math.floor(timeDiff / 60)

      var hours   = Math.round(timeDiff % 24)
      timeDiff    = Math.floor(timeDiff / 24)

      var days    = Math.round(timeDiff % 365)
      timeDiff    = Math.floor(timeDiff / 365)

      var years   = timeDiff

      if (years > 0) {
        return years + (years > 1 ? ' Years ' : ' Year ') + 'ago'
      } else if (days > 0) {
        return days + (days > 1 ? ' Days ' : ' Day ') + 'ago'
      } else if (hours > 0) {
        return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago'
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago'
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? ' sec ago' : 'just now')
      }

      return 'Just Now'
    },
    // Method for creating dummy notification time
    randomDate({ hr, min, sec }) {
      let date = new Date()

      if (hr) date.setHours(date.getHours() - hr)
      if (min) date.setMinutes(date.getMinutes() - min)
      if (sec) date.setSeconds(date.getSeconds() - sec)

      return date
    }
  }
}

</script>

