<script>
  export default {
    props: ['title'],
    render (h) {
      return h('text', {}, ['title'])
    }
  }
</script>
