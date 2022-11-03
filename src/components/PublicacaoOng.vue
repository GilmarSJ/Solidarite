<template>
    <h1>Publicação Ong</h1>
    <form @submit.prevent="Publicar">
        <div class="card-publi">
            <div class="top-card">
                <div class="img">
                    <input ref="input" type="file" class="d-none" accept="image/*" @change="pegarImagem($event)">
                    <button @click="abrirInput" type="button"><i class='bx bxs-camera-plus'></i></button>
                    <div mt-2 v-if="this.imagem">
                        {{ this.imagem.name }}
                        <button type="button" class="btn badge-light" @click="this.imagem = ''"><i
                                class="fa fa-trash text-danger"></i></button>
                    </div>
                </div>
                <div class="info">
                    <input type="text" v-model="titulo" placeholder="TÍTULO" class="title">
                    <textarea v-model="texto" placeholder="No que você está pensando?" class="text"></textarea>
                </div>
            </div>
            <div class="bottom-card">
                <div type="button" class="bttn btn btn-secondary" data-toggle="modal" data-target="#modalHora">
                    <div v-if="this.hora">{{ hora }}</div>
                    <div v-else class="break">HORÁRIO</div>
                </div>
                <div type="button" class="bttn btn btn-secondary" data-toggle="modal" data-target="#modalData">
                    <div v-if="this.data">{{ data }}</div>
                    <div v-else class="break">DATA DO EVENTO</div>
                </div>
                <div type="button" class="bttn btn btn-secondary" data-toggle="modal" data-target="#modalNumero">
                    <div v-if="this.numVol">{{ numVol }}</div>
                    <div v-else class="break">NÚMERO DE VOLUNTÁRIOS</div>
                </div>
                <div type="button" class="bttn btn btn-secondary" data-toggle="modal" data-target="#modalFormato">
                    <div v-if="this.formato">{{ formato }}</div>
                    <div v-else class="break">FORMATO DO EVENTO</div>
                </div>
            </div>
            <button class="publiBtn">PUBLICAR</button>
        </div>

        <div class="modal fade" id="modalHora" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Escolha o horário</h5>
                    </div>
                    <div class="modal-body">
                        <input class="m-input" type="time" v-model="hora">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalData" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Escolha a data do evento</h5>
                    </div>
                    <div class="modal-body">
                        <input class="m-input" type="date" v-model="data">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalNumero" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Insira o número de funcionários</h5>
                    </div>
                    <div class="modal-body">
                        <input class="m-input" type="number" v-model="numVol" placeholder="00">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalFormato" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Escolha o formato do evento</h5>
                    </div>
                    <div class="modal-body">
                        <select class="select-i" placeholder="Formato do Evento" v-model="formato">
                            <option value="">Escolha o formato que será seu evento</option>
                            <option>Presencial</option>
                            <option>Remoto</option>
                            <option>Hibrido</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { getAuth } from '@firebase/auth'
import { getDatabase, push, ref as referenceDB } from '@firebase/database';
import { uuidv4 } from '@firebase/util';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default{
    name: "PublicacaoOng",
    data() {
        return{
            titulo: "",
            texto: "",
            data: "",
            hora: "",
            numVol: "",
            formato: "",
            imagem: ""
        }
    },
    methods: {
        abrirInput: function(){
            this.$refs.valeu = null
            this.$refs.input.click()
        },
        pegarImagem: function({target}){
           this.imagem = target.files[0]
           
        },
        Publicar: function(){
            const auth = getAuth();
            const db = getDatabase();
            const storage = getStorage()
            const storageRef = ref(storage, 'imagens/' + uuidv4());
            console.log(storageRef)
            uploadBytes(storageRef, this.imagem).then((snapshot) => {
                console.log(snapshot);
                snapshot.metadata.generation
                getDownloadURL(storageRef).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    push(referenceDB(db, 'publicacao_ong/'), {
                        autor: {
                            uuid: auth.currentUser.uid,
                            email: auth.currentUser.email,
                            nome: auth.currentUser.displayName,
                            fotoPerfil: auth.currentUser.photoURL,
                        },
                        publicacao: {
                            titulo: this.titulo,
                            texto: this.texto,
                            dataEvento: this.data,
                            horaEvento: this.hora,
                            numVol: this.numVol,
                            formato: this.formato,
                            imagem: downloadURL
                        },
                        data: new Date().toLocaleTimeString()
                    });
                });
            });
        }
    }
}
</script>

<style scoped>
* {
    padding: 0;
    box-sizing: border-box;
}

::placeholder{
    color: rgba(0, 0, 0, 0.404);
    font-weight: 600;
}

.modal-body{
    height: 200px;
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.break{
    display: flex;
    word-wrap: break-word;
}

label[for="file"] {
    border: 1px solid #000;
    padding: 10px;
}


.card-publi {
    display: flex;
    flex-direction: column;
    width: 620px;
    height: 270px;
}

.top-card {
    display: flex;
    right: 0;
    height: 190px;
    border-radius: 12px 12px 0 0;
    border: 2px solid rgba(128, 128, 128, 0.212);
}
.info{
    width: 100%;
    height: 160px;
}

.img {
    border-right: 2px solid rgba(128, 128, 128, 0.212);
    width: 260px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bxs-camera-plus {
    width: 100px;
    font-size: 100px;
    align-items: center;
}

.title {
    width: 100%;
    outline: none;
    padding: 5px;
    border: none;
    border-bottom: 2px solid rgba(128, 128, 128, 0.212);
    letter-spacing: 1px;
}

.text {
    width: 100%;
    height: 100px;
    padding: 5px;
    resize: none;
    outline: none;
    border: none;
    letter-spacing: 2px;
}

.bottom-card {
    justify-content: space-around;
    display: flex;
    height: 50px;
    width: 620px;
    border-bottom: 2px solid rgba(128, 128, 128, 0.212);
    border-left: 2px solid rgba(128, 128, 128, 0.212);
    border-right: 2px solid rgba(128, 128, 128, 0.212);
    border-radius: 0 0 12px 12px;
}

.bttn{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.404);
    border: none;
    font-weight: 600;
    width: 200px;
    height: 49px;
    padding: 8px;
    transition: 200ms;
    outline: none;
}

.bottom-card .btn:hover{
    color: rgba(0, 0, 0, 0.637);
}

.bottom-card .btn:not(:last-child) {
    border-right: 2px solid rgba(128, 128, 128, 0.212);
}

/* .btn:not(:first-child) {
    border-left: 2px solid rgba(128, 128, 128, 0.212);
} */

.bottom-card .btn:hover,
.bottom-card .btn:focus {
    background-color: rgba(0, 0, 0, 0.034);
}

.modal-header{
    display: flex;
    justify-content: center;
}

.modal-title{
    color: rgba(0, 0, 0, 0.637);
    font-weight: 600;
    font-size: large;
}
.modal-body{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    color: rgba(0, 0, 0, 0.637);
}

.select-i{
    width: 250px;
    font-size: 2em;
    border-radius: 10px;
    text-align: center;
}

.m-text{
    font-size: xx-large;
}
.m-input{
    width: 250px;
    font-size: 3em;
    border-radius: 10px;
    text-align: center;
}
.modal-footer{
    display: flex;
    justify-content: space-between;
    
}

.modal-footer .btn{
    background-color: #fff;
    color: #686460;
    font-weight: 600;
    border: none;
    outline: none;
}

.modal input, select{
    border: 2px solid rgba(128, 128, 128, 0.212);
    outline: none;
}

input, textarea{
    color: rgba(0, 0, 0, 0.562);
    font-weight: 700;
}

.card-publi .publiBtn{
    text-align: right;
}

.publiBtn{
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2px;
    width: 120px;
    height: 40px;
    border: 2px solid rgba(128, 128, 128, 0.212);
    background-color: #fff;
    color: rgba(0, 0, 0, 0.562);
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 10px;
}
</style>