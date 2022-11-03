<template>
    <div class="cadastro-ong">
        <Logo/>
        <h1>CADASTRO</h1>
        <label>E-mail</label>
        <input type="email" v-model="email" placeholder="Email" required>
        <label>Senha</label>
        <input type="password" v-model="senha" placeholder="Senha" required>
        <label>Razão Social</label>
        <input type="text" v-model="razaoSocial" placeholder="Razão Social" required>
        <label>CPF/CNPJ</label>
        <input type="text" v-model="cpf" placeholder="000.000.000-00" required>
        <label>Causa</label>
        <select v-model="causas" placeholder="Causas" required>
            <option value="">Selecione a causa que melhor define sua instituição</option>
            <option>Combate à fome</option>
            <option>Combate a pobreza</option>
            <option>Crianças/jovens</option>
            <option>Idosos</option>
            <option>LGBTQIA+</option>
            <option>Mulheres</option>
            <option>Pessoas com deficiência (PCD)</option>
            <option>Proteção animal</option>
        </select>
    
        <label>Telefone</label>
        <input type="tel" v-model="celular" placeholder="(00) 0 0000-0000" required>
        <label>Telefone Fixo</label>
        <input type="tel" v-model="telFixo" placeholder="(00) 0 0000-0000">
        <label>CEP</label>
        <input type="text" v-model="cep" placeholder="00000-000">
        <label>Bairro</label>
        <input type="text" v-model="bairro" placeholder="Garcia">
        <label>Endereço</label>
        <input type="text" v-model="endereco" placeholder="Rua Iguape, 180">
        <label>Cidade</label>
        <input type="text" v-model="cidade" placeholder="Blumenau">
        <label>Estado</label>
        <select v-model="estado" placeholder="Estado" required>
            <option value="">Selecione o Estado</option>
            <option>Acre (AC)</option>
            <option>Alagoas (AL)</option>
            <option>Alagoas (AL)</option>
            <option>Amapá (AP)</option>
            <option>Amazonas (AM)</option>
            <option>Bahia (BA)</option>
            <option>Ceará (CE)</option>
            <option>Distrito Federal (DF)</option>
            <option>Espírito Santo (ES)</option>
            <option>Goiás (GO)</option>
            <option>Maranhão (MA)</option>
            <option>Mato Grosso (MT)</option>
            <option>Mato Grosso do Sul (MS)</option>
            <option>Minas Gerais (MG)</option>
            <option>Pará (PA)</option>
            <option>Paraíba (PB)</option>
            <option>Paraná (PR)</option>
            <option>Pernambuco (PE)</option>
            <option>Piauí (PI)</option>
            <option>Rio de Janeiro (RJ)</option>
            <option>Rio Grande do Norte (RN)</option>
            <option>Rio Grande do Sul (RS)</option>
            <option>Rondônia (RO)</option>
            <option>Roraima (RR)</option>
            <option>Santa Catarina (SC)</option>
            <option>São Paulo (SP)</option>
            <option>Sergipe (SE)</option>
            <option>Tocantins (TO)</option>
        </select>

        <div class="checkbox">
            <input type="checkbox" v-model="termos_do_contrato">
            <label for="termos_do_contrato">Li e aceito os termos de uso</label>
        </div>

        <div class="checkbox">   
            <input type="checkbox" v-model="alertas_email">
            <label for="alertas_email">Desejo receber alertas via e-mail</label>
        </div>

        <button @click="cadastroOng">CADASTRAR</button>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import Logo from "../../components/Logo.vue";

export default {
    name: "CadastroOng",
    data(){
        return{
            email: "",
            senha: "",
            razaoSocial: "",
            cpf: "",
            causas: "",
            idade: "",
            celular: "",
            telFixo: "",
            cep: "",
            bairro: "",
            endereco: "",
            cidade: "",
            estado: "",
            termos_do_contrato: false,
            alertas_email: false

        }
    },
    methods:{
        cadastroOng: function(){
            const termos = this.termos_do_contrato
            if(termos === true){
                let auth = getAuth();

                createUserWithEmailAndPassword(auth, this.email, this.senha)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // console.log(user)
                    const db = getDatabase();
                    set(ref(db, 'users_ong/' + user.uid), {
                        email: this.email,
                        razaoSocial: this.razaoSocial,
                        cpf: this.cpf,
                        causas: this.causas,
                        calular: this.celular,
                        telFixo: this.telFixo,
                        cep: this.cep,
                        bairro: this.bairro,
                        endereco: this.endereco,
                        cidade: this.cidade,
                        estado: this.estado,
                        termos_do_contrato: this.termos_do_contrato,
                        alertas_email: this.alertas_email
                    });
                    sendEmailVerification(user)
                    .then(() => {
                        this.$router.push({name: 'AtualizarPerfilOng'});
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorMessage)
                    })
                    this.email = ""
                    this.senha = ""
                    this.razaoSocial = ""
                    this.cpf = ""
                    this.causas = ""
                    this.idade = ""
                    this.celular = ""
                    this.telFixo = ""
                    this.cep = ""
                    this.bairro = ""
                    this.endereco = ""
                    this.cidade = ""
                    this.estado = ""
                    this.termos_do_contrato = false
                    this.alertas_email = false
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
            }else{
                alert('Você precisa aceitar os termos do contrato para se cadastrar');
            }
        }
    },
    components: {
        Logo
    }
}
</script>

<style scoped>

template{
    width: 100vw;
}

label{
    text-align: start;
    margin-left: 10%;
    font-weight: 600;
    font-size: smaller;
    color: #686460;
    text-transform: uppercase;

}

.cadastro-ong{
    display: flex;
    flex-direction: column;
    width: 40vw;
    background: #FFFFFF;
    border: 3px solid #686460;
    color: #686460;
    border-radius: 10px;
    font-size: smaller;
    font-weight: 600;
}

.cadastro-ong > input{
    background: #FFFFFF;
    border: 3px solid #686460;
    border-radius: 10px;
    margin: 2%;
    margin-left: 10%;
    margin-right: 10%;
    height: 4vh;
    padding-left: 10px;
    padding-right: 10px;
}

.cadastro-ong > select{
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

.cadastro-ong > button{
    display: flex;
    justify-content: center;
    align-items: center;

    background: #b6ecb5;
    border: 3px solid #38C735;
    color: #38C735;
    border-radius: 10px;
    font-size: smaller;
    font-weight: 600;

    margin: 5%;
    height: 2vh;
    margin-left: 30%;
    margin-right: 30%;
    padding: 3%;   
}


.checkbox{
    display: flex;
    height: 5vh;
    margin-left: 10%;
    margin-right: 10%;
}

.checkbox > input{
    width: 1.2vw;
}

.checkbox > label{
    margin-left: 5%;
    margin-top: 1.2%;
}
.cor{
    border: 3px solid #38C735;
    background-color: #b6ecb5;
}
.cor-text{
    color: #38C735;
}

@media only screen and (max-width: 900px) {
    .cadastro-ong{
        width: 80vw;
    }

    .checkbox > input{
    width: 2.5vw;
    }
}
</style>