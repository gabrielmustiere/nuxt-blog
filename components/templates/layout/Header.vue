<script lang="ts" setup>
const links = [{
  label: 'A propos',
  icon: 'i-heroicons-book-open',
  to: '/about'
}, {
  label: 'Contact',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/contact'
}, {
  label: 'Articles',
  icon: 'i-heroicons-rocket-launch',
  to: '/blog'
}]
</script>

<template>
  <UHeader :links="links" :ui="{ wrapper: 'border-b-0'}">
    <template #logo>
      <span class="text-green-700 font-bold">Jungle Tech</span>
    </template>

    <template #right>
    </template>

    <template #panel>
      <UNavigationTree :links="links"/>
    </template>
  </UHeader>
</template>
