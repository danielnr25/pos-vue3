import { collection, addDoc, where, query, limit, orderBy, updateDoc, doc, getDoc, deleteDoc } from 'firebase/firestore'
import {defineStore} from 'pinia'
import { computed,ref } from 'vue';
import { useFirestore,useCollection, useFirebaseStorage } from 'vuefire'
//useCollection : nos permite obtener una colección de documentos de firestore y mantenerla sincronizada en tiempo real

export const useProductsStore = defineStore('products',() => {
   const db = useFirestore();
   const storage = useFirebaseStorage();
   const selectedCategory = ref(1); // por defecto seleccionamos la categoría 1


   // nos permite obtener la colección de productos ordenados por disponibilidad
   const q = query( 
      collection(db, 'products'),
      orderBy('stock', 'desc')
  )
  /* SELECT * FROM products ORDER BY stock ASC */

  const productsCollection = useCollection( q )

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
   });

   // nos permite obtener la colección de productos
   const noResults = computed(() => productsCollection.value.length === 0)


   // filtramos los productos por categoria
   const filteredProducts = computed(() => {
      return productsCollection.value
         .filter( product => product.category === selectedCategory.value)
         .filter( product => product.stock > 0)
   });

   return {
      createProduct,
      categoryOptions,
      productsCollection,
      noResults,
      filteredProducts,
      categories,
      selectedCategory
   }

})