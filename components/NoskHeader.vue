<template>
  <header class="uppercase">
    <nav
      :class="sidebarClass"
      class="
        w-screen
        absolute
        top-0
        h-screen
        md:h-auto md:relative
        justify-center
        md:my-3 md:text-xl
        flex-col
        z-20
        md:z-0 md:flex
      "
    >
      <div
        class="
          dark:bg-green-800
          bg-green-300
          md:flex-row
          py-5
          px-3
          md:p-0
          flex flex-col
          justify-center
          md:bg-transparent md:dark:bg-transparent
        "
      >
        <nuxt-link
          :class="highlightTab('about')"
          to="/about"
          class="
            mx-2
            my-2
            p-1
            md:my-0 md:border-b
            flex
            items-center
            border-black
            dark:border-white
          "
          @click.native="toggleMenu"
        >
          about
        </nuxt-link>
        <nuxt-link
          :class="highlightTab('members')"
          to="/members"
          class="
            mx-2
            p-1
            my-2
            md:my-0 md:border-b
            flex
            items-center
            border-black
            dark:border-white
          "
          @click.native="toggleMenu"
        >
          members
        </nuxt-link>
        <nuxt-link
          :class="highlightTab('home')"
          to="/"
          class="order-first md:order-none flex items-center my-2 mx-3 md:my-0"
          aria-label="Click to go back to homepage"
          @click.native="toggleMenu"
        >
          <img
            id="nosk-logo"
            src="~/assets/svg/nosk.svg"
            alt="Nosk-Logo"
            width="60rem"
          />
          <span class="ml-3 md:hidden">Home</span>
        </nuxt-link>
        <nuxt-link
          :class="highlightTab('articles')"
          to="/blogs"
          class="
            mx-2
            my-2
            p-1
            md:my-0 md:border-b
            flex
            items-center
            border-black
            dark:border-white
          "
          @click.native="toggleMenu"
        >
          blogs
        </nuxt-link>
        <nuxt-link
          :class="highlightTab('resources')"
          to="/resources"
          class="
            mx-2
            my-2
            p-1
            md:my-0 md:border-b
            flex
            items-center
            border-black
            dark:border-white
          "
          @click.native="toggleMenu"
        >
          resources
        </nuxt-link>
        <button
          aria-label="Close"
          class="absolute top-0 right-0 m-5 md:hidden"
          @click="toggleMenu"
        >
          <nosk-icon v-bind="close" size="24px" />
        </button>
      </div>
      <div
        class="bg-gray-800 opacity-75 flex-1 md:hidden"
        @click="toggleMenu"
      />
    </nav>
    <div class="flex justify-end md:absolute top-0 right-0 m-5">
      <button
        class="md:hidden mx-3"
        aria-label="Open navigation menu"
        @click="toggleMenu"
      >
        <nosk-icon v-bind="menu" size="24px" />
      </button>
      <button
        :aria-label="`${mode.name} Mode`"
        @click="$colorMode.preference = mode.name"
      >
        <nosk-icon v-bind="mode.icon" size="24px" />
      </button>
    </div>
  </header>
</template>
<script>
import { dark, light, menu, close } from '~/assets/icons'

export default {
  data() {
    return {
      colors: {
        light: {
          name: 'light',
          icon: light,
        },
        dark: {
          name: 'dark',
          icon: dark,
        },
      },
      menu,
      close,
      menuActive: false,
      currentTab: 'Home',
    }
  },
  computed: {
    mode() {
      if (process.browser) {
        this.$colorMode.value === this.colors.light.name
          ? document.documentElement.classList.remove('dark')
          : document.documentElement.classList.add('dark')
      }
      return this.$colorMode.value === this.colors.light.name
        ? this.colors.dark
        : this.colors.light
    },
    effects() {
      return this.$colorMode.value === this.colors.light.name
        ? [
            {
              effect: 'colorize',
              color: '#6ee7b7',
            },
          ]
        : []
    },
    sidebarClass() {
      return {
        hidden: !this.menuActive,
        flex: this.menuActive,
      }
    },
    selectedTab() {
      return this.$store.getters.tab.split('-')[0]
    },
  },
  methods: {
    getClasses(color) {
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      }
    },
    toggleMenu() {
      this.menuActive = !this.menuActive
    },
    highlightTab(tab) {
      return {
        'font-bold': this.selectedTab === tab,
      }
    },
  },
}
</script>
<style scoped>
#nosk-logo {
  opacity: 0.9;
  transform: scale(1.2);
  outline: none;
  border-color: #9ecaed;
}
#nosk-logo:hover {
  box-shadow: 0 0 15px #2da73d;
  transform: scale(1.3);
}
.nuxt-link-active {
  font-weight: 600;
}
</style>
