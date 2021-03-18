<template>
    <div>
        <button v-on:click = "increase">+</button>
        {{counter}}
        <button v-on:click = "decrease">-</button>
    </div>
</template>

<script>
export default {
    name: 'QuantityCounter',

    data: function() {
        return {
            counter:0
        }
    },
    methods: {
        increase: function() {
            if (this.counter == 10) {
                alert("You cannot buy more than 10 items.")
            } else {
                this.counter++;
            }

            this.$emit('counter', this.item, this.counter)
            
        },

        decrease: function() {
            if (this.counter > 0) {
                this.counter--;
            }

            this.$emit('counter', this.item, this.counter)
        }
    }
}
</script>

<style>
    button{
        height: 40px;
        width: 40px;
        background-color: lightskyblue;
        color:white;
        font-size: 30px;
    }
    body {
        font-size: 30px;
    }

</style>