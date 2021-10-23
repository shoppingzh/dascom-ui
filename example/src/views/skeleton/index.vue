<template>
  <div>
    <ds-skeleton loading animated />
    <ds-skeleton avatar animated />
    <ds-skeleton animated :repeat="3">
      <template #template>
        <ds-skeleton-item type="image" />
        <ds-skeleton-item type="paragraph" :options="{ rows: 10 }" />
      </template>
    </ds-skeleton>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>