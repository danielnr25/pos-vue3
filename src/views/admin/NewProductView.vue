<script setup></script>

<template>
  <div>
    <h1>Nuevo Producto</h1>
    <div>
      <div>
        <FormKit type="form" submit-label="Agregar Producto">
          <FormKit
            type="text"
            label="Nombre"
            name="name"
            validation = "required"
            placeholder="Nombre del producto"
          />

          <FormKit type="file" label="Imagen Producto" name="image" />

          <FormKit
            type="select"
            label="Categoria"
            name="category"
            :options="['Electronica', 'Hogar', 'Oficina']"
          />

          <FormKit
            type="number"
            label="Precio"
            name="price"
            placeholder="Precio del producto"
          />

          <FormKit
            type="number"
            label="Stock"
            name="stock"
            placeholder="Cantidad de disponible"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>
