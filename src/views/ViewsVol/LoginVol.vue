<template>
    <div class="login-vol">
        <Logo/>

        <h1>VOLUNTÁRIO</h1>
        <label for="email">E-MAIL</label>
        <input type="email" v-model="email" placeholder="E-mail">
        <label for="senha">SENHA</label>
        <input type="password" v-model="senha" placeholder="Senha">
        
        <div class="esqueceu-senha"><RouterLink to="/recuperar-senha-vol">Esqueceu a senha?</RouterLink></div>
        <button @click="EntrarVol">ENTRAR</button>
        <RouterView/>
        <LinkCadastrarVol/>
        <LinkRedeSociais/>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import LinkCadastrarVol from "../../components/LinkCadastrarVol.vue";
import LinkRedeSociais from "../../components/LinkRedeSociais.vue";
import Logo from "../../components/Logo.vue";

export default {
    name: "LoginVol",
    data(){
        return{
            email: "",
            senha: ""
        }
    },
    methods: {
        EntrarVol: function(){
            const auth = getAuth();
            const db =  getDatabase();
            signInWithEmailAndPassword(auth, this.email, this.senha)
            .then( async (userCredential) => {
                // Signed in
                const user = userCredential.user;

                const userRef = ref(db, 'users_vol/' + user.uid);

                let userExistInVol = false;

                const snapshot = await get(userRef)
                const data = snapshot.val();

                if (data || data !== null) {
                    userExistInVol = true
                }

                if (user.emailVerified && userExistInVol) {
                    this.$router.push({ name: 'FeedVol'});
                } else {
                    alert("email não verificado ou usuário não é um Voluntário");
                    signOut(auth)
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
            this.email = ""
            this.senha = ""
        }
    },
    components: {
        LinkCadastrarVol,
        LinkRedeSociais,
        Logo
    }
}
</script>

<style scoped>
.login-vol{
    display: flex;
    flex-direction: column;
    border: 3px solid #686460;
    border-radius: 10px;
    margin: -30%;
    width: auto;
    padding: 8px;
}

label{
    text-align: start;
    margin-left: 10%;
    margin-top: 5%;
    font-weight: 600;
    font-size: smaller;
    color: #686460;
}

.login-vol > h1{
    font-size: xx-large;
    color: #686460;
    font-weight: 600;
    letter-spacing: 3px;
}

.login-vol > input{
    background: #FFFFFF;
    border: 3px solid #686460;
    border-radius: 10px;
    margin: 2%;
    margin-left: 10%;
    margin-right: 10%;
    height: 5vh;
    padding-left: 10px;
    padding-right: 10px;
}

.esqueceu-senha{
    display: flex;
    margin-left: 10%;
    font-size: x-small;
    letter-spacing: 4px;
}
.esqueceu-senha a{
    text-decoration: none;
    font-weight: 300;
    letter-spacing: 4px;
    color: rgba(104, 100, 96, 0.5);
}

.login-vol > button{
    display: flex;
    justify-content: center;
    align-items: center;

    background: #b6ecb5;
    border: 3px solid #38C735;
    border-radius: 10px;
    font-size: smaller;
    font-weight: 600;
    color: #38C735;

    margin: 5%;
    height: 5vh;
    margin-left: 20%;
    margin-right: 20%;
    padding: 5%;       
}

</style>