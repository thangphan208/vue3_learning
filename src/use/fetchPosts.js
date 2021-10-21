import {ref} from "vue";

export default function () {
    //fetch api test
    const group = ref([]);
    const error = ref(null);
    console.log(group);
    // eslint-disable-next-line no-unused-vars
    const getPosts = async () => {
        try {
            const result = await fetch("http://localhost:3000/posts");
            if (!result.ok) {
                throw Error("Something went wrong into get Post");
            }
            group.value = await result.json();
        } catch (err) {
            error.value = err;
            console.log(error.value);
        }
    }
    return {group, error, getPosts};
}