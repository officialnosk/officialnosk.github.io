<template>
  <article class="grid grid-cols-12 pb-24">
    <nuxt-img
      class="rounded-lg col-start-3 col-span-8 w-full"
      :src="blog.image"
      width="768"
      height="509"
    />

    <div class="w-full col-start-1 col-span-12 grid grid-cols-12">
      <nav class="col-span-2 shadow-2xl rounded-lg p-4 self-start">
        <ul class="space-y-2">
          <li v-for="link of blog.toc" :key="link.id">
            <NuxtLink
              class="
                tracking-wider
                text-black
                dark:text-nosk-green-light
                hover:underline
              "
              :to="`#${link.id}`"
              >{{ link.text }}</NuxtLink
            >
            >
          </li>
        </ul>
      </nav>
      <div class="col-start-4 col-span-6 w-full">
        <div>
          <NuxtLink
            to="/blogs"
            href="/blogs"
            class="
              bg-green-300
              dark:bg-green-900
              inline-block
              dark:text-nosk-green-light
              tracking-wider
              mt-8
              p-3
              rounded-lg
            "
            >← Go Back</NuxtLink
          >
          <ul v-if="blog.tags" class="flex space-x-3 mt-2">
            <li
              v-for="tag in blog.tags"
              :key="tag"
              class="text-nosk-default dark:text-green-200 font-bold"
            >
              {{ tag }}
            </li>
          </ul>
          <h1 class="text-5xl text-black dark:text-white mt-2">
            {{ blog.title }}
          </h1>
          <div class="my-2">{{ formatDate(blog.createdAt) }}</div>
        </div>
        <nuxt-content
          class="mt-4 text-gray-900 dark:text-white prose max-w-none"
          :document="blog"
        />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content(params.slug).fetch()
    return { blog }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.nuxt-content * {
  @apply text-black dark:text-white;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 2rem;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 2.3rem;
}
.nuxt-content p {
  margin-bottom: 1rem;
}
</style>
