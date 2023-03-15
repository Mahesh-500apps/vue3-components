<template>
    <div class="dark:bg-slate-800 pt-4 sticky ">
      <!-- <p>welcome sarthak</p> -->
      <p class="font-bold ">
       Personal Details
      </p>
    <p class="font-bold"> Name: {{JSON.parse(message).name }}<br/></p>
    <p>Email: {{JSON.parse(message).email }}<br/></p> 
     <p>Age: {{JSON.parse(message).age }}<br/></p>
     <p>Gender: {{JSON.parse(message).gender }}<br/></p>
    </div>
  </template>
  <script setup lang="ts">
   import { ref } from 'vue';
  import {useGlobalState} from '../composables/login.ts'

  const { getDetails } = useGlobalState();
  const message = ref(getDetails());
  console.log("message----->",message)
  
  </script>