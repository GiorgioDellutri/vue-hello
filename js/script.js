const {createApp} = Vue; 

createApp({
    data() {
        return{
            message: 'Vue js is awesome!',
            cssClass: 'blueviolet',
            imgLogo: '.././img/logo.png'
        }
    }
}).mount('#root')