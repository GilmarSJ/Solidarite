<template>
    <h1>Email de verificação foi enviado para o seu email</h1>
    <h3>Após verificar Entre na sua conta</h3>
    <button @click="VoltarHome">Home</button>
</template>

<script>

export default {
    name: "MensagemEmail",
    methods: {
        VoltarHome: function() {
            this.$router.push({name: 'Home'})
        }
    }
}
</script>
