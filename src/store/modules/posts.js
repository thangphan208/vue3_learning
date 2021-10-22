import useFetchPosts from "../../use/fetchPosts";

const postStore = {
    state: {
        listPost: []
    },
    mutations: {
        SET_POSTS: (state, payload) => {
            state.listPost = payload
        }
    },
    actions: {
        getPost({commit}) {
            console.log("go to post store")
            const {group, getPosts} = useFetchPosts();
            getPosts();
            console.log(group);
            commit("SET_POSTS", group);
        }
    },
    getters: {
        listPost: state => state.listPost
    }
}

export default postStore;