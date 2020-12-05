<template>
    <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <h1>Tražim:</h1>
        <br>
        <ejs-dropdownlist v-model="selected" id='dropdownlist' placeholder='Odaberi ime' :dataSource='images' :fields='fields'></ejs-dropdownlist>
    </div>
    <img v-if="selected" :src="require('@/assets/lovrinac/' + selected)">
  </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: "lovrinac.svg",
                images: [
                    {
                        ime: 'Ana Ivanković',
                        url: "l_anaivanković.png",
                    },
                    {
                        ime: "Ivan Herceg",
                        url: "l_ivanherceg.png"
                    },
                    {
                        ime: "Iva Barić",
                        url: "l_ivabarić.png"
                    },
                    {
                        ime: "Alan Jelić",
                        url: "l_alanjelić.png"
                    },
                    {
                        ime: "Lana Jerković",
                        url: "l_lanajerković.png"
                    },
                    {
                        ime: "Blaženka Perković",
                        url: "l_blaženkaperković.png"
                    },
                    {
                        ime: "Ljubica Popović",
                        url: "l_ljubicapopović.png"
                    },
                    {
                        ime: "Dado Topić",
                        url: "l_dadotopić.png"
                    },
                    {
                        ime: "Roko Vučković",
                        url: "l_rokovučković.png"
                    },
                    {
                        ime: "Erika Ćosić",
                        url: "l_erikaćosić.png"
                    },
                    {
                        ime: "Denis Lončar",
                        url: "l_denislončar.png"
                    },
                    {
                        ime: "Stela Štimac",
                        url: "l_stelaštimac.png"
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
