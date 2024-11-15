<script setup>

const route = useRoute();

</script>

<template>

<div class="not-found">
    <h1 class="display-1 mb-4">Oops ! 404 Not Found</h1>
    <p class="mb-4">抱歉，您所尋找的 <code>{{ route.params.slug.join('/') }}</code> 頁面不存在。</p>
    <NuxtLink to="/" :replace="true">回首頁</NuxtLink>
</div>

</template>

<style scoped>

.not-found {

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

}

.not-found p { font-size: 1.5rem; }

</style>