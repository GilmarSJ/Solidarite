import { createApp } from 'vue'
import router from './router/index.js'
import './style.css'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import PrimeVue from 'primevue/config';

const firebaseConfig = {
    apiKey: "AIzaSyDnfGDQ9jWxOfQMADv8ZXERykixm3FK-98",
    authDomain: "tcc-solidarite.firebaseapp.com",
    databaseURL: "https://tcc-solidarite-default-rtdb.firebaseio.com",
    projectId: "tcc-solidarite",
    storageBucket: "tcc-solidarite.appspot.com",
    messagingSenderId: "1048778806442",
    appId: "1:1048778806442:web:6484bb76b2c703e917ecd3"
};

const app = initializeApp(firebaseConfig);

getDatabase(app)

app.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(getAuth(), (userfirebase) => {
            unsubscribe();
            resolve(userfirebase);
            console.log("Usuário Autenticado")
        }, reject)
    })
};

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !await app.getCurrentUser()){
      next('/');
    }else{
      next();
    }
});

createApp(App)
.use(router, PrimeVue)
.mount('#app')
