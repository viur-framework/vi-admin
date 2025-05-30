<template>
  <the-loading-screen v-if="!appStore.state['init']"></the-loading-screen>
  <the-main-screen v-else-if="userStore.state['user.loggedin'] === 'yes'"></the-main-screen>
  <the-login-screen v-else
    :background-image="appStore.state['admin.login.background']"
    :logo="appStore.state['admin.login.logo']"
  >
  </the-login-screen>
</template>
<script lang="ts">
// @ts-nocheck
import TheLoginScreen from "@viur/vue-utils/login/TheLoginScreen.vue"
import TheMainScreen from "@viur/vue-components/screens/TheMainScreen.vue"
import TheLoadingScreen from "@viur/vue-components/screens/TheLoadingScreen.vue"
import { useUserStore } from "@viur/vue-utils/login/stores/user"
import { computed, defineComponent, onBeforeMount, onMounted } from "vue"
import { Request } from "@viur/vue-utils"
import { useAppStore } from "@viur/vue-components/stores/app"
import { useDBStore } from "@viur/vue-components/stores/db"
import { useColorStore } from "@viur/vue-components/stores/color"
import { useModulesStore } from "@viur/vue-components/stores/modules"
import Utils from "@viur/vue-components/utils"

export default defineComponent({
  components: { TheLoginScreen, TheMainScreen, TheLoadingScreen },
  setup() {
    const userStore = useUserStore()
    const dbStore = useDBStore()
    const colorStore = useColorStore()
    const appStore = useAppStore()

    onMounted(() => {
      appStore.state["vi.version"] = __APP_VERSION__.split(".")
    })

    function getPrimaryColor(lightness) {
      return colorStore.getPrimaryColor(lightness)
    }

    function getSecondaryColor(lightness) {
      return colorStore.getSecondaryColor(lightness)
    }

    function getPrimaryAlphaColor(lightness,alpha) {
      return colorStore.getAlphaColor("primaryColor", lightness, alpha)
    }


    return {
      userStore,
      appStore,
      getPrimaryColor,
      getSecondaryColor,
      getPrimaryAlphaColor,
      Utils
    }
  }
})
</script>
<style>
@font-face {
    font-family: 'Source Sans Pro';
    src: url('/public/webfont/SourceSans3-VariableFont_wght.ttf');
    font-weight: 125 950;
    font-stretch: 75% 125%;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('/public/webfont/SourceSans3-Italic-VariableFont_wght.ttf');
    font-weight: 125 950;
    font-stretch: 75% 125%;
    font-style: italic;
}


* {
  --sl-color-primary-50: v-bind(getPrimaryColor(83));
  --sl-color-primary-100: v-bind(getPrimaryColor(78));
  --sl-color-primary-200: v-bind(getPrimaryColor(68));
  --sl-color-primary-300: v-bind(getPrimaryColor(58));
  --sl-color-primary-400: v-bind(getPrimaryColor(48));
  --sl-color-primary-500: v-bind(getPrimaryColor(43));
  --sl-color-primary-600: v-bind(getPrimaryColor(38));
  --sl-color-primary-700: v-bind(getPrimaryColor(28));
  --sl-color-primary-800: v-bind(getPrimaryColor(18));
  --sl-color-primary-900: v-bind(getPrimaryColor(8));
  --sl-color-primary-950: v-bind(getPrimaryColor(3));

  --sl-color-secondary-50: v-bind(getSecondaryColor(60));
  --sl-color-secondary-100: v-bind(getSecondaryColor(55));
  --sl-color-secondary-200: v-bind(getSecondaryColor(45));
  --sl-color-secondary-300: v-bind(getSecondaryColor(35));
  --sl-color-secondary-400: v-bind(getSecondaryColor(25));
  --sl-color-secondary-500: v-bind(getSecondaryColor(20));
  --sl-color-secondary-600: v-bind(getSecondaryColor(15));
  --sl-color-secondary-700: v-bind(getSecondaryColor(5));
  --sl-color-secondary-800: v-bind(getSecondaryColor(0));
  --sl-color-secondary-900: v-bind(getSecondaryColor(0));
  --sl-color-secondary-950: v-bind(getSecondaryColor(0));

  --sl-input-border-color-focus: var(--sl-color-primary-500);
  --sl-input-focus-ring-color: v-bind(getPrimaryAlphaColor(43, 40));
}
</style>
