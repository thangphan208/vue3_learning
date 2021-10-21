import {createStore} from 'vuex'
import classStore from "./modules/class";

// Create a new store instance.
const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        classStore
    },
})

export default store;