<script setup lang="ts">
import { ref, computed } from 'vue'
import { getProducts } from '@/api/api'

import type { IProduct } from '@/types/IProducts'
import { useAsyncFunction } from '@/composables/useAsyncFunction'

import AppTableWrapper from '@/components/table/AppTableWrapper.vue'
import AppProductTableItem from '@/components/table/AppProductTableItem.vue'
import AppHeader from '@/components/AppPageHeader.vue'
import AppLoader from '@/components/AppLoader.vue'

const typeOptionsArray = ref(['All', 'Monitors', 'Motherboards'])
const selectedType = ref(typeOptionsArray.value[0])

const specificationOptionsArray = ref([
  'All',
  'Specification 1',
  'Specification 2',
  'Specification 3',
])
const selectedSpecification = ref<string>(specificationOptionsArray.value[0])

const { data, loading, error } = useAsyncFunction<IProduct>(
  getProducts<IProduct>,
)
const several = computed(() => {
  return data.value?.length || 0
})
</script>
<template>
  <!-- :show-button="true" -->
  <app-header
    header="Products"
    :several="several"
    v-model:type="selectedType"
    :type-options-array="typeOptionsArray"
    v-model:specification="selectedSpecification"
    :specification-options-array="specificationOptionsArray"
  />
  <div v-if="loading" class="loader-wrapper">
    <app-loader />
  </div>
  <div v-else-if="error">Sorry something went wrong: {{ error }}</div>
  <div v-else class="products-wrapper">
    <app-table-wrapper v-if="data?.length">
      <app-product-table-item
        v-for="product in data"
        :key="product.id"
        :product="product"
      />
    </app-table-wrapper>
    <template v-else>
      <div>No products</div>
    </template>
  </div>
</template>

<style scoped>
/* .products-wrapper {
  overflow: auto;
} */
.loader-wrapper {
  display: grid;
  place-items: center;
  width: 100%;
  height: 500px;
}
</style>
