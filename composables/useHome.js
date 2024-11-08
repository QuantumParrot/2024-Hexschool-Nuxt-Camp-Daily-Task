export const useHome = () => {

    const apiUrl = 'https://nuxr3.zeabur.app/api/v1/home/news/';

    const news = ref([]);

    const isLoading = ref(false);

    const getNews = async () => {

        isLoading.value = true;
        
        try {

          const res = await fetch(apiUrl, { method: 'GET' });
          const resJson = await res.json();
          // console.log(resJson);
          news.value = resJson.result;

        } catch(error) { throw new Error(error); }

        finally { isLoading.value = false; }

    };

    return { news, getNews, isLoading }

}
