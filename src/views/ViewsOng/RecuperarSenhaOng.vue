<template>
    <div class="base">
        <h1>RECUPERAR SENHA</h1>
        <h3>ESQUECEU A SENHA?</h3>
        <h4>VAMOS ENVIAR UM CÓDIGO DE VERIFICAÇÃO PARA SEU E-MAIL</h4>
        
        <div class="container">
            <input type="email" v-model="email" placeholder="usuario@email.com">
            <button @click="EnviarEmail">ENVIAR</button>
        </div>
    </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
    name:"RecuperarSenhaOng",
    data(){
        this.email = ""
    },
    methods: {
        EnviarEmail: function(){
            const auth = getAuth();
            sendPasswordResetEmail(auth, this.email)
            .then(() => {
                alert("Foi enviado um link de recuperação de senha para o email: " + this.email)
                this.$router.push({name: 'LoginOng'})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }
    }
}
</script>

<style scoped>

template{
    width: 100vw;
    height: 100vh;
    margin: 10%;
    padding: 10%;

    display: flex;
    flex-direction: column;
}

h3{
    font-weight: 500;
}

h4{
    font-weight: 400;
}

.base{
    background: #FFFFFF;
    border: 3px solid #686460;
    color: #686460;
    border-radius: 10px;
    font-size: smaller;
    padding-left: 10%;
    padding-right: 10%;
}
    
.container{
    display: flex;
    flex-direction: column;
    margin: 10%;
}

.container > input{
    background: #FFFFFF;
    border: 3px solid #686460;
    border-radius: 10px;
    margin-left: 10%;
    margin-right: 10%;
    height: 5vh;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 25px;
}

.container > button{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #b6ecb5;
    border: 3px solid #38C735; 
    color: #38C735;
    border-radius: 10px;
    margin-left: 10%;
    margin-right: 10%;
    height: 5vh;
    font-weight: 600;
}
</style>
    