import {defineStore} from 'pinia';
import {collection, onSnapshot, query, orderBy} from "firebase/firestore";
import {db} from '@/utils/firebase.js';

export const useStoreComponents = defineStore('storeComponents', {
    state: () => {
        return {
            components: [],
            componentsLoaded: false
        }
    },
    actions: {
        async getComponents() {
            this.componentsLoaded = false;
            const componentsCollectionQuery = query(collection(db, "components"), orderBy("date", "desc"));
            onSnapshot(componentsCollectionQuery, (querySnapshot) => {
                let components = [];
                querySnapshot.forEach((doc) => {
                    const component = {
                        id: doc.id,
                        date: doc.data().date,
                        content: doc.data().content
                    };
                    components.push(component);
                });
                this.components = components;
                this.componentsLoaded = true;
            });
        },
    },
    getters: {
        getComponentByType: (state) => (type) => {
            if (type) {
                return state.components.filter(comp => comp.content.type === type);
            } else {
                return state.components;
            }
        },
    },
})
