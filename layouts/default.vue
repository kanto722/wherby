<template>
  <div>
    <HeaderBlock />
    <div class="container">
        <Nuxt />
    </div>
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock'
import FooterBlock from '@/components/FooterBlock'
export default {
    components: {
        HeaderBlock,
        FooterBlock,
    }
}
</script>
