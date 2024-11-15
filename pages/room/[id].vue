<script setup>

const route = useRoute();

const router = useRouter();

//

const { data } = await useFetch(`https://nuxr3.zeabur.app/api/v1/rooms/${route.params.id}`);

const room = ref(data.value.result);

const isProvide = (boolean) => boolean ? '提供' : '不提供';

</script>

<template>

<div class="text-center mb-3">
    <button
    type="button" class="btn btn-secondary"
    @click="router.go(-1)">
    回房型列表
    </button>
</div>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="room-page px-3 py-5">
                <div class="room-header">
                    <h2 class="h1 mb-5">{{ room.name }}</h2>
                    <p class="room-description">
                    {{ room.description }}
                    </p>
                </div>
                <div class="room-gallery">
                <img
                    :src="room.imageUrl"
                    :alt="`${room.name}主圖`"
                    class="room-main-image"
                    />
                <div class="room-image-list">
                    <template v-for="img in room.imageUrlList" :key="img">
                        <img :src="img" :alt="room.name" />
                    </template>
                </div>
            </div>
            <div class="room-info">
                <div class="info-block">
                    <h2 class="h3 mb-4">房間資訊</h2>
                    <p>面積：{{ room.areaInfo }}</p>
                    <p>床型：{{ room.bedInfo }}</p>
                    <p>最多容納人數：{{ room.maxPeople }} 人</p>
                    <p class="mb-0">價格：NT$ {{ room.price }} 元</p>
                </div>
                <div class="info-block">
                    <h2 class="h3 mb-4">房間配置</h2>
                    <ul class="mb-0">
                        <li v-for="(layout, idx) in room.layoutInfo" :key="layout.title + idx">
                        {{ layout.title }}：{{ isProvide(layout.isProvide) }}
                        </li>
                    </ul>
                </div>
                <div class="info-block">
                    <h2 class="h3 mb-4">房內設施</h2>
                    <ul class="mb-0">
                        <li v-for="(facility, idx) in room.facilityInfo" :key="facility.title + idx">
                        {{ facility.title }}：{{ isProvide(facility.isProvide) }}
                        </li>
                    </ul>
                </div>
                <div class="info-block">
                    <h2 class="h3 mb-4">客房備品</h2>
                    <ul class="mb-0">
                        <li v-for="(amenity, idx) in room.amenityInfo" :key="amenity.title + idx">
                        {{ amenity.title }}：{{ isProvide(amenity.isProvide) }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>

</template>

<style scoped>

.room-page {

  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

}

.room-header {
    
  text-align: center;
  margin-bottom: 30px;

}

.room-name {

  font-size: 2rem;
  color: #333;

}

.room-description {

  font-size: 1rem;
  color: #666;

}

.room-gallery {

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

}

.room-main-image {

  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;

}

.room-image-list {

  display: flex;
  justify-content: center;
  gap: 10px;

}

.room-image-list img {

  width: 100px;
  height: auto;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s;

}

.room-image-list img:hover { transform: scale(1.1); }

.room-info {

  display: flex;
  flex-direction: column;
  gap: 20px;

}

.info-block {

  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;

}

.info-block h2 {

  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #444;

}

.info-block p,
.info-block ul {

  font-size: 1rem;
  color: #555;

}

.info-block ul {

  list-style: none;
  padding-left: 0;

}

.info-block ul li:not(:last-child) { margin-bottom: 5px; }

</style>