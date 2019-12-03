<!-- =========================================================================================
    File Name: TheFooter.vue
    Description: Footer component
    Component Name: TheFooter
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template functional>
    <footer class="the-footer flex-wrap justify-between" :class="classes" style="background-color: #313131; color: white; height: 20px; z-index: 10000;">
        <!--
        <span>COPYRIGHT &copy; {{ new Date().getFullYear() }} <a href="https://1.envato.market/vuexy_admin" target="_blank" rel="nofollow">Pixinvent</a>, All rights Reserved</span>
        <span class="md:flex hidden items-center">
            <span>Hand-crafted & Made with</span>
            <feather-icon icon="HeartIcon" svgClasses="stroke-current text-danger w-6 h-6" class="ml-2" />
        </span>
        -->

        <!-- buyNow component -->
        <component :is="injections.components.EmailNow"></component>
    </footer>
</template>

<style lang="scss">
    .the-footer {
        z-index: 100000 !important;
    }
</style>

<script>
import EmailNow from '@/datum/layouts/components/EmailNow.vue';

export default {
    name: "the-footer",
    props: {
        classes: {
            type: String,
        },
    },
    inject: {
      components:{
          default: {
            EmailNow
          }
      }
    }
}
</script>
