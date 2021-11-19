<template>
  <div>
    <h1 class="text-5xl font-black text-center mt-4">NOSK's Blogs</h1>
    <ul class="grid grid-cols-3 gap-8 m-8">
      <PostPreview
        v-for="blog in blogs"
        :key="blog.slug"
        :blog="blog"
      ></PostPreview>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content()
      .only(['title', 'image', 'tags', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      blogs,
    }
  },
}
</script>
