<!-- =========================================================================================
  File Name: TheNavbarDatum.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Datum Navbar
  Author: Maxim
  Author URL: maxim.gregory1@gmail.com
========================================================================================== -->


<template>
<div class="relative" style="z-index: 10000000;">
  <div class="vx-navbar-wrapper navbar-full p-0">
    <vs-navbar class="navbar-custom navbar-skelton" :class="navbarClasses"  :style="navbarStyle" :color="navbarColor">


      <div class="mx-auto flex items-center" /> 

      <router-link tag="div" to="/" class="vx-logo cursor-pointer mx-auto flex items-center">
        <logo class="w-48 mr-4 fill-current text-primary" style="position:absolute; top: 0px; left: 5px;"/>
        <!-- <span class="vx-logo-text text-primary">Vuexy</span> -->
      </router-link>

      <i18n />

    </vs-navbar>
  </div>
</div>
</template>

<script>

import I18n                 from "@/datum/layouts/components/I18n.vue"
import Logo                 from "@/datum/layouts/Logo.vue"

export default {
  name: "the-navbar-horizontal",
  props: {
    logo: { type: String                                                                                                          },
    navbarType: {
      type: String,
      required: true
    }
  },
  components: {
    Logo,
    I18n,
  },
  computed: {
    navbarColor() {
      let color = "#313131"
      if (this.navbarType === "sticky") color = "#313131"
      else if (this.navbarType === 'static') {
        if (this.scrollY < 50) {
          //color = "#f7f7f7"
          color = "#313131"
        }
      }

      this.isThemedark === "dark" ? color === "#fff" ? color = "#10163a" : color = "#262c49" : null

      return color
    },
    isThemedark()          { return this.$store.state.theme                                                                       },
    navbarStyle()          { return this.navbarType === "static" ? {transition: "all .25s ease-in-out"} : {}                      },
    //navbarClasses()        { return this.scrollY > 5 && this.navbarType === "static" ? null : "d-theme-dark-light-bg shadow-none" },
    navbarClasses()        { return this.navbarType === "static" ? null : "d-theme-dark-light-bg shadow-none" }, // Maxim
    scrollY()              { return this.$store.state.scrollY                                                                     },
    verticalNavMenuWidth() { return this.$store.state.verticalNavMenuWidth                                                        },
    windowWidth()          { return this.$store.state.windowWidth                                                                 },
  }
}

</script>

