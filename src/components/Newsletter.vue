<template>
  <form class="nl" @submit.prevent="sendEmail">
    <h1>Pretplatite se na naš newsletter!</h1>
    <label>Ime</label>
    <input type="text" name="name" placeholder="Ivan Horvat">
    <label>Email</label>
    <input type="email" name="email" placeholder="ivan.horvat@gmail.com">
    <input type="submit" value="Pošalji">
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_ka5l9bs', 'template_qkv1b09', e.target, 'user_nYwLsRof0WWi9dEPHklSs')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style scoped>
  .nl{
    width: 80%;
    margin: auto;
    border-top: 5px solid #B0A690;
    padding-top: 20px;
    padding-bottom: 50px;
  }
  input{
    width: 30%;
    display: block;
    margin: auto;
  }
  h1{
    font-size: 30px;
    color: #D7D6CB;
    font-weight: bold;
    padding-bottom: 20px;
  }
  input{
    margin-top: 10px;
    margin-bottom: 10px;
    color:black;
    font-size: 25px;
    text-align: center;
    border-radius: 25px;
    border-width: 0px;
    padding: 5px;
    background-color: #D7D6CB;
  }
  label{
      color: #D7D6CB;
      font-size: 25px;
      font-weight: bold;
  }
  input[type="submit"]{
    margin-top: 15px;
    width: 10%;
    background-color: #809ead;
  }
</style>