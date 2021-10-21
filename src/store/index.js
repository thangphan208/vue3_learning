import {createStore} from 'vuex'
import classStore from "./modules/class";
import postStore from "./modules/posts";
// Create a new store instance.
const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        classStore,
        postStore
    },
})

export default store;