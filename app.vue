<script setup>

const route = useRoute();

</script>

<template>
<div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <p>當前的路由路徑 ( <code v-pre>route.fullPath</code> ) 為：{{ route.fullPath }}</p>
</div>
</template>
