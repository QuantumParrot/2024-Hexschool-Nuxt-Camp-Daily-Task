<script setup>

const route = useRoute();

</script>

<template>
    
<div class="container my-5">
    <p>當前的路由路徑 ( <code v-pre>route.fullPath</code> ) 為：{{ route.fullPath }}</p>
    <hr>
    <NuxtRouteAnnouncer />
    <NuxtPage />
</div>

</template>
