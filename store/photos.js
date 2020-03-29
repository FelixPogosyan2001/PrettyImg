export const state = () => ({
    photos: []
})

export const actions = {
   async getPhotos({ commit }, params){
        const APIKEY = '1irwdJ53RZ5odlhS0lO26Cff2zZDuC6uJEnQxF4ytVQ';
        const url = typeof params == 'object' ? `https://api.unsplash.com/search/photos/?client_id=${APIKEY}&query=${params[0]}-${params[1]}&order_by=${params[2]}&orientation=${params[3]}` : `https://api.unsplash.com/photos/random/?client_id=${APIKEY}&count=10`;
        const { data } = await this.$axios.get(url)
        commit('setPhotos', data.results || data);
    }
}

export const mutations = {
    setPhotos(state, photos) {
        state.photos = photos;
    }
}

export const getters = {
    photos: s => s.photos.slice(1, 9)
}