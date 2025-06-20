<template>
  <footer class="text-center mt-5">
    <p class="fs-6">
      &copy; 2025 - desenvolvido por
      <a
        class="text-decoration-none text-reset"
        target="_blank"
        href="https://github.com/mauricioluanss"
      >
        mauricioluanss
      </a>
      <IconGithub />
    </p>
  </footer>
</template>

<script>
import IconGithub from './icons/IconGithub.vue'

export default {
  components: {
    IconGithub,
  },
}
</script>
