export default defineNuxtRouteMiddleware(async () => {

    // 因為之前都用 todo api 練習，所以這裡也使用 todo api

    const { isHydrating, payload } = useNuxtApp();

    if (import.meta.client && isHydrating && payload.serverRendered) { return; }

    const token = useCookie('nuxt-todo-auth');

    if (!token.value) { return navigateTo('/login'); }

    try {

        const res = await $fetch('/users/checkout', {

            baseURL: 'https://todolist-api.hexschool.io',
            method: 'GET',
            headers: { Authorization: token.value }
    
        });
    
        // console.log('res', res);

        return;
        
    } catch (error) {

        const { message } = error.data;

        if (message && Array.isArray(message)) {

            message.forEach((error) => { console.error(error); })

        }

        token.value = null;

        return navigateTo('/login');
        
    }
    
});

// const { catchAuthError } = useAsyncHandling();

// catchAuthError(async () => {

//     const res = await $fetch('/users/checkout', {

//         baseURL: 'https://todolist-api.hexschool.io',
//         method: 'GET',
//         headers: { Authorization: token.value }

//     });

//     console.log('res', res);

//     return;

// })();