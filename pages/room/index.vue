<script setup>

const { data } = await useFetch('https://nuxr3.zeabur.app/api/v1/rooms');

const roomList = ref(data.value.result);

// const roomList = ref([]);

// fetch('https://nuxr3.zeabur.app/api/v1/rooms')
//     .then(response => {

//         if (!response.ok) { throw new Error('取得房型資料失敗'); }

//         return response.json();

//     })
//     .then(data => {

//         const { result } = data;
//         roomList.value = result;

//     })
//     .catch(error => console.log('發生錯誤：', error));

</script>

<template>

<h2 class="h1">挑選房型</h2>
<div>
    <div class="row justify-content-between">
        <div
        class="col-8 col-md-6 col-lg-4 g-3"
        v-for="room in roomList" :key="room._id">
            <div class="card h-100 shadow-sm">
                <img :src="room.imageUrl" class="card-img-top" alt="Room Image" />
                <div class="card-body d-flex flex-column">
                    <h3 class="card-title">{{ room.name }}</h3>
                    <p class="card-text flex-grow-1">{{ room.description }}</p>
                    <ul class="list-unstyled">
                        <li><strong>面積：</strong>{{ room.areaInfo }}</li>
                        <li><strong>床型：</strong>{{ room.bedInfo }}</li>
                        <li><strong>最大容納人數：</strong>{{ room.maxPeople }}</li>
                        <li><strong>價格：</strong>{{ room.price }}</li>
                    </ul>
                    <NuxtLink
                        to="/room/_id"
                        v-slot="{ navigate }" :custom="true">
                        <button role="link" class="btn btn-secondary" @click="navigate">前往查看</button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped></style>