<template>
    <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <h1>Tražim:</h1>
        <br>
        <ejs-dropdownlist v-model="selected" id='dropdownlist' placeholder='Odaberi ime' :dataSource='images' :fields='fields'></ejs-dropdownlist>
    </div>
    <img v-if="selected" :src="require('@/assets/varazdin/' + selected)">
  </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: "varazdin.svg",
                images: [
                    {
                        ime: 'Marko Babić',
                        url: "v_markobabić.png",
                    },
                    {
                        ime: "Marta Grgić",
                        url: "v_martagrgić.png"
                    },
                    {
                        ime: "Josip Broz",
                        url: "v_josipbroz.png"
                    },
                    {
                        ime: "Petra Janković",
                        url: "v_petrajanković.png"
                    },
                    {
                        ime: "Nada Kralj",
                        url: "v_nadakralj.png"
                    },
                    {
                        ime: "Paula Marušić",
                        url: "v_paulamarušić.png"
                    },
                    {
                        ime: "Miljenko Petrić",
                        url: "v_miljenkopetrić.png"
                    },
                    {
                        ime: "Čedomir Poljak",
                        url: "v_čedomirpoljak.png"
                    },
                    {
                        ime: "Marina Pranjić",
                        url: "v_marinapranjić.png"
                    },
                    {
                        ime: "Mia Varga",
                        url: "v_miavarga.png"
                    },
                    {
                        ime: "Nikolina Vidović",
                        url: "v_nikolinavidović.png"
                    },
                    {
                        ime: "Dora Vuković",
                        url: "v_doravuković.png"
                    }
                    ],
                    fields : {text:'ime', value:'url'}
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img{
        width: 50%;
        height: 50%;
        margin:auto;
        display: inline-block;
    }
    #app{
        width: 80%;
        margin:auto;
        margin-top: 50px;
        border-top: 5px solid #B0A690;
        font-size: 25px;
        color: #D7D6CB;
        font-weight: bold;
    }
    #dropdownlist{
        color: #D7D6CB;
        font-size: 20px;
    }
    @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
