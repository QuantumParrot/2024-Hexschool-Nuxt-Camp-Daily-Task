export const useAsyncHandling = () => {

    const catchAuthError = (asyncFn) => {

        return (params) => {

            asyncFn(params).catch((error) => {

                console.error(error.data.message);
                return navigateTo('/login');
                
            })

        }

    };

    return { catchAuthError }

}