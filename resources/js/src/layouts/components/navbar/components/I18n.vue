<template>
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <span class="cursor-pointer flex items-center i18n-locale">
      <img class="h-3 w-4" :src="i18n_locale_img" :alt="$i18n.locale" />      
    </span>
    <vs-dropdown-menu class="w-48 i18n-dropdown vx-navbar-dropdown">
      <vs-dropdown-item @click="updateLocale('uk')"><img class="h-4 w-5 mr-1" src="@assets/images/flags/uk.png" alt="uk" /></vs-dropdown-item>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
export default {
  computed: {
    i18n_locale_img() {
        const locale = this.$i18n.locale;
        if (locale == "uk")      return require(`@assets/images/flags/uk.png`)
        else if (locale == "en") return require(`@assets/images/flags/en.png`)
        else if (locale == "pt") return require(`@assets/images/flags/pt.png`)
        else if (locale == "fr") return require(`@assets/images/flags/fr.png`)
        else if (locale == "de") return require(`@assets/images/flags/de.png`)
        else return require(`@assets/images/flags/en.png`)
    },
    getCurrentLocaleData() {
        const locale = this.$i18n.locale;
        if (locale == "uk")      return { flag: "us", lang: 'English'    }
        else if (locale == "en") return { flag: "br", lang: 'English' }
        else if (locale == "pt") return { flag: "br", lang: 'Portuguese' }
        else if (locale == "fr") return { flag: "fr", lang: 'French'     }
        else if (locale == "de") return { flag: "de", lang: 'German'     }
    },
  },
  methods: {
    updateLocale(locale) {
      this.$i18n.locale = locale;
    },
  }
}
</script>
