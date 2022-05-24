const app = Vue.createApp({
    data() {
        return {
        
           users: [
               {id: 1, name: 'Test one',  age: 20, email: 'test@one.com',  isVerified: true, img: 'images/test1.png' },
               {id: 2, name: 'Test two',  age: 22, email: 'test@two.com',  isVerified: true, img: 'images/test2.png' },
               {id: 3, name: 'Test four', age: 23, email: 'test@four.com', isVerified: true, img: 'images/test3.png' },
               {id: 4, name: 'Test fice', age: 24, email: 'test@five.com', isVerified: false, img: 'images/test4.png' },
               {id: 5, name: 'Test six',  age: 25, email: 'test@six.com',  isVerified: false, img: 'images/test5.jpeg' },
            ],
           loggedIn: false 
        }
    },
    methods: {
        removeUser(id) {
            this.users = this.users.filter(function (items) {
                return items.id != id
            })
        },

        toggleLogin() {
            this.loggedIn = !this.loggedIn
        }

    }
})

app.mount('#app')