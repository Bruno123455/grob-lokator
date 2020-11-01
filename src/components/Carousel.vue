<template>
    <div class="images">
        <h2>Na kojem se groblju nalazite?</h2>
        <a>Mirogoj<img src="../assets/mirogoj.png"></a>
        <a>Lovrinac<img src="../assets/lovrinac.png"></a>
        <a>Varaždin<img src="../assets/varazdin.png"></a>
        <Mirogoj/>
        <Lovrinac/>
        <Varazdin/>
    </div>
</template>

<script>
import Mirogoj from './Mirogoj.vue'
import Lovrinac from './Lovrinac.vue'
import Varazdin from './Varazdin.vue'

export default {
  name: 'Carousel',
  components: {
    Mirogoj,
    Lovrinac,
    Varazdin,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    img{
        width: 450px;
        height: 350px;
        border: 3px solid black;
        margin-inline-end: 10px;
        filter: grayscale(100%);
        display: block;
        position: relative;
    }
    img:hover{
        filter: grayscale(0%);
        width: 470px;
        height: 360px;
        transition: width 0.5s;
    }
    .images{
        padding-top: 20px;
        padding-bottom: 40px;
    }
    a{
        font-size: 30px;
        color: #D7D6CB;
        font-weight: bold;
        display: inline-block;
    }
    h2{
        font-size: 35px;
        color: #D7D6CB;
        font-weight: bold;
        padding-bottom: 30px;
    }
    a:hover{
        color: #809ead;
    }
    .mir {
        display: none;
    }
</style>
