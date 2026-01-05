<template>
  <footer class="relative bg-[#0B0F19] text-white pt-24 pb-12 overflow-hidden border-t border-slate-800/50">

    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute -top-40 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute -bottom-40 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse"
           style="animation-delay: 1s"></div>

      <!-- Grid Pattern -->
      <div
          class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <!-- Noise Texture -->
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

        <!-- Brand Section -->
        <div class="space-y-6 reveal-on-load flex flex-col max-md:items-center max-md:text-center">
          <!-- Logo with Glass Effect -->
          <div class="inline-flex items-center gap-3 group">
            <div class="relative">
              <div
                  class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div
                  class="relative w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                X
              </div>
            </div>
            <span
                class="text-3xl font-bold bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              X-CODE
            </span>
          </div>

          <p class="text-slate-400 leading-relaxed text-sm max-w-xs">
            Biznesingiz uchun kelajak texnologiyalarini yaratamiz. Sifat, tezlik va kreativ yechimlar.
          </p>

          <!-- Social Links with Premium Design -->
          <div class="flex gap-3 max-md:justify-center">
            <a
                href="#"
                v-for="(social, index) in socialLinks"
                :key="index"
                class="group relative w-11 h-11 rounded-xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 flex items-center justify-center hover:bg-slate-800/50 hover:border-indigo-500/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
            >
              <span class="text-slate-400 group-hover:text-indigo-400 transition-colors text-xs font-bold">
                {{ social.icon }}
              </span>
              <div
                  class="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
            </a>
          </div>
        </div>

        <!-- Footer Links with Glass Cards -->
        <div class="grid grid-cols-2 md:grid-cols-2 gap-8 col-span-1 md:col-span-2">
          <div
              v-for="(group, idx) in footerLinks"
              :key="idx"
              class="reveal-on-load"
              :style="{ transitionDelay: `${(idx + 1) * 150}ms` }"
          >
            <h3 class="text-lg font-semibold mb-6 text-white flex items-center gap-2 max-md:justify-center">
              <span class="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
              {{ group.title }}
            </h3>
            <ul class="space-y-3">
              <li v-for="link in group.items" :key="link.title">
                <a
                    href="#"
                    class="group relative inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-all duration-300 py-1.5 px-3 rounded-lg hover:bg-slate-800/30 max-md:justify-center"
                >
                  <span
                      class="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300"></span>
                  <span class="group-hover:translate-x-1 transition-transform duration-300">
                    {{ link.title }}
                  </span>
                  <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-1" fill="none"
                       stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Section with Premium Glass Design -->
        <div class="reveal-on-load delay-700">
          <h3 class="text-lg font-semibold mb-6 text-white flex items-center gap-2 max-md:justify-center">
            <span class="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
            Yangiliklar
          </h3>

          <!-- Premium Input with Glass Effect -->
          <div class="relative group max-w-sm max-md:mx-auto mb-4">
            <div
                class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div
                class="relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden group-hover:border-indigo-500/50 transition-all duration-300">
              <input
                  type="email"
                  placeholder="Email manzilingiz"
                  class="w-full bg-transparent px-4 py-3.5 pr-14 text-sm focus:outline-none text-white placeholder-slate-500"
              >
              <button
                  class="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 hover:scale-105 group/btn">
                <svg xmlns="http://www.w3.org/2000/svg"
                     class="h-4 w-4 text-white transition-transform duration-300 group-hover/btn:translate-x-0.5"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>
          </div>

          <p class="text-xs text-slate-500 max-md:text-center">
            Haftada bir marta foydali maqolalar yuboramiz.
            <span class="text-indigo-400">Spam yo'q</span>.
          </p>

          <!-- Trust Badges -->
          <div class="mt-6 flex gap-2 max-md:justify-center flex-wrap">
            <div
                v-for="badge in ['🔒 Xavfsiz', '✓ Tasdiqlangan']"
                :key="badge"
                class="px-3 py-1.5 bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 rounded-lg text-xs text-slate-400"
            >
              {{ badge }}
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Bar with Glass Effect -->
      <div class="relative border-t border-slate-800/50 pt-8">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"></div>

        <div class="relative flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div class="flex items-center gap-2 max-md:text-center">
            <span>&copy; 2026 X-Code Inc.</span>
            <span class="hidden md:inline">•</span>
            <span>Barcha huquqlar himoyalangan.</span>
          </div>

          <div class="flex items-center gap-6 max-md:justify-center">
            <a href="#" class="hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1 group">
              <span>Maxfiylik</span>
              <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none"
                   stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
            <span class="text-slate-700">•</span>
            <a href="#" class="hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1 group">
              <span>Shartlar</span>
              <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none"
                   stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
            <span class="text-slate-700">•</span>
            <a href="#" class="hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1 group">
              <span>Cookies</span>
              <svg class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none"
                   stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Back to Top Button -->
        <button
            @click="scrollToTop"
            class="absolute -top-6 right-6 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
        >
          <svg class="w-5 h-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5" fill="none"
               stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  first: String,
  second: String,
  third: String,
  fourth: String,
  fifth: String,
  sixth: String,
  seventh: String,
  eighth: String,
})

const socialLinks = [
  {icon: 'TW', name: 'Twitter'},
  {icon: 'GH', name: 'GitHub'},
  {icon: 'DC', name: 'Discord'},
  {icon: 'IN', name: 'LinkedIn'}
]

const footerLinks = [
  {
    title: 'Kompaniya',
    items: [
      {title: props.first},
      {title: props.second},
      {title: props.third},
      {title: props.fourth}
    ]
  },
  {
    title: 'Resurslar',
    items: [
      {title: props.fifth},
      {title: props.sixth},
      {title: props.seventh},
      {title: props.eighth}
    ]
  }
]

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
}
</script>

<style scoped>
.reveal-on-load {
  opacity: 0;
  transform: translateY(20px);
  animation: reveal 0.8s ease forwards;
}

@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-700 {
  animation-delay: 700ms;
}

/* Custom scrollbar for inputs */
input:focus {
  outline: none;
}
</style>