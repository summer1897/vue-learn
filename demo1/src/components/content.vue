<template>
  <div class="content">
    <div class="add-person">
        <div class="field header-title">
          添加个人信息
        </div>
        <div class="field">
          <label>Id</label>
          <input type="text" name="id" :value="person.Id" v-model="person.Id"/>
        </div>
        <div class="field">
          <label>姓名</label>
          <input type="text" name="name" :value="person.name" v-model="person.name"/>
        </div>
        <div class="field">
          <label>年龄</label>
          <input type="text" name="age" :value="person.age" v-model="person.age"/>
        </div>
        <div class="field">
          <label>邮箱</label>
          <input type="text" name="email" :value="person.email" v-model="person.email"/>
        </div>
        <div class="field">
          <label>手机</label>
          <input type="text" name="id" :value="person.phone" v-model="person.phone"/>
        </div>
        <div class="field" style="text-align:center;">
          <button class="add-btn" @keyup.enter="addPerson" @click="addPerson">
            添加
          </button>
        </div>
    </div>
    <table id="person-info">
      <thead>
        <tr :class="{'header-bar':isTableHeader}">
          <td align="center">Id</td>
          <td align="center">姓名</td>
          <td align="center">年龄</td>
          <td align="center">邮箱</td>
          <td align="center">手机</td>
          <td align="center">操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p,index) in persons">
          <td>{{ p.Id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.age }}</td>
          <td>{{ p.email }}</td>
          <td>{{ p.phone }}</td>
          <td>
            <button class="del-btn" @keyup.delete="delPerson(index)" @click="delPerson(index)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <input type="text" v-model.trim="msg"/>
      <h3>message: {{ msg }}</h3>
    </div>
    <!-- <div>
      <span v-for="n in evenNumbers">
        {{ n }}
      </span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      msg: "",
      numbers: [1,2,3,4,5,6,7,8,9,10],
      isTableHeader: true,
      show: true,
      persons: [],
      person: {
        Id: 0,
        name: "summer",
        age: 28,
        email: "summer@sina.com",
        phone: "15268528314"
      }
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
    b: function() {
      return this.a + 1;
    }
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
    exitPerson: function(person) {
      // console.log("add person: ",person);
      // console.log("id: ",person.id);
      var id = parseInt(person.Id);
      for (var i = 0; i < this.persons.length; ++i) {
        console.log("p: ",this.persons[i]);
        var pid = parseInt(this.persons[i].Id);
        // console.log(pid + "," + id);
        if (pid === id) {
          return true;
        }
      }
      return false;
    },
    addPerson: function () {
        // console.log("person",this.person.name);
        var addPerson = {
          Id: this.person.Id,
          name: this.person.name,
          age: this.person.age,
          email: this.person.email,
          phone: this.person.phone
        }
        if (this.exitPerson(addPerson)) {
          alert("Already exists this person information!");
          // return;
        } else {
          this.persons.push(addPerson);
          this.person.Id = 0;
          this.person.name = "summer";
          this.person.age = 0;
          this.person.email = "summer@sina.com";
          this.person.phone = "18883308404";
        }
    } ,
    delPerson: function (index) {
      this.persons.splice(index,1);
    },
    mousein: function(e) {
      // console.log(e);
      if (e.fromElement == 'tr')
        e.target.style = "background-color: #e3e3e3";
    },
    mouseexit: function(e) {
      e.target.style = "background-color: white";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
  background-color: #e3e3e3;
}
.content {
  display: inline-block;
  margin-left: 120px;
}
.content .add-person {
  width: 1200px;
  margin: auto;
}
.content .add-person .header-title {
  background-color: #42b983;
  color: white;
  text-align: center;
}
.content .add-person .field {
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.content .add-person .field label {
  display: inline-block;
  width: 100px;
  text-align: left;
  height: 30px;
  line-height: 30px;
  color: #a3a3a3;
}
.content .add-person .field input {
  border: 1px solid #42b983;
  height: 30px;
  line-height: 30px;
  text-indent: 3px;
}
table {
  border-collapse: collapse;
}
.header-bar {
  background-color: #42b983;
  color:white;
}
.add-btn, .del-btn{
  background-color: #42b983;
  color: white;
  width: 80px;
  height: 30px;
  text-align: center;
  border:0px;
  cursor: pointer;
}
.add-btn:visited, .del-btn:visited {
  border:0px;
}
.del-btn {
  background-color: red;
}
#person-info {
  width: 1200px;
  margin: 20px auto;
}
#person-info tr td {
  text-align: center;
  border: 1px solid #efefef;
}
</style>
