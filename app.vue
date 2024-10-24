<template>
  <Header/>
  <UMain>
    <UContainer class="mt-8">
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </UContainer>
  </UMain>
  <Footer/>
</template>
<script setup>
import Header from "~/components/templates/layout/Header.vue";
import Footer from "~/components/templates/layout/Footer.vue";
</script>

<style>

.font-alt {
  font-family: Noto, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  @apply text-green-700;
  font-family: Noto, sans-serif;
}
</style>
