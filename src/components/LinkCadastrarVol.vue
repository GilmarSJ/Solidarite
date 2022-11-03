<template>
    <div class="main-register-vol">
        <h4>NÃO POSSUI CONTA?</h4>
        <div class="cadastro">
            <router-link to="/cadastro-vol"><p>CADASTRE-SE AGORA</p></router-link>
            <router-view />
        </div>
    </div>
</template>

<script>

export default {
    name: "LinkCadastrarVol"
}
</script>

<style scoped>
.main-register-vol{
    display: flex;
    flex-direction: column;
}

h4 {
    font-weight: 700;
    font-size: 0.7rem;
    color: #686460;
    letter-spacing: 4px;
}

.cadastro {
    font-weight: 300;
    font-size: 0.7rem;
    letter-spacing: 4px;
    color: rgba(104, 100, 96, 0.5);
}

.cadastro a{
    text-decoration: none;
    font-weight: 300;
    font-size: 0.7rem;
    letter-spacing: 4px;
    color: rgba(104, 100, 96, 0.5);
}
</style>