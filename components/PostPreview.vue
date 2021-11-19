<template>
  <li class="transition-all duration-500 ease-in-out">
    <a :href="`/blogs/${blog.slug}`">
      <nuxt-img
        class="rounded-lg"
        :src="blog.image"
        preset="preview"
        width="400"
        height="300"
      />
      <ul v-if="blog.tags" class="flex space-x-3 mt-2">
        <li
          v-for="tag in blog.tags"
          :key="tag"
          class="text-nosk-gray-dark dark:text-nosk-green-light font-bold"
        >
          {{ tag }}
        </li>
      </ul>
      <h2 class="mt-2 text-3xl font-semibold">{{ blog.title }}</h2>
    </a>
  </li>
</template>

<script>
export default {
  layout: 'blog',
  props: {
    blog: {
      type: Object,
      default: null,
    },
  },
}
</script>
