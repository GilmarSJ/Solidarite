<template>
    <div class="logo">
        <div class="circle">
            <img @click="VoltarHome" src="../assets/hands-logo.png" alt="">
        </div>
        
    </div>
    </template>
    
    <script>
    
    export default {
        name: "Logo",
        methods: {
            VoltarHome: function(){
                this.$router.push({name: 'Home'})
            }
        }
    }
    </script>
    
    <style scoped>
    
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .circle{
        height: 150px;
        width: 150px;
        border-radius: 50%;
        background-color: black;
        margin-top: 5%;
        z-index: 1;
        background: linear-gradient(90deg, #00c2cb, #2ce190, #ffde59, #ffa166, #ff66c4);
        background-size: 1000% 1000%;
        -webkit-animation: AnimationName 8s ease infinite;
        -moz-animation: AnimationName 8s ease infinite;
        animation: AnimationName 8s ease infinite;
    }
    
    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    
    .circle > img{
        width: 100px;
        margin-top: 23%;
        z-index: 2;
    }
    </style>