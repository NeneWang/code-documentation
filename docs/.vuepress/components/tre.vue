// table row escape

<template>
  <tr>
    <td>
      {{ title }} <br />
    </td>
    <td  >
      <span class="subtitle">{{ sub }}</span>
      <slot class="code"></slot>
      
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
    },
    sub: {
      required: false,
    },
  },

};
</script>

<style lang="stylus">
.code{

color:white;
font-size: .85em;
}

.subtitle{
  font-size:.7em;
}
</style>
