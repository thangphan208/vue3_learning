const classStore = {
    state: {
        listClass: [
            {
                "id": 1,
                "name": "class1"
            },
            {
                "id": 2,
                "name": "class2"
            },
            {
                "id": 3,
                "name": "class3"
            },
            {
                "id": 4,
                "name": "class4"
            },
            {
                "id": 5,
                "name": "class5"
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        classList : state => state.ListClass
    }
}

export default classStore;