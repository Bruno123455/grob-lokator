<template>
    <div class="all">
        <h2>Predugo se zadržavate na groblju?</h2>
        <p>Zadajte si vrijeme:</p>
        <b-field class="timer">
            <b-numberinput v-model="number"></b-numberinput>
        </b-field>
        <Pomodoro :key="number" :minutes="number" :pomodoro-label="tekst"
        :start-label="start" :pause-label="pause" :reset-label="reset"/>
    </div>
</template>

<script>
    import Pomodoro from 'vuemodoro'
    export default {
    name: 'Timer',
    data() {
        return {
        number: 0,
        tekst: "Preostalo vrijeme:",
        start: "Pokreni",
        pause: "Pauziraj",
        reset: "Ponovno pokreni"
        };
    },
    components: {
        Pomodoro
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .timer{
       max-width: 50%;
       margin: auto;
       padding-top: 20px;
    }
    .count{
       font-size: 30px;
       color: #D7D6CB;
    }
    .all{
        border-top: 5px solid #B0A690;
        padding-top: 30px;
        padding-bottom: 30px;
        width: 80%;
        margin: auto;
    }
    h2{
        font-size: 30px;
        color: #D7D6CB;
        font-weight: bold;
    }
    p{
        color: #D7D6CB;
        font-size: 25px;
    }
</style>
