<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="copyright">
          ©{{ currentYear }} {{ copyright }}
        </p>
        <div class="social-links">
          <a v-for="link in socialLinks" 
             :key="link.url"
             :href="link.url" 
             target="_blank" 
             class="social-link">
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())

// 可配置项
const copyright = ref('我的简历。所有权利保留')
const socialLinks = ref([
  {
    icon: 'fab fa-github',
    url: 'https://github.com/yanbo0039'
  },
  {
    icon: 'fas fa-code-branch',
    url: 'https://my.oschina.net/u/3222198'
  }
])
</script>

<style scoped>
.footer {
  background: #333;
  color: #fff;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  color: #fff;
  font-size: 1.2rem;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.social-link:hover {
  opacity: 1;
  transform: translateY(-2px);
  color: #007bff;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style> 