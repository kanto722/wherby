<template>
  <component
    :is="tag"
    class="button"
    :class="[colorVariants]"
    :disabled="disableButton"
    :type="type"
    :href="to"
    v-on="$listeners"
  >
    <span class="button__prepend"><slot name="prepend" /></span>
    <span class="button__body">
      <slot />
    </span>
    <span class="button__append"><slot name="append" /></span>
  </component>
</template>

<script>
export default {
  name: 'ButtonStandard',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    variantType: {
      type: String,
      default: 'normal',
    },
  },
  data() {
    return {
      disableButton: this.disabled,
    }
  },
  computed: {
    colorVariants() {
      switch (this.variantType) {
        case 'no-background':
          return 'button_no-background'
        default:
          return 'button_normal'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  padding: 8px 13px;
  border-radius: 10px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;

  border: none;
  cursor: pointer;

  transition: color 0.25s ease-in-out, background 0.25s ease-in-out;

  display: flex;
  align-items: center;
  gap: 5px;

  // .button__body
  &__body {
  }

  // .button_active
  &__prepend,
  &__append {
    display: flex;
  }

  &_normal {
    background: #f7f8fc;
    color: #000000;

    &.button_active {
      background: #4361ee;
      color: #ffffff;
    }
  }
  &_no-background {
    background: none;
    color: #ffffff;
    border: 1px solid #ffffff;

    &.button_active {
      background: #ffffff;
      color: #4361ee;
    }
  }
}
</style>