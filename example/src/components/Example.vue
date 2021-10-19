<template>
  <div class="tw-p-2">
    <div class="tw-text-blue-500 tw-font-medium">{{ title }}</div>
    <div class="tw-py-2">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Example',
  props: {
    title: { type: String, default: null }
  }
}
</script>

<style>

</style>
