<template>
    <MenuVol/>
    <div class="menu">
    <h1 class="walletMenu"><i class="bx bx-wallet"></i>CARTEIRA</h1>
</div>
    <div class="row">
        <div class="card-carteira">
            <h2>VINICIUS CORREIA</h2>
            <p class="ponto">PONTOS</p>
            <p class="pontos"><i class='bx bx-star'></i>200</p>
            
            <div class="rd">
            <div>
            <RouterLink class="rec" to="/carteira-rec-vol"><p>RECARREGAR</p></RouterLink>    
            </div>
        </div>

        <div class="rd2">
            <div class="dor">
                <p>DOAR</p></div>
        </div>
        </div>
        
    </div>

    

</template>

<script>
import MenuVol from "../../components/MenuVol.vue";


export default {
    name:'CarteiraVol',
    components: {
        MenuVol
    }
}
</script>

<style scoped>
*{
    font-family: 'Inter';
    margin: 0;
    padding: 0;
}

.walletMenu{
    display: flex;
    color: rgba(0, 0, 0, 0.678);
    top: 3vw;
    left: 35vw;
    font-size: 15px;
    text-indent: 5px;
    position: absolute;
}

.row{
box-sizing: border-box;
position: absolute;
width: 374px;
height: 300.01px;
left: 48%;
top: 20%;
border: 2px solid #686460;
border-radius: 18px;
}

.card-carteira{
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    width: 400px;
}

.card-carteira .ponto{
    font-size: 20px;
    color: rgb(241, 7, 144);
    margin-top: 20px;
    margin-top: 1px;
}
.pontos{
    color: rgb(0, 0, 0);
    font-size: 30px;
    margin-top: 2px;
    display: flex;
    margin-left: 30%;
    text-indent: 5px;
}

.bx-star{
    margin-top: 5px;
}

.rd{
     position: absolute;
     width: 189px;
     height: 125px;
     left: 0px;
     top: 58%;
     border-radius: 0px 0px 0px 18px;
     border-top: 1px solid;
}
.rd2{
     position: absolute;
     width: 181px;
     height: 125px;
     left: 189px;
     top: 58%;
     border-radius: 0px 0px 18px 0px;
     border-top: 1px solid;
     border-left: 1px solid;
     
}
.rec{
    color: #38C735;
    margin-left: center;
    margin-top: 40px;
    font-size: 20px;
}


.dor{
    color: #508BFF;
    margin-left: center;
    margin-top: 40px;
    font-size: 20px;
}

.rd:hover{
    background-color: #9be39ac5;
    cursor: pointer;
}

.rd2:hover{
    background-color: #9ab7e3c5;
    cursor: pointer;
}

</style>