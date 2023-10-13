<script setup lang="ts">
import wyvernJson from '@/assets/guides/wyvern.json'
//prendre en compte la taille de json
console.log(wyvernJson);
</script>

<template>
  <main>
    <div>{{ wyvernJson.text1 }}</div>
    <div>{{ wyvernJson.text2 }}</div>
    <div>{{ wyvernJson.text3 }}</div>
    <img :src="wyvernJson.img1"/>
  </main>
</template>
