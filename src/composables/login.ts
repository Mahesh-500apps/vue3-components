import { createGlobalState,useLocalStorage } from "@vueuse/core";
import {ref} from "vue"
import { computed } from "vue";

export const useGlobalState = createGlobalState(() => {
  // state

  const store = useLocalStorage('conversation', '')
  console.log(store)

  const login_details: any =  store.value ? ref(JSON.parse(store.value)) : ref<[]>([]);

  // getters
  const getDetails = () => computed(() => store.value);

  // actions
//   function setSingleMessage(message: object) {
//      conversation.value.push(message);    
//     store.value = JSON.stringify(conversation.value);
//   }

  function saveUserInfo(messages: object) {
    store.value = JSON.stringify(messages);
  }

  return { login_details, getDetails, saveUserInfo};
});