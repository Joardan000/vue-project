<template>
  <div class="login-container">
    <!-- Dynamic Animated Background -->
    <div class="background-effects">
      <!-- Floating Orbs with Advanced Animations -->
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="orb orb-4"></div>

      <!-- Animated Mesh Gradient -->
      <div class="mesh-gradient"></div>

      <!-- Particle System -->
      <div class="particles">
        <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>

      <!-- Grid Pattern with Perspective -->
      <div class="grid-pattern"></div>

      <!-- Noise Texture -->
      <div class="noise-texture"></div>
    </div>

    <!-- Main Login Card with Advanced Glass Effect -->
    <div class="login-card-wrapper" ref="cardWrapper">
      <!-- Glow Effect -->
      <div class="card-glow"></div>

      <!-- Glass Card -->
      <div class="glass-card" ref="glassCard">
        <!-- Top Shine Effect -->
        <div class="card-shine"></div>

        <!-- Decorative Elements -->
        <div class="deco-circle deco-circle-1"></div>
        <div class="deco-circle deco-circle-2"></div>
        <div class="deco-line deco-line-1"></div>
        <div class="deco-line deco-line-2"></div>

        <!-- Content -->
        <div class="card-content">
          <!-- Logo Section with 3D Effect -->
          <div class="logo-section">
            <div class="logo-container">
              <div class="logo-glow"></div>
              <div class="logo-box">
                <div class="logo-inner">
                  <span class="logo-text">X</span>
                </div>
              </div>
            </div>
            <h1 class="brand-name">
              <span class="brand-letter">U</span>
              <span class="brand-letter">-</span>
              <span class="brand-letter">C</span>
              <span class="brand-letter">O</span>
              <span class="brand-letter">D</span>
              <span class="brand-letter">E</span>
            </h1>
          </div>

          <!-- Welcome Text -->
          <div class="welcome-section">
            <h2 class="welcome-title">Xush kelibsiz!</h2>
            <p class="welcome-subtitle">Davom etish uchun hisobingizga kiring</p>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="login-form">
            <!-- Username Field -->
            <div class="input-group">
              <label class="input-label">Username</label>
              <div class="input-wrapper">
                <div class="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <input
                    v-model="number"
                    type="text"
                    placeholder="Username kiriting"
                    class="input-field"
                    @focus="onInputFocus"
                    @blur="onInputBlur"
                />
                <div class="input-border"></div>
              </div>
            </div>

            <!-- Password Field -->
            <div class="input-group">
              <label class="input-label">Parol</label>
              <div class="input-wrapper">
                <div class="input-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <input
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Parol kiriting"
                    class="input-field"
                    @focus="onInputFocus"
                    @blur="onInputBlur"
                />
                <button
                    type="button"
                    class="password-toggle"
                    @click="showPassword = !showPassword"
                >
                  <svg v-if="!showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                  </svg>
                </button>
                <div class="input-border"></div>
              </div>
            </div>

            <!-- Remember Me -->
            <div class="remember-section">
              <label class="checkbox-container">
                <input type="checkbox" class="checkbox-input" />
                <span class="checkbox-custom"></span>
                <span class="checkbox-label">Eslab qolish</span>
              </label>
            </div>

            <!-- Login Button -->
            <button type="submit" class="login-button">
              <span class="button-content">
                <span class="button-text">Kirish</span>
                <svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
              <div class="button-shine"></div>
              <div class="button-glow"></div>
            </button>
          </form>

          <!-- Divider -->
          <div class="divider">
            <div class="divider-line"></div>
            <span class="divider-text">yoki</span>
            <div class="divider-line"></div>
          </div>

          <!-- Social Login -->
          <div class="social-login">
            <button class="social-button" @mouseenter="onSocialHover" @mouseleave="onSocialLeave">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <div class="social-glow"></div>
            </button>
            <button class="social-button" @mouseenter="onSocialHover" @mouseleave="onSocialLeave">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <div class="social-glow"></div>
            </button>
            <button class="social-button" @mouseenter="onSocialHover" @mouseleave="onSocialLeave">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
              </svg>
              <div class="social-glow"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { auth } from "../stores/auth.js"

const userStore = auth()
const password = ref("")
const number = ref("")
const showPassword = ref(false)
const cardWrapper = ref(null)
const glassCard = ref(null)

// Mouse position tracking for 3D effect
let mouseX = 0
let mouseY = 0

const getParticleStyle = (index) => {
  const randomX = Math.random() * 100
  const randomY = Math.random() * 100
  const randomDelay = Math.random() * 5
  const randomDuration = 10 + Math.random() * 20

  return {
    left: `${randomX}%`,
    top: `${randomY}%`,
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`
  }
}

const onInputFocus = (e) => {
  e.target.parentElement.classList.add('focused')
}

const onInputBlur = (e) => {
  e.target.parentElement.classList.remove('focused')
}

const onSocialHover = (e) => {
  e.currentTarget.classList.add('hovered')
}

const onSocialLeave = (e) => {
  e.currentTarget.classList.remove('hovered')
}

const handleMouseMove = (e) => {
  if (!cardWrapper.value) return

  const rect = cardWrapper.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  mouseX = (e.clientX - centerX) / (rect.width / 2)
  mouseY = (e.clientY - centerY) / (rect.height / 2)

  if (glassCard.value) {
    const rotateX = -mouseY * 5
    const rotateY = mouseX * 5

    glassCard.value.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(20px)
    `
  }
}

const handleMouseLeave = () => {
  if (glassCard.value) {
    glassCard.value.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0px)
    `
  }
}

function handleLogin() {
  userStore.login({
    phoneNumber: number.value,
    password: password.value,
  })
}

onMounted(() => {
  if (cardWrapper.value) {
    cardWrapper.value.addEventListener('mousemove', handleMouseMove)
    cardWrapper.value.addEventListener('mouseleave', handleMouseLeave)
  }
})

onUnmounted(() => {
  if (cardWrapper.value) {
    cardWrapper.value.removeEventListener('mousemove', handleMouseMove)
    cardWrapper.value.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: #0a0e1a;
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
}

/* ========== ADVANCED BACKGROUND EFFECTS ========== */
.background-effects {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

/* Floating Orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%);
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0) 70%);
  bottom: -50px;
  right: -50px;
  animation-delay: 5s;
}

.orb-3 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0) 70%);
  top: 50%;
  right: 10%;
  animation-delay: 10s;
}

.orb-4 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%);
  bottom: 20%;
  left: 15%;
  animation-delay: 15s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-50px, 50px) scale(0.9);
  }
}

/* Mesh Gradient */
.mesh-gradient {
  position: absolute;
  inset: 0;
  background:
      radial-gradient(at 10% 20%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
      radial-gradient(at 90% 80%, rgba(168, 85, 247, 0.15) 0px, transparent 50%),
      radial-gradient(at 50% 50%, rgba(236, 72, 153, 0.1) 0px, transparent 50%);
  animation: meshMove 30s ease-in-out infinite;
}

@keyframes meshMove {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

/* Particles */
.particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: particleFloat linear infinite;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
}

@keyframes particleFloat {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(50px);
    opacity: 0;
  }
}

/* Grid Pattern */
.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
      linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.4;
  perspective: 1000px;
  transform: rotateX(60deg) scale(1.5);
}

/* Noise Texture */
.noise-texture {
  position: absolute;
  inset: 0;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=');
  opacity: 0.15;
}

/* ========== PREMIUM GLASS CARD ========== */
.login-card-wrapper {
  position: relative;
  width: 100%;
  max-width: 480px;
  z-index: 10;
  transition: transform 0.1s ease-out;
  animation: cardEntrance 1s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Card Glow */
.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg,
  rgba(99, 102, 241, 0.4),
  rgba(168, 85, 247, 0.4),
  rgba(236, 72, 153, 0.4)
  );
  border-radius: 32px;
  filter: blur(30px);
  opacity: 0;
  animation: glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.98);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.02);
  }
}

/* Glass Card */
.glass-card {
  position: relative;
  background: rgba(15, 20, 35, 0.6);
  backdrop-filter: blur(40px) saturate(180%);
  -webkit-backdrop-filter: blur(40px) saturate(180%);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 1px rgba(255, 255, 255, 0.05),
      inset 0 -1px 1px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Card Shine Effect */
.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.03),
      transparent
  );
  animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

/* Decorative Elements */
.deco-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
}

.deco-circle-1 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
  top: -50px;
  right: -50px;
  animation: float 15s ease-in-out infinite;
}

.deco-circle-2 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%);
  bottom: -30px;
  left: -30px;
  animation: float 20s ease-in-out infinite reverse;
}

.deco-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(
      90deg,
      transparent,
      rgba(99, 102, 241, 0.3),
      transparent
  );
  opacity: 0.3;
}

.deco-line-1 {
  width: 200px;
  top: 100px;
  left: 0;
  animation: lineMove 5s ease-in-out infinite;
}

.deco-line-2 {
  width: 150px;
  bottom: 150px;
  right: 0;
  animation: lineMove 7s ease-in-out infinite reverse;
}

@keyframes lineMove {
  0%, 100% { transform: translateX(0); opacity: 0.3; }
  50% { transform: translateX(50px); opacity: 0.6; }
}

/* ========== CARD CONTENT ========== */
.card-content {
  position: relative;
  padding: 3rem;
  z-index: 1;
}

/* Logo Section */
.logo-section {
  text-align: center;
  margin-bottom: 2.5rem;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.logo-container {
  position: relative;
  display: inline-flex;
  margin-bottom: 1.5rem;
}

.logo-glow {
  position: absolute;
  inset: -8px;
  background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
  border-radius: 20px;
  filter: blur(20px);
  opacity: 0.5;
  animation: logoGlowPulse 3s ease-in-out infinite;
}

@keyframes logoGlowPulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

.logo-box {
  position: relative;
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  animation: logoFloat 6s ease-in-out infinite;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0) rotateZ(0deg); }
  50% { transform: translateY(-10px) rotateZ(5deg); }
}

.logo-inner {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
      0 10px 30px rgba(99, 102, 241, 0.3),
      inset 0 1px 1px rgba(255, 255, 255, 0.2);
}

.logo-text {
  font-size: 2rem;
  font-weight: 800;
  color: white;
  font-family: 'Space Grotesk', monospace;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* Brand Name */
.brand-name {
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Space Grotesk', monospace;
  letter-spacing: 0.1em;
  display: flex;
  gap: 0.1em;
  justify-content: center;
}

.brand-letter {
  display: inline-block;
  background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: letterFloat 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}

.brand-letter:nth-child(1) { --i: 0; }
.brand-letter:nth-child(2) { --i: 1; }
.brand-letter:nth-child(3) { --i: 2; }
.brand-letter:nth-child(4) { --i: 3; }
.brand-letter:nth-child(5) { --i: 4; }
.brand-letter:nth-child(6) { --i: 5; }

@keyframes letterFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Welcome Section */
.welcome-section {
  text-align: center;
  margin-bottom: 2.5rem;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
}

.welcome-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.welcome-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== FORM ELEMENTS ========== */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
}

/* Input Group */
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.02em;
}

.input-wrapper {
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.input-wrapper.focused {
  transform: scale(1.01);
}

.input-wrapper.focused .input-icon svg {
  color: #6366f1;
  transform: scale(1.1);
}

.input-wrapper.focused .input-border {
  opacity: 1;
  transform: scaleX(1);
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  z-index: 2;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.input-icon svg {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.input-field {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  color: white;
  font-size: 0.95rem;
  font-weight: 400;
  outline: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.input-field:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.input-field:focus {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow:
      0 0 0 4px rgba(99, 102, 241, 0.1),
      inset 0 1px 3px rgba(0, 0, 0, 0.2);
}

.input-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
  border-radius: 0 0 16px 16px;
  opacity: 0;
  transform: scaleX(0);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Password Toggle */
.password-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2;
}

.password-toggle svg {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.password-toggle:hover {
  background: rgba(255, 255, 255, 0.05);
}

.password-toggle:hover svg {
  color: white;
}

/* Remember Section */
.remember-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  position: relative;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  flex-shrink: 0;
}

.checkbox-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  border-radius: 3px;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.checkbox-input:checked + .checkbox-custom {
  border-color: #6366f1;
  background: rgba(99, 102, 241, 0.1);
}

.checkbox-input:checked + .checkbox-custom::after {
  transform: translate(-50%, -50%) scale(1);
}

.checkbox-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;
  user-select: none;
}

.checkbox-container:hover .checkbox-label {
  color: white;
}

.checkbox-container:hover .checkbox-custom {
  border-color: rgba(255, 255, 255, 0.4);
  transform: scale(1.05);
}

/* ========== LOGIN BUTTON ========== */
.login-button {
  position: relative;
  width: 100%;
  padding: 1.125rem 2rem;
  background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
  border: none;
  border-radius: 16px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow:
      0 10px 30px rgba(99, 102, 241, 0.3),
      inset 0 1px 1px rgba(255, 255, 255, 0.2);
}

.button-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.button-text {
  font-family: 'Outfit', sans-serif;
  letter-spacing: 0.02em;
}

.button-icon {
  width: 20px;
  height: 20px;
  stroke-width: 2.5;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
  );
  transition: left 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.button-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
  border-radius: 16px;
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.3s ease;
}

.login-button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow:
      0 20px 40px rgba(99, 102, 241, 0.5),
      inset 0 1px 1px rgba(255, 255, 255, 0.2);
}

.login-button:hover .button-shine {
  left: 100%;
}

.login-button:hover .button-icon {
  transform: translateX(4px);
}

.login-button:hover .button-glow {
  opacity: 0.8;
}

.login-button:active {
  transform: translateY(0) scale(0.98);
}

/* ========== DIVIDER ========== */
.divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0 1.5rem;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
  );
}

.divider-text {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
}

/* ========== SOCIAL LOGIN ========== */
.social-login {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s both;
}

.social-button {
  position: relative;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.social-button svg {
  width: 20px;
  height: 20px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 2;
}

.social-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-button:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.social-button:hover svg {
  color: white;
  transform: scale(1.1) rotate(5deg);
}

.social-button.hovered .social-glow {
  opacity: 1;
}

.social-button:active {
  transform: translateY(0) scale(0.95);
}

/* ========== RESPONSIVE ========== */
@media (max-width: 640px) {
  .card-content {
    padding: 2rem 1.5rem;
  }

  .welcome-title {
    font-size: 1.5rem;
  }

  .brand-name {
    font-size: 1.75rem;
  }

  .logo-box {
    width: 60px;
    height: 60px;
  }

  .logo-inner {
    width: 50px;
    height: 50px;
  }

  .logo-text {
    font-size: 1.5rem;
  }
}

/* ========== PERFORMANCE OPTIMIZATIONS ========== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Hardware Acceleration */
.glass-card,
.login-button,
.input-wrapper,
.social-button {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>