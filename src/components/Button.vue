<template>
	<component
    :is="tag"
    v-bind="$attrs"
    :disabled="as === 'button' ? disabled : undefined"
    :class="[baseClasses, variantClasses, sizeClasses]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'button',
    validator: (v) => ['button', 'a', 'RouterLink'].includes(v) || typeof v === 'object',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary'].includes(v),
  },
  size: {
    type: String,
    default: 'medium',
    validator: (v) => ['medium', 'large' , 'xl'].includes(v),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const tag = computed(() => {
  if (props.as === 'RouterLink') return RouterLink
  return props.as
})

const baseClasses = 'leading-[22px] font-semibold rounded-[90px] transition-all inline-flex items-center gap-2.5 cursor-pointer'

const variantClasses = computed(() => ({
  primary:
    'bg-black text-white shadow-sm-dark disabled:opacity-30 disabled:poointer-events-none disabled:cursor-default',
  secondary:
    'bg-white text-black border border-stroke-100 shadow-sm',
})[props.variant])

const sizeClasses = computed(() => ({
  // small: 'px-3 py-2 text-sm',
  medium: 'p-3 text-base',
  large: 'p-[15px] text-lg',
  xl: 'p-5 text-xl'
})[props.size])
</script>

<script>
export default { inheritAttrs: false }
</script>