<script setup lang="ts">
import AppCreateButton from '@/components/AppCreateButton.vue'
import AppSelect from '@/components/AppSelect.vue'
interface IProps {
  showButton?: boolean
  header: string
  several?: number
  typeOptionsArray?: string[]
  specificationOptionsArray?: string[]
}

const {
  showButton = false,
  header = '',
  several = 0,
  typeOptionsArray,
  specificationOptionsArray,
} = defineProps<IProps>()

const emit = defineEmits<{
  'update:type': [type: string]
  'update:specification': [specification: string]
}>()

function onSetOptionType(e: Event) {
  const target = e.target as HTMLSelectElement
  emit('update:type', target.value)
}
function onSetOptionSpecification(e: Event) {
  const target = e.target as HTMLSelectElement
  emit('update:specification', target.value)
}
</script>
<template>
  <div class="page-header">
    <template v-if="showButton">
      <app-create-button />
    </template>

    <template v-if="several">
      <div class="header-wrapper">
        <span> {{ `${header} / ${several}` }} </span>
      </div>
    </template>

    <div class="select-wrapper" v-if="typeOptionsArray">
      <span>Type:</span>
      <app-select
        :options="typeOptionsArray"
        @change="onSetOptionType"
        placeholder="Type"
      />
    </div>

    <div class="select-wrapper" v-if="specificationOptionsArray">
      <span>Specification:</span>
      <app-select
        :options="specificationOptionsArray"
        @change="onSetOptionSpecification"
        placeholder="Specification"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
}

.header-wrapper {
  & span {
    font-size: 24px;
    font-weight: 700;
  }
}

.select-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;

  & span {
    font-weight: 300;
    color: vars.$text-secondary;
  }
}
</style>
