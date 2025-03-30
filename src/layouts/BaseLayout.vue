<template>
  <div class="layout">
    <header>
      <h1>Base API test</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <small>Vue Project © 2025</small>
    </footer>
  </div>
</template>



<style scoped>

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header, footer {
  background: #35495e;
  color: white;
  padding: 1rem;
  text-align: center;
}

main {
  flex: 1;
  padding: 2rem;
  animation: fadeSlide 0.6s ease-in-out;
}

</style>