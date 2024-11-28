<script setup lang="ts">
import type { IPrice } from '@/types/IProducts'
import { symbolObject } from '@/constants/symbolCurrency'

const { price } = defineProps<{ price: IPrice[] }>()
</script>

<template>
  <div class="app-price">
    <template v-for="(item, index) in price" :key="item.symbol">
      <div v-if="item.value > 0 && index === 0" class="app-price__symbol">
        <span>{{ item.value }}</span>
        <span>
          {{
            symbolObject[item.symbol] ? symbolObject[item.symbol] : item.symbol
          }}
        </span>
      </div>

      <div v-else class="app-price__currency">
        <span>{{ item.value }}</span>
        <span>
          {{ item.symbol }}
        </span>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.app-price {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
}

.app-price__symbol {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 1px;
  overflow: hidden;
  max-width: 120px;

  span {
    color: vars.$text-tertiary;

    font-size: 12px;
  }

  span:first-child {
    font-size: 12px;

    display: inline-block;
    max-width: 100px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.app-price__currency {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 1px;
  overflow: hidden;
  max-width: 120px;

  span:first-child {
    display: inline-block;
    max-width: 100px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
