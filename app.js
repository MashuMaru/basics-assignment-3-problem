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
            if(this.number > 37) {
                return 'Woah, too high!';
            } else if (this.number < 37) {
                return 'Still too low...';
            } else {
                return this.number;
            }
        }
    },
    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.number = 0;
            }, 5000)
        }
    }
})
app.mount('#assignment');