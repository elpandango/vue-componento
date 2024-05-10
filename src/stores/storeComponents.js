import {defineStore} from 'pinia';
import {collection, onSnapshot, query, orderBy, doc, getDoc} from "firebase/firestore";
import {db} from '@/utils/firebase.js';

let componentsCollectionRef;
let componentsCollectionQuery;
let getComponentsSnapshot = null;

export const useStoreComponents = defineStore('storeComponents', {
    state: () => {
        return {
            components: [],
            componentsLoaded: false
        }
    },
    actions: {
        async getComponents(type) {
            this.componentsLoaded = false;
            componentsCollectionRef = collection(db, "components");
            componentsCollectionQuery = query(componentsCollectionRef, orderBy("date", "desc"));
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

                if (type) {
                    this.components = components.filter(comp => comp.content.type === type);
                } else {
                    this.components = components;
                }
                console.log('components: ', this.components);
                // this.components = components;
                this.componentsLoaded = true;

                console.log('componentsLoaded: ', this.componentsLoaded);
            });
        },
    },
    getters: {
        getComponentContent: (state) => {
            return (id) => {
                return state.components.filter(component => component.id === id)[0].content;
            }
        },
    },
})
