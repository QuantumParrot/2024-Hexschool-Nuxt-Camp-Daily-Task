<script setup>

const router = useRouter();

</script>

<template>

<h2 class="h1">房型詳細（ 靜態路由的模樣 ）</h2>
<hr>
<button
    type="button" class="btn btn-secondary btn-sm"
    @click="router.go(-1)">
    回房型列表
</button>

</template>

<style scoped></style>