const {createApp} = Vue; 

createApp({
    data() {
        return{
            message: 'Vue js is awesome!',
            cssClass: 'text-success',
            imgLogo: '.././img/bimbo.jpeg',
            rounded: 'rounded-5'
        }
    }
}).mount('#root')