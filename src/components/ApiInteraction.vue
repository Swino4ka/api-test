<template>
  <div class="api-box" v-if="data">
    <h2 class="fade-slide">Response from API:</h2>
    <pre>{{ data }}</pre>
  </div>
  <button class="fetch-btn" @click="fetchData">Fetch API</button>
</template>

<script>
import ApiService from '@/services/ApiService';

export default {
  data() {
    return {
      data: null
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await ApiService.get('/endpoint');
        this.data = res.data;
      } catch (err) {
        console.error('API Error:', err);
      }
    }
  }
};
</script>

<style scoped>
.api-box {
  margin: 1rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.fetch-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.fetch-btn:hover {
  background: #2c9e6f;
}

.fade-slide {
  animation: fadeSlide 0.8s ease-in-out forwards;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
