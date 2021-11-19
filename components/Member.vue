<template>
  <div class="w-full overflow-auto">
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div class="text-center pb-12">
        <h1 class="text-base font-bold text-indigo-600 mb-5">Nosk Pillers</h1>
        <h2
          class="
            font-italic
            text-2xl
            md:text-4xl
            lg:text-5xl
            font-heading
            text-black
            dark:text-white
          "
        >
          <slot></slot>
        </h2>
      </div>
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-x-3 gap-y-3
          h-1/4
        "
      >
        <div
          v-for="data in datas"
          :key="data.rollno"
          class="
            w-full
            bg-gray-900
            rounded-lg
            sahdow-lg
            p-4
            flex flex-col
            justify-center
            items-center
          "
        >
          <div class="mb-8">
            <a :href="data.urls" target="_blank">
              <img
                class="object-center object-cover rounded-full h-40 w-40"
                :src="require(`~/assets/image/${data.picture}`)"
                alt="photo"
              />
            </a>
          </div>
          <div class="text-center">
            <p class="text-sm text-white font-bold mb-2">
              {{ data.name }}
            </p>
            <p class="text-base text-gray-400 font-normal">Nosk Member</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
      default: null,
    },
  },
}
</script>
