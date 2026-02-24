<script setup>
import {onMounted, ref} from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';
import Features from '../components/Features.vue';
import Portfolio from "../components/Portfolio.vue";
import Team from "../components/Team.vue";
import Contact from '../components/Contact.vue'

const startAnim = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
const particles = ref([])

function scrollToBottom () {
  window.scrollTo({top: 1450, behavior: 'smooth'})
}

onMounted(() => {
  setTimeout(() => {
    startAnim.value = true
  }, 100)

  // Mouse tracking for parallax effect
  window.addEventListener('mousemove', (e) => {
    mouseX.value = (e.clientX / window.innerWidth - 0.5) * 30
    mouseY.value = (e.clientY / window.innerHeight - 0.5) * 30
  })

  // Generate particles
  for (let i = 0; i < 30; i++) {
    particles.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    })
  }
})

// Typing effect text
const typingText = ref('')
const fullText = 'Bugun Yarating'
let currentIndex = 0

const typeWriter = () => {
  if (currentIndex < fullText.length) {
    typingText.value += fullText.charAt(currentIndex)
    currentIndex++
    setTimeout(typeWriter, 100)
  }
}

onMounted(() => {
  setTimeout(() => {
    typeWriter()
  }, 500)
})
</script>

<template>
  <div class="relative min-h-screen bg-[#0B0F19]">
    <!-- Premium Animated Glass Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Animated Gradient Mesh -->
      <div class="absolute inset-0">
        <!-- Main Gradient Orbs with Parallax -->
        <div
            :style="{ transform: `translate(${mouseX * 0.5}px, ${mouseY * 0.5}px)` }"
            class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-[100px] animate-blob transition-transform duration-300"
        ></div>

        <div
            :style="{ transform: `translate(${-mouseX * 0.3}px, ${-mouseY * 0.3}px)` }"
            class="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-pink-500/15 rounded-full blur-[120px] animate-blob animation-delay-2000 transition-transform duration-300"
        ></div>

        <div
            :style="{ transform: `translate(${mouseX * 0.4}px, ${-mouseY * 0.4}px)` }"
            class="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-br from-indigo-600/15 to-cyan-500/15 rounded-full blur-[110px] animate-blob animation-delay-4000 transition-transform duration-300"
        ></div>

        <!-- Secondary Gradient Layers -->
        <div
            class="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-violet-500/10 to-indigo-600/10 rounded-full blur-[90px] animate-blob-reverse"
        ></div>

        <div
            class="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-gradient-to-tl from-purple-600/10 to-blue-500/10 rounded-full blur-[95px] animate-blob-reverse animation-delay-3000"
        ></div>
      </div>

      <!-- Floating Glass Panels -->
      <div class="absolute inset-0">
        <div
            :style="{ transform: `translate(${mouseX * 0.2}px, ${mouseY * 0.2}px)` }"
            class="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-white/[0.02] to-indigo-500/[0.03] backdrop-blur-3xl rounded-3xl border border-white/[0.05] rotate-12 animate-float-slow transition-transform duration-500"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-transparent rounded-3xl"></div>
        </div>

        <div
            :style="{ transform: `translate(${-mouseX * 0.15}px, ${-mouseY * 0.15}px)` }"
            class="absolute bottom-32 left-1/4 w-80 h-80 bg-gradient-to-tl from-white/[0.02] to-purple-500/[0.03] backdrop-blur-3xl rounded-3xl border border-white/[0.05] -rotate-12 animate-float-slower transition-transform duration-500"
        >
          <div class="absolute inset-0 bg-gradient-to-tl from-purple-400/5 to-transparent rounded-3xl"></div>
        </div>

        <div
            class="absolute top-1/3 left-1/2 w-64 h-64 bg-white/[0.01] backdrop-blur-2xl rounded-2xl border border-white/[0.03] rotate-45 animate-float-medium"
        ></div>

        <div
            class="absolute bottom-1/3 right-1/3 w-48 h-48 bg-white/[0.01] backdrop-blur-2xl rounded-2xl border border-white/[0.03] -rotate-6 animate-float-medium animation-delay-2000"
        ></div>
      </div>

      <!-- Animated Particles -->
      <div class="absolute inset-0">
        <div
            v-for="(particle, index) in particles"
            :key="index"
            :style="{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`
          }"
            class="absolute rounded-full bg-gradient-to-br from-indigo-400/40 to-purple-400/40 animate-particle blur-[1px]"
        ></div>
      </div>

      <!-- Grid Pattern Overlay -->
      <div
          class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)] opacity-40"></div>

      <!-- Noise Texture -->
      <div
          class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>

      <!-- Glass Overlay Effect -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-[#0B0F19]/60"></div>

      <!-- Radial Gradient Vignette -->
      <div
          class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0B0F19_100%)] opacity-40"></div>

      <!-- Animated Light Rays -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div
            class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent animate-light-ray"></div>
        <div
            class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-light-ray animation-delay-1000"></div>
        <div
            class="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent animate-light-ray animation-delay-2000"></div>
      </div>
    </div>

    <div class="relative z-10">
      <Header navbar1="Bosh Sahifa" navbar2="Xizmatlar" navbar3="Portfolio" navbar4="Jamoa" navbar5="Contact"/>

      <main class="relative w-full min-h-screen pt-32 pb-20 px-6">
        <div class="relative max-w-7xl mx-auto">
          <div
              :class="[
              'text-center space-y-8 transition-all duration-1000',
              startAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
          >
            <!-- Badge -->
            <div
                :style="{ transitionDelay: '200ms' }"
                :class="[
                'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/40 backdrop-blur-xl border border-indigo-700/30 text-indigo-300 text-sm font-medium shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-1000',
                startAnim ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              ]"
            >
              <span class="relative flex h-3 w-3">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              JordAn - Innovatsiya Markazida
            </div>

            <!-- Main Heading -->
            <h1
                :style="{ transitionDelay: '400ms' }"
                :class="[
                'text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight transition-all duration-1000',
                startAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              ]"
            >
              <span
                  class="block bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(148,163,184,0.2)]">
                Kelajak Dizayni
              </span>
              <span
                  class="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {{ typingText }}<span class="animate-pulse">|</span>
              </span>
            </h1>

            <!-- Description -->
            <p
                :style="{ transitionDelay: '600ms' }"
                :class="[
                'text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed transition-all duration-1000',
                startAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              ]"
            >
              Zamonaviy texnologiyalar va kreativ yondashuvlar bilan biznesingizni yangi bosqichga olib chiqing.
              Raqamli kelajakni bugun yarating.
            </p>

            <!-- CTA Buttons -->
            <div
                :style="{ transitionDelay: '800ms' }"
                :class="[
                'flex flex-wrap items-center justify-center gap-4 transition-all duration-1000',
                startAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              ]"
            >
              <button
                  class="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-105">
                <span class="relative z-10 flex items-center gap-2">
                  Boshlash
                  <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                       stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
                <div
                    class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button
                  class="group relative px-8 py-4 bg-slate-800/30 backdrop-blur-xl text-white font-semibold rounded-full border border-slate-700/50 overflow-hidden transition-all duration-300 hover:bg-slate-800/50 hover:border-indigo-600/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                <span class="relative z-10 flex items-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                  Demo Ko'rish
                </span>
              </button>
            </div>

            <!-- Stats -->
            <div
                :style="{ transitionDelay: '1000ms' }"
                :class="[
                'grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 transition-all duration-1000',
                startAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              ]"
            >
              <div
                  v-for="(stat, index) in [
                  { number: '500+', label: 'Loyihalar' },
                  { number: '50+', label: 'Mijozlar' },
                  { number: '99%', label: 'Mamnunlik' },
                  { number: '24/7', label: 'Qo\'llab-quvvatlash' }
                ]"
                  :key="index"
                  class="group p-6 rounded-2xl bg-slate-800/20 backdrop-blur-[1px] border border-slate-700/30 hover:bg-slate-800/40 hover:border-indigo-600/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:scale-105"
              >
                <div
                    class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {{ stat.number }}
                </div>
                <div class="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                  {{ stat.label }}
                </div>
              </div>
            </div>

            <!-- Interactive Showcase Card -->
            <div
                :style="{ transitionDelay: '1200ms' }"
                :class="['relative mt-20 transition-all duration-1000',startAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']">
              <div
                  class="relative rounded-3xl overflow-hidden border border-slate-800/50 bg-gradient-to-br from-slate-900/40 to-indigo-950/30 backdrop-blur shadow-[0_0_50px_rgba(99,102,241,0.2)] group hover:shadow-[0_0_80px_rgba(139,92,246,0.4)] transition-all duration-500">
                <div
                    class="absolute inset-0 bg-gradient-to-br from-slate-700/5 via-transparent to-transparent opacity-50"></div>

                <div class="relative h-[600px] flex items-center justify-center p-12">
                  <div class="absolute inset-0 overflow-hidden">
                    <div
                        v-for="i in 6"
                        :key="i"
                        :style="{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`
                      }"
                        class="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-float opacity-40"
                    ></div>
                  </div>

                  <div class="relative">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                    <div
                        class="relative w-32 h-32 bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl flex items-center justify-center shadow-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 border border-indigo-600/20">
                      <svg class="w-16 h-16 text-indigo-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                  </div>

                  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
                    <div
                        class="text-slate-800 font-bold text-6xl opacity-10 tracking-widest group-hover:opacity-20 transition-opacity duration-500">
                      INNOVATION
                    </div>
                  </div>
                </div>

                <div
                    class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
              </div>

              <div
                  @click="scrollToBottom()"
                  class="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span class="text-sm text-slate-600">Scroll</span>
                <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="features">
        <Features />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="team">
        <Team />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer first="Biz haqimizda" second="Karyera" third="Blog" fourth="Hamkorlar" fifth="Hujjatlar" sixth="Yordam"
              seventh="Api Reference" eighth="Status"/>
    </div>
  </div>
</template>


<style scoped>
/* Background Animations */
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(30px, 10px) scale(1.05);
  }
}

@keyframes blob-reverse {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(-30px, 20px) scale(0.95);
  }
  50% {
    transform: translate(20px, -20px) scale(1.1);
  }
  75% {
    transform: translate(-10px, -30px) scale(0.9);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(12deg);
  }
  50% {
    transform: translateY(-30px) rotate(15deg);
  }
}

@keyframes float-slower {
  0%, 100% {
    transform: translateY(0px) rotate(-12deg);
  }
  50% {
    transform: translateY(-40px) rotate(-15deg);
  }
}

@keyframes float-medium {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-20px) translateX(15px);
  }
  66% {
    transform: translateY(-10px) translateX(-15px);
  }
}

@keyframes particle {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  50% {
    transform: translateY(-100px) translateX(50px);
  }
}

@keyframes light-ray {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.4;
  }
  25% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-40px) translateX(-10px);
    opacity: 0.8;
  }
  75% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0.6;
  }
}

.animate-blob {
  animation: blob 20s ease-in-out infinite;
}

.animate-blob-reverse {
  animation: blob-reverse 25s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 20s ease-in-out infinite;
}

.animate-float-slower {
  animation: float-slower 25s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 15s ease-in-out infinite;
}

.animate-particle {
  animation: particle 15s ease-in-out infinite;
}

.animate-light-ray {
  animation: light-ray 8s linear infinite;
}

.animate-gradient {
  animation: gradient 8s ease infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-3000 {
  animation-delay: 3s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>