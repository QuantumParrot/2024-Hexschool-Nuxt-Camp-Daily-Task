<script setup>

// props

// imageSrc: "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png"

// altText: "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢"

// title: "尊爵雙人房"

// price: "NT$ 10000 元"

// buttonText: "馬上預約"

</script>

<template>

<!-- sample -->

<div class="product-card">
    <div class="product-image">
        <img :src="imageSrc" :alt="altText" />
    </div>
    <h2 class="product-title">{{ title }}</h2>
    <p class="product-price">{{ price }}</p>
    <button class="product-button">{{ buttonText }}</button>
</div>

</template>

<style scoped>

.product-card {

  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 300px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

}

.product-card:hover { transform: translateY(-5px); }

.product-image img {

  width: 100%; height: auto;
  border-radius: 8px 0 0;

}

.product-title {

  font-size: 18px;
  font-weight: bold;
  margin: 16px 0 8px;
  text-align: center;

}

.product-price {

  font-size: 16px;
  color: #007BFF;
  text-align: center;
  margin-bottom: 16px;

}

.product-button {

  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;

}

.product-button:hover { background-color: #0056b3; }

</style>
