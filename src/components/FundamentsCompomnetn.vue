<template>
   <div  class="mx-auto max-w-4xl" style="width: 80%;">


    <p>Cuantas personas en la ciudad (computed):
       <input type="text" v-model="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escribir ciudad">
    </p>
    <p> {{ colombians }}</p>

    <div class="flex flex-col">

          
                    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                      
                      <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                                <th scope="col" class="p-4">
                                  id
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Nombre
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Usuario
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Email
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Web
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                  Ciudad
                                </th>
                                <th scope="col" class="p-4">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                            <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">  {{ user.id }}</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"> {{ user.name }}</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"> {{ user.username }}</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"> {{ user.email }}</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"> {{ user.website }}</td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"> {{ user.address.city }}</td>
                              
                            </tr>
                          
                        </tbody>
                    </table>
            
     
    </div>
      
    <input type="text" v-model="newUserName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Agregar usuario"/>
      
    <button @click="addUser" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Agregar usuario
    </button>

       
    </div>
</template>





<script setup>

import { reactive, onMounted, computed ,ref} from 'vue';

let users = reactive([]);
let newUserName = reactive('');

const search = ref('');

  async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      users.push(...data);
      console.log(data);
  } 

  function addUser() {
      newUserName != '' ?
      users.push({id:(users.length+1),name:newUserName,username:newUserName,address:{city:'colombia'} }):
      null;
      newUserName = '';
      console.log(users);
  }

 
  onMounted(() => {
   fetchUsers();
  })

  

  const colombians = computed(() => {
     console.log(search);
      const filteredData = users.filter(obj => obj.address.city === search.value);
     // users = [];
     // users.push(filteredData);
      return 'Se encontraron: ' + filteredData.length;
      //return Math.PI * Math.pow(radio.value, 2);
  });

  

</script> 


