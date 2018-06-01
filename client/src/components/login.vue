<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
        <div class="card" v-show="!isAuthenticated">
            <article class="card-body">
                <h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
                <hr>
                <!-- <p class="text-success text-center">Some message goes here</p> -->
                <form>
                <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                    </div>
                    <input v-model="username" name="" class="form-control" placeholder="Email or Username" type="email">
                </div>
                </div>
                <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                    </div>
                    <input v-model="password" class="form-control" placeholder="******" type="password">
                </div>
                </div>
                <div class="form-group">
                <button type="submit" @click="doLogin()" class="btn btn-primary btn-block"> Login </button>
                </div>
                </form>
            </article>
        </div>
<!--         <dashboard v-show="isAuthenticated"></dashboard>
 -->    </div>
      <!-- <dashboard ></dashboard> -->
  </div>
</template>

<script>
/* eslint-disable */
// import dashboard from './dashboard.vue';
import axios from 'axios'

export default {
  name: 'login',
  /* components: {
    dashboard
  }, */
  props: {
    msg: String
  },
  data() {
    return {
        isAuthenticated: false,
        userArray: [],
        username: '',
        password: '',
    }
  },
  methods: {
    async doLogin() {
        console.log('Username', this.username, this.password);
        if(this.username === 'admin' && this.password === 'admin') {
          this.isAuthenticated = true;
          this.$router.replace('/dashboard');
          const res = await axios.post(
            'http://localhost:4000/graphql', {
            query: '{ getUsers { name }}'
          })
        this.userArray = res.data.data.getUsers;
        console.log('userArray', this.userArray);
        } else {
          alert('Username or password is wrong');
        }
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
    width: 400px;
    margin: 0 auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
