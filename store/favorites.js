export const state = () => ({
    favorites: []
})

export const actions = {
    addItem({ commit }, item) {
        commit('changeFavorites', item)
    },
    removeItem({ commit }, id) {
        commit('changeFavorites', id)
    }
}

export const mutations =  {
    changeFavorites(state, param) {
        if (typeof param == 'string') {
            const index = state.favorites.findIndex((favItem) => favItem.id == param );
            state.favorites.splice(index, 1);
        } else {
            state.favorites.push(param);
        }
    }
}

export const getters = {
    favItems: s => s.favorites
}