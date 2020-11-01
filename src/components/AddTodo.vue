<template>
    <div class="top">
        <a href="#"><img src="../assets/nadgr.svg"> Grob Lokator</a>
    </div>
</template>

<script>
export default {
   data () { 
       return{
          
       }
   }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a{
        font-size: 50px;
        font-style: oblique;
        color: #B0A690;
        font-weight: bold;
    }
    img{
        width: 150px;
        height: 150px;
        margin-bottom: -40px;
        margin-right: -40px;
        margin-top: -30px;        
    }
    .top{
        padding-top: 20px;
        padding-bottom: 10px;
        border-bottom: 5px solid #B0A690;
        width: 80%;
        margin: auto;
    }
    a:hover{
        color: #809EAD;
    }
</style>
