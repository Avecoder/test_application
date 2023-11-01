const apiUrl = 'https://api.iq.academy/api/';

export const fetchData = async ({endpoint, data}) => {
    const formData = new FormData();
    if(!!data && Object.keys(data).length) {
        for(let item in data) {
            formData.append(item, data[item]);
        }
    }



    try {
        const response = await fetch(`${apiUrl}${endpoint}`, {
            method: 'POST',
            body: formData,
        });



        const res = await response.json();
        return res;
    } catch (error) {
        console.error(error);
    }


}

