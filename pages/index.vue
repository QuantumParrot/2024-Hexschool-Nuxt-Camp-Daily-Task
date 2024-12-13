<script setup>

const { $modal, $offcanvas } = useNuxtApp();

const modal = ref(null);
let modalController;

const offcanvas = ref(null);
let offcanvasController;

onMounted(() => {

    modalController = $modal(modal.value);

    offcanvasController = $offcanvas(offcanvas.value, { backdrop: 'static' });

});

</script>

<template>

<div>
<h1 class="mb-4">首頁</h1>
<p>🌿 <NuxtLink to="/sample">每日任務 DAY 02 - Nuxt 專案引入 CSS 樣式</NuxtLink></p>
<p>🌿 <NuxtLink to="/admin">每日任務 DAY 03 - 使用指令建立 Layouts</NuxtLink></p>
<hr>
<p>🌿 每日任務 DAY 04</p>
<ProductCard />
<hr>
🌿 <NuxtLink to="/news">每日任務 DAY 05 - 使用指令建立 Composables</NuxtLink>
<hr>
<p>🌿 每日任務 DAY 06 - NuxtLink 與 路由基礎配置</p>
<p>🌿 每日任務 DAY 07 - 嵌套式路由、useRouter & useRoute</p>
<p>🌿 每日任務 DAY 08 - 動態路由與 404 錯誤頁面處理</p>
請點選 Navbar 的 “ 選擇房型 ”
<hr>
🌿 <NuxtLink to="/register">每日任務 DAY 09 - $fetch 與 ofetch</NuxtLink>
<hr>
<p>🌿 每日任務 DAY 16</p>
<button
    type="button" class="btn btn-primary me-2"
    @click="modalController.show">
    Launch Demo Modal
</button>
<button
    type="button" class="btn btn-secondary" 
    @click="offcanvasController.show">
    Toggle Static Offcanvas
</button>

</div>

<!-- Modal -->

<div
    ref="modal"
    class="modal fade"
    tabindex="-1" aria-labelledby="modal-label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title fs-5" id="modal-label">Modal Title</h5>
                <button
                    type="button" class="btn-close"
                    aria-label="Close" @click="modalController.hide">
                </button>
            </div>
            <div class="modal-body">
                <p class="mb-0">Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="modalController.hide">關閉</button>
            </div>
        </div>
    </div>
</div>

<!-- Offcanvas -->

<div
    ref="offcanvas"
    class="offcanvas offcanvas-start"
    tabindex="-1" aria-labelledby="static-backdrop-label">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title fs-5" id="static-backdrop-label">Offcanvas</h5>
        <button
            type="button" class="btn-close"
            aria-label="Close" @click="offcanvasController.hide">
        </button>
    </div>
    <div class="offcanvas-body">
        <div>I will not close if you click outside of me.</div>
    </div>
</div>

</template>

<style scoped></style>
