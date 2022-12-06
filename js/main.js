// Attraverso l'Api di Boolean generare 10 indirizzi email
// e stamparli in pagina all’interno di una lista.




const { createApp } = Vue;

createApp({
    data() {
      return {
        mail:[]
      }
    },
    mounted:function(){
        for(let i = 0; i <= 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                    this.mail.push(result.data.response);
                }
            )
        }
    }
  }).mount('#app')