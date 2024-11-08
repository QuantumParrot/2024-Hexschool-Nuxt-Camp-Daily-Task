<script setup>

import Loading from "vue-loading-overlay";

const { news, isLoading, getNews } = useHome();

onMounted(() => getNews());

</script>

<template>

<ul class="news-list">
    <ClientOnly>
    <Loading
        v-model:active="isLoading"
        :is-full-page="true"
        color="#B19693" />
    </ClientOnly>
    <li v-for="item in news" :key="item._id">
    <NewsCard
        :image="item.image"
        :title="item.title" :description="item.description"
        :created-at="item.createdAt" :updated-at="item.updatedAt" />
    </li>
</ul>

</template>

<style lang="scss" scoped>

@import url('vue-loading-overlay/dist/css/index.css');

.news-list {

  padding-left: 0;

  li { list-style: none; }

}

</style>
