<template>
    <div class="container jumbotron">
        <p style="text-align:center"><a class="btn btn-info"  @click="logout()" >Logout</a></p>
        <h3 class="display-5">Dashboard</h3>
        <!-- <p><a class="btn btn-primary btn-small"  @click="getAllUser()" >Get All Users</a></p> -->
        <table class="table table-striped">
          <thead>
          <tr>
            <th>All Users</th>
          </tr>
          </thead>
          <tbody>
            <tr v-for="user in allUsers" :key="user">
              <td >{{user.name}}</td>
            </tr>
          </tbody>
        </table>
        <p style="text-align:center"><a class="btn btn-info"  @click="addNewUser()" >Add New User</a></p>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'dashboard',
  props: {
    msg: String
  },
  data() {
    return {
      allUsers : [],
    }
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    async getAllUser() {
      const res =  await axios.post(
          'http://localhost:4000/graphql', {
          query: '{ getUsers { name }}'
        })
      this.allUsers = res.data.data.getUsers;
      console.log('this.allUsers', this.allUsers);
    },
    logout(){
      this.$router.replace('/login');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
