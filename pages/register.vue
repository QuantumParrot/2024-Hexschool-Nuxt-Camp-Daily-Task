<script setup>

const { $swal } = useNuxtApp();

const userData = ref({

    // 測試用資料

    // 郵遞區號：https://c2e.ezbox.idv.tw/zipcode.php

    nickname: '林克',
    birthday: '1924-11-18',
    password: 'link123456',
    email: 'link1234567@mail.com',
    phone: '0912345678',
    address: { zipcode: '100', detail: '海拉路 777 號' },

});

const isFetching = ref(false);

const clearForm = () => {

  userData.value = { address: {} }

};

// useAsyncData

const { execute:registerMember } = await useAsyncData(
  
    'register', 
    () => $fetch('/users/sign_up', {

      baseURL: 'https://todolist-api.hexschool.io',
      method: 'POST',
      body: { name: userData.value.nickname, ...userData.value },

      async onResponse({ request, response }) {

        // console.log(response);

        if (response.ok) {

          $swal.fire({

            icon: 'success',
            text: '恭喜！帳戶註冊成功！',

            toast: true,
            timer: 1500,
            showConfirmButton: false,

          });

          clearForm();

        }

      },

      async onResponseError({ request, response }) {

        // console.log(response);

        $swal.fire({

          icon: 'warning',
          text: response._data.message,

          toast: true,
          timer: 1500,
          showConfirmButton: false,

        });

      }

    }),
    {
      immediate: false,
    }
  
);

// $fetch

const processRegistration = async () => {

  if (isFetching.value) return;

  isFetching.value = true;

  try {

    const response = await $fetch('/users/sign_up', {

      baseURL: 'https://todolist-api.hexschool.io',
      method: 'POST',
      body: {

        name: userData.value.nickname, ...userData.value

      }

    });

    await $swal.fire({

      icon: 'success',
      text: '恭喜！帳戶註冊成功！',

      toast: true,
      timer: 1500,
      showConfirmButton: false,

    });

    clearForm();

    return response;

  } catch(error) {

    if (error.response._data) {

      return await $swal.fire({

        icon: 'warning',
        text: error.response._data.message,

        toast: true,
        timer: 1500,
        showConfirmButton: false,

      });

    }

    throw new Error(error);

  } finally { isFetching.value = false; }

};

// "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"

</script>

<template>

<div class="bg-light py-3 py-md-5">
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                <div class="bg-white p-4 p-md-5 rounded shadow-sm">
                    <h2 class="h3 mb-4">會員註冊</h2>
                    <form @submit.prevent="processRegistration">
                        <div class="form-floating mb-4">
                            <input
                              type="text" class="form-control" id="firstName"
                              v-model="userData.nickname"
                              required
                            />
                            <label for="firstName">姓名 <span class="text-danger">*</span></label>
                        </div>
                        <div class="form-floating mb-4">
                            <input
                              type="email" class="form-control" id="email"
                              v-model="userData.email"
                              required
                            />
                            <label for="email">信箱 <span class="text-danger">*</span></label>
                        </div>
                        <div class="form-floating mb-4">
                            <input
                              type="password" class="form-control" id="password"
                              placeholder="請輸入 8 碼以上密碼"
                              pattern=".{8,}"
                              v-model="userData.password"
                              required
                            />
                            <label for="password">密碼 <span class="text-danger">*</span></label>
                        </div>
                        <div class="form-floating mb-4">
                            <input
                              type="tel" class="form-control" id="phone"
                              pattern="(\+886|0)?9\d{8}|(\+886|0)?2\d{8}|\d{3}-\d{4}-\d{4}"
                              v-model="userData.phone"
                              required
                            />
                            <label for="phone">電話</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input
                              type="date" class="form-control" id="dateInput"
                              v-model="userData.birthday"
                              required
                            />
                            <label for="dateInput">出生年月日</label>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-floating mb-4">
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="zipcode"
                                      pattern="\d{3,}"
                                      v-model="userData.address.zipcode"
                                      required
                                    />
                                    <label for="zipcode">郵遞區號</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating mb-4">
                                    <input
                                      type="text"
                                      class="form-control"
                                      id="address"
                                      v-model="userData.address.detail"
                                      required
                                    />
                                    <label for="address">詳細地址</label>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-lg btn-secondary w-100" type="submit" :disabled="isFetching">註冊</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped></style>
