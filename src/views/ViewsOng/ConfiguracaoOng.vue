<template>

    <MenuOng/>

    <div class="configuracao">

    <div class="titulo">
        <i class="material-symbols-outlined">settings</i>
        <h1>CONFIGURAÇÕES</h1>
    </div>

    <div class="elementos">

        <label>Nome da Instituição</label>
        <div class="container">
            <input type="text" v-model="razaoSocial" placeholder="Razão Social" required>
            <i class="material-symbols-outlined">edit_square</i>
        </div>

        <label>Telefone</label>
        <div class="container">
            <input type="tel" v-model="celular" placeholder="(00) 0 0000-0000" required>
            <i class="material-symbols-outlined">edit_square</i>
        </div>

        <label>Endereço</label>
        <div class="container">
            <input type="text" v-model="endereco" placeholder="Rua Iguape, 180">
            <i class="material-symbols-outlined">edit_square</i>
        </div>

        <label>Cidade</label>
        <div class="container">
            <input type="text" v-model="cidade" placeholder="Blumenau">
            <i class="material-symbols-outlined">edit_square</i>
        </div>
        
        <label>Estado</label>
        <div class="container"></div>
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

        <label>Cidade</label>
        <div class="container">
            <input type="text" v-model="cidade" placeholder="Blumenau">
            <i class="material-symbols-outlined">edit_square</i>
        </div>

        <label>Senha</label>
        <div class="container"></div>
        <input type="password" v-model="senha" placeholder="Senha" required>
        <i class="material-symbols-outlined">edit_square</i>

        </div>
    </div>
</template>

<script>

import MenuOng from '../../components/MenuOng.vue';

export default {
    name: "ConfiguracaoOng",
    components: {
        MenuOng
    }
}

</script>

<style scoped>

.titulo{
    display: flex;
    justify-content: center;
    align-items: center;
}

.titulo > i{
    font-size: 2.5em;
    color: #686460;
    margin-right: 2%;
}

.titulo > h1{
    font-size: xx-large;
    color: #686460;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 1.5em;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding-top: 10px;
}

.elementos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: medium;
    font-weight: 600;
}

.elementos > label{
    text-align: justify;
    text-transform: uppercase;
    margin-top: 3vh;
    margin-bottom: 1%;
    margin-left: 1%;
}

.container{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: left;
}

.container > input{
    background: #FFFFFF;
    border: 2px solid #686460;
    border-radius: 10px;
    width: 60vw;
    height: 4vh;
    padding-left: 10px;
}

.container > select{
    background: #FFFFFF;
    border: 2px solid #686460;
    border-radius: 10px;
}

.container > i{
    margin-top: 0.3%;
    margin-left: 2%;
    color: #686460;
    z-index: 111;
    margin-left: -5%;
    cursor: pointer;

}

</style>