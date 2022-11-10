<template>
  <div>
    <HeaderBlock />
    <PageStart />
    <FooterBlock />
  </div>
</template>

<script>
import PageStart from '@/block/PageStart';
export default {
  name: 'IndexPage',
  components: {
    PageStart,
  }
}
</script>
