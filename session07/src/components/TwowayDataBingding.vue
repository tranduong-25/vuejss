<template>
  <form @submit.prevent="handleSubmit">
    <h2>UserName {{ userInfo.userName }}</h2>
    <h2>Date of birth {{ dateOfBirth }}</h2>
    <h3>Them moi nguoi dung</h3>
    <div> 
        Ho va ten: <input v-model="userInfo.userName" type="text" placeholder="nhap ten">
    </div>
    <div>Ngay sinh: <input v-model="userInfo.dateOfBirth" type="date" ></div>
    <div>gioi tinh</div>
    <div>
        Nam <input type="radio"> Nu <input type="radio"> khac
        <input type="radio">
    </div>
    <div>so thich</div>
    <div>
        Choi game <input value="game" v-model="userInfo.hobbies" type="checkbox">
        code <input value="code" v-model="userInfo.hobbies" type="checkbox">
        Boi loi <input value="swim" v-model="userInfo.hobbies" type="checkbox">
        Bong chuyen <input value="baseketball" v-model="userInfo.hobbies" type="checkbox">
    </div>
    <button>Them</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const userInfo = reactive({
    userName: "",
    dateOfBirth: "",
    gender: "0",
    hobbies: [],
})

const handleSubmit = () => {

    // e.preventDrfault();
    console.log("Submited: ", userInfo);
}
</script>

<style>

</style>