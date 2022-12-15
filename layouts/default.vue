<template>
  <div class="layout">
    <HeaderBlock />
    <div class="content">
      <Nuxt />
    </div>
    <footer>
      <FooterBlock />
    </footer>
  </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock'
import FooterBlock from '@/components/FooterBlock'
export default {
  components: {
    HeaderBlock,
    FooterBlock,
  },
}
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
}
</style>