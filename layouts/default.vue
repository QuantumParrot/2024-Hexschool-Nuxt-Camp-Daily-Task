<script setup></script>

<template>

<nav class="navbar navbar-expand-lg bg-success-subtle py-3">
    <div class="container">
        <h1 class="h3 me-3 mb-0">前台模板</h1>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <NuxtLink class="nav-link" to="/">首頁</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/room">選擇房型</NuxtLink>
                </li>
                <li class="nav-item">
                <NuxtLink class="nav-link" to="/register">註冊</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</nav>
<main>
    <slot />
</main>

</template>

<style scoped></style>
