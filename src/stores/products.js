import { addDoc, collection } from 'firebase/firestore';
import {defineStore} from 'pinia'
import { computed } from 'vue';
import { useFirestore,useCollection, useFirebaseStorage } from 'vuefire'

export const useProductsStore = defineStore('products',() => {
   const db = useFirestore();
   const storage = useFirebaseStorage();


   const categories = [
      {id:1,name:'Polos'},
      {id:2,name:'Camisas'},
      {id:3,name:'Zapatillas'},
      {id:4,name:'Relojes'},
      {id:5,name:'Carteras'},
   ]

   async function createProduct(product){
      await addDoc(collection(db,'products'),product)
   }

   const categoryOptions = computed(()=>{
      const options = [
         {label:'Seleccione',value:'',attrs:{disabled:true}},
         ...categories.map(category => ({
            label:category.name,
            value:category.id}
         ))
      ]
      return options
   })

   return {
      createProduct,
      categoryOptions
   }

})