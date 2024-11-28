<script setup lang="ts">
import { ref } from 'vue'
import type { IProduct } from '@/types/IProducts'

import AppDonePoint from '@/components/AppDonePoint.vue'
import AppPrice from '@/components/AppPrice.vue'
import { useTime } from '@/composables/useTime'
const { formatDate } = useTime()
const props = defineProps<{ product: IProduct }>()
const {
  product: {
    id,
    inRepair,
    serialNumber,
    isNew,
    photo,
    title,
    user,
    type,
    name,
    specification,
    guarantee,
    price,
    order,
    date,
    longDescription,
  },
} = props

const image = ref<string>(`/images/products/${photo}`)

const position: string = inRepair ? 'In repair' : 'Done'

const dateFrom: string = formatDate(guarantee.start, 'DD / MM / YYYY')
const dateTo: string = formatDate(guarantee.end, 'DD / MM / YYYY')

const newItem: string = isNew ? 'New' : 'used'

const justDate: string = formatDate(date, 'DD / MMM / YYYY')
const justDate2: string = formatDate(date, 'DD / MM')
</script>
<template>
  <div class="product-items-wrapper">
    <div class="product-item center">
      <app-done-point :active="!inRepair" />
    </div>

    <div class="product-item center image">
      <img :src="image" alt="img product" />
    </div>

    <div class="product-item column">
      <span class="product-item__title cut">{{ name }}</span>
      <span class="product-item__serial-number">{{ serialNumber }}</span>
    </div>

    <div :class="['product-item', { active: !inRepair }]">{{ position }}</div>

    <div class="product-item column date-time">
      <div class="product-item__date">
        <span> from </span>
        <span> {{ dateFrom }}</span>
      </div>
      <div class="product-item__date">
        <span>to </span>
        <span>{{ dateTo }}</span>
      </div>
    </div>
    <div class="product-item">
      <span> {{ newItem }} </span>
    </div>

    <div class="product-item">
      <app-price :price="price" />
    </div>
    <div class="product-item cut-two-lines">
      super long name a very super long name for a component to test its its
      longness and it should be cut
    </div>

    <div class="product-item cut-two-lines">
      {{ user ? user : '-----' }}
    </div>

    <div class="product-item cut-two-lines">
      super long name a very super long name for a component to test its its
      longness and it should be cut
    </div>

    <div class="product-item column time">
      <span>
        {{ justDate2 }}
      </span>
      <span>
        {{ justDate }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-items-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  background-color: vars.$white;
  border: 1px solid vars.$border-color;
  gap: 20px;
  color: vars.$text-secondary;
  min-width: max-content;
}

.product-item {
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 40px;

  &.active {
    color: vars.$color-primary;
  }

  &.center {
    text-align: center;
    display: grid;
    place-items: center;
  }

  &.image {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &.column {
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: flex-start;
  }

  &.time {
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: vars.$text-tertiary;
    & > span {
      text-align: center;

      font-size: 12px;
      color: vars.$text-tertiary;
    }
  }

  &:nth-child(1) {
    width: 40px;
  }

  &:nth-child(3) {
    width: 200px;
  }

  &:nth-child(4) {
    width: 70px;
  }
  &:nth-child(4) {
    width: 120px;
  }

  &:nth-child(5) {
    width: 140px;
  }
  &:nth-child(8) {
    width: 300px;
  }
  &:nth-child(9) {
    width: 200px;
  }
  &:nth-child(10) {
    width: 300px;
  }
  &:nth-child(11) {
    width: 120px;
  }
}

.product-item__date {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-end;
  gap: 3px;
  font-variant-numeric: tabular-nums;

  & span:first-child {
    width: 16px;
    color: vars.$text-tertiary;
    font-size: 12px;
  }

  & span:last-child {
    width: 120px;
    text-align: right;
  }
}

.product-item__title {
  font-size: 14px;
  font-weight: 700;
  color: vars.$text-primary;
}

.cut {
  overflow: hidden;
  max-width: 200px;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cut-two-lines {
  // max-width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  white-space: normal;
}

.product-item__serial-number {
  font-size: 12px;
  color: vars.$text-secondary;
}
</style>
