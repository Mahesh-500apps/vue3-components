<template>
  <form @submit.prevent="save">
    Name<input type="text" v-model="cname" /><br /><br />
    Email <input type="email" v-model="email" /><br /><br />
    age <input type="number" v-model="age" min="18" max="99" /> Gender<input
      type="text"
      v-model="gender"
    /><br /><br />
    <button type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGlobalState } from "../composables/login.ts";
import { useRouter } from 'vue-router';

//   import { useRouter } from 'vue-router';
//   const router = useRouter();

const cname = ref(null);
const email = ref(null);
const age = ref();
const gender = ref(null);
const { saveUserInfo } = useGlobalState();

function save() {
  let message = {
    name: cname.value,
    email: email.value,
    age: age.value,
    gender: gender.value,
  };
  console.log("message--->", message);
  saveUserInfo(message);
  const router = useRouter();
  router.push('/further-page');
}
</script>
