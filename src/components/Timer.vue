<template>
    <div class="all">
        <h2>Predugo se zadržavate na groblju?</h2>
        <p>Zadajte si vrijeme:(nije u funkciji)</p>
        <b-field class="timer">
            <b-numberinput v-model="number"></b-numberinput>
        </b-field>
        <div class="count">Time Remaining: <br/>  {{remaining}}</div>
    </div>
</template>

<script>
import {mixin as VueTimers} from 'vue-timers'
var moment = require('moment');
moment().format(); 

export default {
    name: 'countdown',

    timers: {
        updateTime: { time: 1000, autostart: false, repeat: true}
    },

    mixins: [VueTimers],

    data(){
        return {
            remaining_secs: null,
            ends_at: null,
            number: 10,
            numberPlaceholder: 30,
        }
    },

    mounted(){
        this.start();
    },

    methods:{
        start: function () {
            this.ends_at = moment().add(10, 'minutes');
            this.$timer.start('updateTime');
        },

        updateTime: function(){
            const now = moment();
            const ends = moment(this.ends_at);
            const duration = moment.duration(ends.diff(now));

            this.remaining_secs = Math.floor(duration.asSeconds());
        }
    },

    computed:{
        remaining: function () {
            if (!this.remaining_secs) {
                return '10mins';
            }
            const duration = moment.duration(this.remaining_secs, 'seconds');

            const mins = duration.minutes();
            const secs = duration.seconds();

            return mins ? `${mins}mins ${secs}secs` : `${secs}secs`;
        }
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
