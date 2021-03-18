<template>
    <div>
        <p id = "menu"> Menu </p>
        <ul>
            <li v-for="item in itemsSelected" :key= item[0]>
                {{item[0]}} x {{item[1]}}
            </li>
        <button id = "findTotal" v-on:click="findTotal(); sendOrder()"> Add Order </button>
        <p v-show="clicked">Subtotal: ${{ this.subTotal }}</p>
        <p v-show="clicked">Grand Total: ${{ this.grandTotal }}</p>
        </ul>
    </div>
</template>

<script>
import database from '../firebase.js';
export default {
    name: 'Basket',
    props: {
        itemsSelected: {
            type: Array
        },
        items: {
            type: Array
        }
    },
    data () {
        return {
            subTotal: 0,
            clicked: false
        }
    },

    methods: {
        findTotal: function() {
            var subTotal = 0;
            for (let i = 0; i < this.itemsSelected.length; i++) {
                subTotal += this.itemsSelected[i][2] * this.itemsSelected[i][1];
            }
            this.subTotal = subTotal;
            this.clicked = true;
        },

        sendOrder: function() {
            var dict = {}
            for (let i = 0; i < this.itemsSelected.length; i++) {
                var current = this.itemsSelected[i]
                dict[current[0]] = current[1]
            }
            
            var menuList = ["Prawn Omelette", "Dry Beef Hor Fun", "Sambal KangKung", "Pork Fried Rice", "Mapo Tofu", "Cereal Prawn"]
            for (let i = 0; i < menuList.length; i++) {
                if (!(menuList[i] in dict)) {
                    dict[menuList[i]] = 0
                }
            }
            database.collection('orders').add(dict).then(() => { location.reload() });
        }
    },

    computed: {
        grandTotal: function() { 
            return (this.subTotal * 1.07).toFixed(2);
        }
    }
}
</script>

<style>
    li {
        flex-grow: 1;
        flex-basis: 300px;
        padding: 10px;
        margin: 10px;
    }

    #findTotal {
        height: 40px;
        width: 180px;
        background-color: lightseagreen;
        color:white;
        font-size: 20px;
    }

    #menu {
        margin-left: 32px;
        font-size: 50px;
    }
</style>