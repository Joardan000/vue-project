<script setup>
import {onMounted, ref} from 'vue'
import customApi from "../api/useApi.js";
import Paginator from 'primevue/paginator';

const token = localStorage.getItem('token')
const seeData = ref([])
const loading = ref(false)
const limit = ref(5)
const offset = ref(0)
const totalPages = ref(0)

async function getData() {
  try{
    loading.value = true
    const res = await customApi.get(`/Leads?Limit=${limit.value}&Offset=${offset.value}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    seeData.value = res.data.items
    totalPages.value = res.data.count
  }catch(err){
    console.log(err)
  }finally{
    loading.value = false
  }
}
function currentPage(e){
  offset.value = e.first
  getData()
}

onMounted(()=>{
  getData()
})
</script>

<template>
  <Paginator @page="currentPage" :rows="limit" :totalRecords="totalPages"></Paginator>
  <div v-if="loading">..loading</div>
  <pre v-else>{{seeData}}</pre>
</template>

<style scoped>

</style>