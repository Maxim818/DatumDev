<!-- =========================================================================================
	File Name: BuyNow.vue
	Description: Buy Now Button
	Component Name: BuyNow
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template functional>
    <vs-button color="primary" icon="icon-mail" iconPack="feather" type="filled" radius class="email-now" target :href="{url: 'https://1.envato.market/vuexy_admin'}"></vs-button>
</template>

<style lang="scss">
    .email-now{
        position: fixed;
        bottom: 2%;
        right: 30px;
        z-index: 51000;
        //box-shadow: 0 1px 20px 1px rgb(251, 67, 79);
    }
</style>

<script>
export default {
    name: "email-now",
}
</script>
