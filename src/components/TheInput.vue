<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  isPassword: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  error: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  errorMessage: {
    type: String as PropType<string>,
    default: '',
  },
})

const modelValue = defineModel()
const isErrorVisible = ref(false)
</script>

<template>
  <div>
    <input
      id="input"
      v-model="modelValue"
      :type="isPassword ? 'password' : 'text'"
      v-bind="$attrs"
      m="y-2"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @focus="isErrorVisible = true"
    >
    <div v-if="error && isErrorVisible" class="text-red-800">
      <span text-sm op75>{{ errorMessage }}</span>
    </div>
  </div>
</template>
