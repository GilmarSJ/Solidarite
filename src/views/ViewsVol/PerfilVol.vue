<template>
    <div>
        <MenuVol/>
        <div class="vol-perfil">
            <div class="logo">
                <img :src=this.user_vol_photo alt=""/>
            </div>
            <div class="vol-info">
                <h2 class="upper">{{this.user_vol_api}}</h2>
                <h3>Voluntário desde xx/xx/xxxx</h3>
                <h3>Vagas inscritas: xx</h3>
            </div>
            <div class="linha-do-tempo">
                <div class="card-box">
                    <div class="card-vol">
                        <div class="img-box">
                            <img src="../../assets/logo.png" alt="#">
                        </div>
                        <div class="info">
                            <div class="info-titulo">
                                <i class="fa fa-calendar"></i>
                                <div class="data">
                                    <h3>xx Set</h3>
                                    <h3>9:20 AM</h3>
                                </div>
                                <div class="barra"></div>
                                <i class="fas fa-clipboard-list"></i>
                                <h2 class="upper">Voluntário (Adoção)</h2>
                            </div>
                            <div class="tag-box">
                                <i class="fa fa-tag"></i>
                                <h3 class="tag upper">mulheres</h3>
                                <h3 class="tag upper">pet</h3>
                                <h3 class="tag upper">idosos</h3>
                            </div>
                            <div class="info-texto">
                                <div class="desc">
                                    <i class="fa fa-comment"></i>
                                    <h2>DESCRIÇÃO DA VAGA</h2>
                                </div>

                                <h3> Segurar os cães com guia, levar para passear, ajudar os protetores a
                                    apresentar para possíveis adotantes, entregar material de educação para Guarda
                                    responsável
                                    de
                                    animais e preservação ambiental.</h3>
                                <i class="fas fa-angle-down drop-btn" v-on:click="showMenu"></i>
                            </div>
                        </div>
                    </div>
                    <div class="drop-card">
                        <br>
                        <div class="drop-info">
                            <div class="container-list">
                                <div>
                                    <ul>
                                        <li><i class="fa fa-map-marker-alt"></i></li>
                                        <li><i class="fa fa-clock"></i></li>
                                        <li><i class="fa fa-comment"></i></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>À DISTÂNCIA</li>
                                        <li>0 HORAS</li>
                                        <li>SIM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuVol from "../../components/MenuVol.vue";
import { getAuth } from 'firebase/auth'

export default {
    name: "PerfilVol",
    data(){
        return{
            user_vol_api: "",
            user_vol_photo: []
        }
    },
    methods: {
        showMenu: function () {
            document.querySelector(".drop-card").classList.toggle("show");
            document.querySelector(".drop").classList.toggle("rotate");
        }
    },
    components: {
        MenuVol
    },
    mounted(){
        this.user_vol_api = getAuth().currentUser.displayName
        this.user_vol_photo = getAuth().currentUser.photoURL
    }

}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: rgba(36, 34, 32, 0.7);
}

body {
    background: rgb(255, 255, 255);
}

.upper {
    text-transform: uppercase;
}

.vol-perfil {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 4vh;
}

.logo {
    background-color: rgba(128, 128, 128, 0.685);
    width: 200px;
    height: 200px;
    border-radius: 100%;
}

.vol-info {
    text-align: center;
}

.linha-do-tempo {
    justify-content: center;
    height: 50vh;
    gap: 5vh;
}

h2 {
    font-size: 18px;
    color: rgba(36, 34, 32, 0.7);
}

h3 {
    font-size: 14px;
    color: rgba(36, 34, 32, 0.5);
}

.card-vol {
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 90%;
}

.info {
    width: 550px;
    height: 100%;
    border-radius: 0 18px 18px 0;
    border: 2px solid rgba(128, 128, 128, 0.212);
    border-left: none;
    align-items: center;
    background-color: #ffffff;
    z-index: 999;
}

.info-titulo {
    width: 100%;
    height: 50px;
    display: flex;
    gap: 10px;
    padding: 2%;
    border-bottom: 2px solid rgba(128, 128, 128, 0.212);
    align-items: center;
}

.data {
    display: flex;
    flex-direction: column;
}

.data h3 {
    font-size: 12px;
    line-height: 1.4;
}

.barra {
    width: 30px;
    height: 2px;
    rotate: 90deg;
    background-color: rgba(128, 128, 128, 0.212);
}

.tag-removido {
    margin-left: 130px;
    padding: 0px 6px 0 6px;
    border-radius: 5px;
    color: rgba(255, 0, 0, 0.596);
    background-color: rgba(255, 0, 0, 0.349);
}

.tag-adicionado {
    margin-left: 130px;
    padding: 0px 6px 0 6px;
    border-radius: 5px;
    color: rgba(13, 139, 66, 0.76);
    background-color: rgba(0, 255, 106, 0.493);
}

.tag-box {
    border-bottom: 2px solid rgba(128, 128, 128, 0.212);
    width: 100%;
    height: 35px;
    align-items: center;
    display: flex;
    gap: 10px;
    padding: 10px;
}

.tag {
    padding: 0px 6px 0 6px;
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.76);
    background-color: rgba(134, 134, 134, 0.493);
}

.info-texto {
    align-items: right;
    text-align: right;
    padding: 3%;
}

.info-texto h3 {
    text-align: left;
}

.desc {
    display: flex;
    gap: 15px;
}

.img-box {
    width: 250px;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.685);
    border-radius: 18px 0 0 18px;
}

img {
    width: 215px;
    border-radius: 18px 0 0 18px;
}

.drop-btn {
    cursor: pointer;
    right: 0;
    transition: 300ms;
}

.drop-card {
    margin: auto;
    display: none;
    width: 90%;
    height: 50%;
    border: 2px solid rgba(128, 128, 128, 0.212);
    color: #ffffff;
    margin-top: -25px;
    border-radius: 0 0 18px 18px;
    transition: 300ms;
}

.drop-info {
    display: flex;
    text-align: left;
    transition: 500ms;
}

.container-list {
    max-width: 500px;
    display: flex;
    gap: 10px;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 12px;
}

.container-list ul {
    list-style: none;
}

.container-list ul li:not(:first-child) {
    margin-top: 30px;
}

.show {
    display: block;
}

.rotate {
    transform: rotate(180deg);
}
</style>