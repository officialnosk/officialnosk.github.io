<template>
  <footer class="mx-auto py-2">
    <div class="flex justify-center items-center">
      <a
        v-for="(social, key) in socials"
        :key="key"
        :href="social"
        :aria-label="`socials.${key}`"
        target="_blank"
        rel="noopener noreferrer"
        class="m-3 md:m-2"
      >
        <nosk-icon v-bind="icons[key]" size="24px" />
      </a>
    </div>
    <div class="flex justify-center items-center">
      <p class="text-xs m-3 md:m-2">Nepal Open Source Klub</p>
      <p class="text-xs">
        <nosk-icon v-bind="icons['copyleft']"></nosk-icon>
      </p>
      <p class="text-xs">
        {{ date }}
      </p>
    </div>
  </footer>
</template>
<script>
import socials from '~/assets/social/socials.json'
import {
  twitter,
  github,
  youtube,
  facebook,
  copyleft,
  telegram,
} from '~/assets/icons'

export default {
  data() {
    return {
      socials,
      icons: { twitter, github, youtube, facebook, telegram, copyleft },
    }
  },
  computed: {
    date() {
      const date = new Date()
      return String(date.getUTCFullYear())
    },
  },
}
</script>
