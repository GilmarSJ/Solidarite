<template>
    <h1>Atualizar perfil</h1>
    <input type="text" v-model="nome" placeholder="Nome de  usuário">
    <input ref="input" type="file" class="d-none" accept="image/*" @change="pegarImagem($event)">
    <button @click="abrirInput" type="button"><i class='bx bxs-camera-plus'></i></button>
    <button @click="atualizar">Enviar</button>
</template>

<script>
import { getAuth, updateProfile } from '@firebase/auth';
import { getDatabase, ref as referenceDB, update} from '@firebase/database';
import { uuidv4 } from '@firebase/util';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
export default {
    name: 'AtualizarPerfilVol',
    data(){
        return{
            nome: "",
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
        atualizar: function(){
            const auth = getAuth()
            const user = auth.currentUser
            const storage = getStorage()
            const storageRef = ref(storage, 'imagens_perfil_vol/' + uuidv4());

            uploadBytes(storageRef, this.imagem).then((snapshot) => {
                console.log(snapshot);
                snapshot.metadata.generation
                getDownloadURL(storageRef).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    console.log(this.numero)
                    updateProfile(user, {
                        displayName: this.nome,
                        photoURL: downloadURL
                    }).then(() =>{
                        console.log(user);
                        const db = getDatabase();
                        update(referenceDB(db, 'users_vol/' + user.uid), {
                            nome: user.displayName,
                            fotoPerfil: user.photoURL,
                        });
                        this.$router.push({name: 'MensagemEmail'});
                    }).catch((error) => {
                        console.log(error)
                    })
                });
            });
        }
    }
}
</script>
