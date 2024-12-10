<script setup>

const { $swal } = useNuxtApp();

const router = useRouter();

const loginFormData = ref({

    // 測試用資料

    email: 'link1234567@mail.com',
    password: 'link123456',
    
});

const isFetching = ref(false);

// $fetch

const login = async () => {

    if (isFetching.value) return;

    isFetching.value = true;

    try {

        const res = await $fetch('/users/sign_in', {

            baseURL: 'https://todolist-api.hexschool.io',
            method: 'POST',
            body: { ...loginFormData.value }

        });

        if (res.status) {

            const token = useCookie('nuxt-todo-auth', {

                expires: new Date(res.exp * 1000),
                path: '/',

            });

            token.value = res.token;

            return $swal.fire({

                icon: 'success',
                text: `${res.nickname}，歡迎！`,

                toast: true,
                timer: 1500,
                showConfirmButton: false,

            });

        }
        
    } catch (error) {

        if (error.response._data) {

            return $swal.fire({

                icon: 'error',
                text: error.response._data.message,

                toast: true,
                timer: 1500,
                showConfirmButton: false,

            });

        }

        throw new Error(error);
        
    } finally { isFetching.value = false; }

};

// useAsyncData

const { execute:handleLoginProcess } = await useAsyncData('login', () => {

    if (isFetching.value) return;

    isFetching.value = true;

    return $fetch('/users/sign_in', {

        baseURL: 'https://todolist-api.hexschool.io',
        method: 'POST',
        body: { ...loginFormData.value },

        onResponse({ response }) {

            if (response.ok) {

                const { nickname, token, exp } = response._data;

                const cookie = useCookie('nuxt-todo-auth', {

                    expires: new Date(exp * 1000),
                    path: '/',

                });

                cookie.value = token;

                $swal.fire({

                    icon: 'success',
                    text: `${nickname}，歡迎！`,

                    toast: true,
                    timer: 1500,
                    showConfirmButton: false,

                });

                router.replace('/admin');

            }

        },

        onResponseError({ response }) {

            return $swal.fire({

                icon: 'error',
                text: response._data.message,

                toast: true,
                timer: 1500,
                showConfirmButton: false,

            });

        }

    }).finally(() => { isFetching.value = false });

}, { immediate: false });

</script>

<template>

<div class="bg-light py-3 py-md-5">
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                <div class="bg-white p-4 p-md-5 rounded shadow-sm">
                    <h2 class="h3 mb-4">會員登入</h2>
                    <form @submit.prevent="handleLoginProcess">
                        <div class="form-floating mb-4">
                            <input
                              type="email" class="form-control" id="email"
                              v-model="loginFormData.email"
                              required
                            />
                            <label for="email">信箱 <span class="text-danger">*</span></label>
                        </div>
                        <div class="form-floating mb-4">
                            <input
                              type="password" class="form-control" id="password"
                              placeholder="請輸入 8 碼以上密碼"
                              pattern=".{8,}"
                              v-model="loginFormData.password"
                              required
                            />
                            <label for="password">密碼 <span class="text-danger">*</span></label>
                        </div>
                        <button class="btn btn-lg btn-secondary w-100" type="submit" :disabled="isFetching">登入</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<style scoped></style>