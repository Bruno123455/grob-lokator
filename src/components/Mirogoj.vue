<template>
    <div class="all">
        <section>
        <p class="content"><b><br/>Mirogoj, Tražim:</b> {{ Tražim }}</p>
        <b-field id="fie" label="Pretraži imena:">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="npr. Horvat"
                icon="magnify"
                clearable
                @select="option => Tražim = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
        <img src="../assets/mirogoj.svg">
    </div>
</template>


<script>
    export default {
        mounted() {
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => console.log(json))
        },
        data() {
            return {
                data: [
                    'Perić',
                    'Marić',
                    'Horvat',
                ],
                name: '',
                Tražim: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
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
    .all{
        width: 80%;
        margin:auto;
        margin-top: 50px;
        border-top: 5px solid #B0A690;
    }
    .label{
        all: unset;
    }
</style>
