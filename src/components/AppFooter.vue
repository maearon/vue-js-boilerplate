<template>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container text-center">
      <small>
        The
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">NextJS Tutorial</a>
        by
        <a href="https://github.com/maearon" target="_blank" rel="noopener noreferrer">maearon</a>
      </small>
      <nav class="mt-3">
        <ul class="list-inline">
          <li class="list-inline-item"><router-link to="/about">About</router-link></li>
          <li class="list-inline-item"><router-link to="/contact">Contact</router-link></li>
          <li class="list-inline-item">
            <a href="https://nextjs.org/blog" target="_blank" rel="noopener noreferrer">News</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No setup logic needed for this component
</script>

<style scoped>
/* Add your scoped styles here */
</style>
