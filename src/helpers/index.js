export const formatCurrency = amount => Number(amount).toLocaleString('en-US', {
   style: 'currency',
   currency: 'USD'
 }); // esto nos permite formatear un número a moneda en dólares o cualquier otra moneda que necesitemos. $
 
 export const getCurrentDate = () => {
   const date = new Date();
   const day = date.getDate().toString().padStart(2, '0');
   const month = (date.getMonth() + 1).toString().padStart(2, '0');
   const year = date.getFullYear();
   return  `${day}/${month}/${year}`;
 }  // esto nos permite obtener la fecha actual en el formato dd/mm/yyyy. 
 