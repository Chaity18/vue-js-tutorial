const app = Vue.createApp({
    data() {
        return {
        
           users: [
               {id: 1, name: 'Test one',  age: 20, email: 'test@one.com',  isVerified: false, img: 'images/test1.png' , activated: true },
               {id: 2, name: 'Test two',  age: 22, email: 'test@two.com',  isVerified: false, img: 'images/test2.png' , activated: true },
               {id: 3, name: 'Test four', age: 23, email: 'test@four.com', isVerified: false, img: 'images/test3.png' , activated: true },
               {id: 4, name: 'Test fice', age: 24, email: 'test@five.com', isVerified: false, img: 'images/test4.png' , activated: true },
               {id: 5, name: 'Test six',  age: 25, email: 'test@six.com',  isVerified: false, img: 'images/test5.jpeg', activated: true },
            ],
           loggedIn: false ,
           bulkActions: []
        }
    },
    methods: {
        removeUser(user) {
           user.activated = !user.activated
        },

        verifyUser(user) {
            user.isVerified = !user.isVerified
        },

        toggleLogin() {
            this.loggedIn = !this.loggedIn
        },

        addBulk(user) {
            if(this.bulkActions.includes(user)) {
                this.bulkActions = this.bulkActions.filter(function (bulkUser) {
                    return bulkUser != user
                })
            } else {
                this.bulkActions.push(user)
            }
            console.log(this.bulkActions)
        },

        verifyBulk() {
            this.bulkActions = this.bulkActions.filter(function (bulkUser) {
                return bulkUser.isVerified = !bulkUser.isVerified
            })
        },

        removeBulk() {
            this.bulkActions = this.bulkActions.filter(function (bulkUser) {
                return bulkUser.activated = !bulkUser.activated
            })
        }
    },
    computed: {
        filterdUsers() {
            return this.users.filter((user) => user.activated)
        }
    }
})

app.mount('#app')