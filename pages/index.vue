<template>
  <div class="bg-gray-100 p-5 rounded-lg text-center mb-16">
    <span class="uppercase tracking-widest text-sm">Bienvenue sur Tech Jungle</span>
    <p class="mt-3 font-bold tracking-widest text-xl">Breakthroughs in 🔥 this field have led to the <strong
        class="text-green-600">development of advanced materials</strong> such as superconductors, graphene, and smart
      materials 🚲</p>
  </div>

  <div class="flex flex-row mb-16 gap-x-8">
    <img class="inline-flex rounded-lg aspect aspect-auto w-1/3" src="~/assets/images/bg.jpg">
    <div class="flex flex-col gap-y-6 w-2/3">
      <div>
        <span class="inline-flex text-green-700 font-semibold">{{ pinPost.categorie }}</span>
        <span class="ml-1 inline-flex">- {{ afficheTempsEcoule(pinPost.date) }}</span>
      </div>

      <NuxtLink :to="pinPost._path">
        <h3 class="inline-flex text-5xl font-semibold">{{ pinPost.title }}</h3>
      </NuxtLink>

      <p>
        {{ pinPost.description }}
      </p>

      <ul class="flex flex-row gap-x-2">
        <li v-for="tag in pinPost.tags" :key="tag" class="text-green-700 capitalize text-sm font-bold">{{ tag }}</li>
        <li class="text-sm"> - {{ calculerTempsDeLecture(pinPost.description.length) }}</li>
      </ul>

    </div>
  </div>

  <div class="flex justify-between items-baseline mb-8">
    <h2 class="text-4xl font-bold text-foreground">Les derniers articles</h2>
    <span class="text-xl font-alt font-semibold text-green-700">Voir tout ...</span>
  </div>
  <div class="flex flex-row gap-x-5 mb-16">
    <div class="w-1/4" v-for="post in latestPost" :key="post._id">
      <img src="~/assets/images/bg.jpg" class="aspect-square rounded-lg mb-2">
      <div class="mb-2">
        <span class="inline-flex text-green-700 font-semibold">{{ post.categorie }}</span>
        <span class="ml-1 inline-flex">- {{ afficheTempsEcoule(post.date) }}</span>
      </div>
      <NuxtLink :to="post._path">
        <h3 class="inline-flex text-2xl font-semibold mb-2 text-foreground">{{ post.title }}</h3>
      </NuxtLink>
      <p class="mb-2">
        {{ post.description }}
      </p>
      <ul class="flex gap-x-2">
        <li v-for="tag in post.tags.slice(0,1)" :key="tag" class="text-green-700 capitalize text-sm font-bold">{{
            tag
          }}
        </li>
        <li class="text-sm"> - {{ calculerTempsDeLecture(post.description.length) }}</li>
      </ul>
    </div>

  </div>

</template>

<script setup>
import {tempsDeLectureEnFrancais} from "~/utils/readingTime.js";
import {afficherTempsEcoule} from "~/utils/agoTime.js"

const calculerTempsDeLecture = (mots) => tempsDeLectureEnFrancais(mots);
const afficheTempsEcoule = (date) => afficherTempsEcoule(date);

const {data: pinPost} = await useAsyncData('post', () =>
    queryContent('/blog').where({pinned: true}).findOne()
)

const {data: latestPost} = await useAsyncData('posts', () =>
    queryContent('/blog').find()
)

</script>
