<template>
  <div class="h-full flex flex-col bg-nosk-main-light">
    <nosk-header />
    <nuxt class="flex-1" />
    <nosk-footer />
  </div>
</template>

<style>
:root {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

html {
  height: 100%;
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
  background: var(--page-background);
  overflow: hidden;
  height: 100%;
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
</style>
<style>
.nuxt-content * {
  @apply mb-3;
}

.nuxt-content a {
  @apply underline;
}
</style>
<style>
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
<style>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  @apply bg-green-400;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-green-500;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-green-500;
}

/* Track */
.dark-mode ::-webkit-scrollbar-track {
  @apply bg-nosk-default;
}

/* Handle */
.dark-mode ::-webkit-scrollbar-thumb {
  @apply bg-nosk-green-dark;
}

/* Handle on hover */
.dark-mode ::-webkit-scrollbar-thumb:hover {
  @apply bg-nosk-green-dark;
}
</style>
