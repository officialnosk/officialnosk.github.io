<template>
  <div class="flex flex-col min-h-screen bg-nosk-main-light">
    <nosk-header />
    <nuxt class="flex-1" />
    <nosk-footer />
  </div>
</template>

<style>
.min-h-screen {
  min-height: 100vh;
}

:root {
  word-spacing: 1px;
}

html {
  @apply font-display text-md box-border text-white;
}

.dark-mode {
  --page-background: linear-gradient(
    to bottom right,
    #059669 0%,
    #047857 50%,
    #065f46 50%,
    #064e3b 100%
  );
  @apply text-gray-200 border-white;
}

.light-mode {
  --page-background: linear-gradient(
    to bottom right,
    #a7f3d0 0%,
    #6ee7b7 50%,
    #34d399 50%,
    #10b981 100%
  );
  @apply text-gray-800;
}

body {
  overflow-x: hidden;
  background: var(--page-background);
  background-attachment: fixed;
}

*,
*::before,
*::after {
  @apply box-border m-0;
}

/* Sample `apply` at-rules with Tailwind CSS */
.container {
  @apply flex items-center text-center mx-auto;
}

#__layout,
#__nuxt {
  @apply h-full;
}

.nuxt-content * {
  @apply mb-3;
}

.nuxt-content a {
  @apply underline;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
