const app = Vue.createApp({
    data: function() {
        return {
            number: 0,
        }
    },
    methods: {
        addNumber(num) {
            this.number = this.number + num;
        }
    },
    computed: {
        result() {
            if(this.number < 37) {
                return 'Not there yet...';
            } else if (this.number > 37) {
                return 'Woah, too high!';
            } else {
                return this.number;
            }
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function(){
                that.number = 0;
                console.log('reset');
            }, 1000);
        }
    }
})

app.mount('#assignment');
















