<template>
    <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <h1>Tražim:</h1>
        <br>
        <ejs-dropdownlist v-model="selected" id='dropdownlist' placeholder='Odaberi ime' :dataSource='images' :fields='fields'></ejs-dropdownlist>
    </div>
    <img v-if="selected" :src="require('@/assets/mirogoj/' + selected)">
  </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: "mirogoj.svg",
                images: [
                    {
                        ime: 'Tomislav Barišić',
                        url: "m_tomislavbarišić.png",
                    },
                    {
                        ime: "Tina Horvat",
                        url: "m_tinahorvat.png"
                    },
                    {
                        ime: "Krešimir Jakšić",
                        url: "m_krešimirjakšić.png"
                    },
                    {
                        ime: "Tin Kovačić",
                        url: "m_tinkovačić.png"
                    },
                    {
                        ime: "Klara Marić",
                        url: "m_klaramarić.png"
                    },
                    {
                        ime: "Ante Martinović",
                        url: "m_antemartinović.png"
                    },
                    {
                        ime: "Tea petrović",
                        url: "m_teapetrović.png"
                    },
                    {
                        ime: "Domagoj Posavec",
                        url: "m_domagojposavec.png"
                    },
                    {
                        ime: "Borna Živković",
                        url: "m_bornaživković.png"
                    },
                    {
                        ime: "Dorotea Šarić",
                        url: "m_doroteašarić.png"
                    },
                    {
                        ime: "Juraj Špoljarić",
                        url: "m_jurajšpoljarić.png"
                    },
                    {
                        ime: "Jan Vukelić",
                        url: "m_janvukelić.png"
                    },
                    {
                        ime: "Antonio Vidaković",
                        url: "m_antoniovidaković.png"
                    },
                    {
                        ime: "Matko Matijević",
                        url: "m_matkomatijević.png"
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
