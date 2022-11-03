<template>
    <div class="main-social">
        <h4>NOSSAS REDES SOCIAIS</h4>

        <div class="icons">
            <div><i class='bx bxl-twitter rede' style='color:#03ffcf'></i></div>
            <div><i class='bx bxl-tiktok rede' undefined></i></div>
            <div><i class='bx bxl-instagram rede' style='color:#b906c7'></i></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LinkRedeSociais"
}
</script>

<style scoped>
.main-social{
    display: flex;
    flex-direction: column;
    gap: 0px;
}

.main-social h4{
    font-size: small;
    color: #686460;
    font-weight: 600;
}
.icons {
    display: flex;
    justify-content: center;
}

.rede {
    font-size: 25px;
    width: 60px;
}
</style>