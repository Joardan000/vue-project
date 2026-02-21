<script setup>
import {ref, onMounted} from 'vue'

const isVisible = ref(false)

onMounted(() => {
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
          }
        })
      },
      {threshold: 0.1}
  )

  const section = document.querySelector('#features-section')
  if (section) observer.observe(section)
})

const features = [
  {
    icon: '⚡',
    title: 'Tezkor Ishlab Chiqish',
    description: 'Zamonaviy texnologiyalar va agile metodologiya yordamida loyihalaringizni tez va sifatli bajaramiz.',
    color: 'from-indigo-500 to-purple-500',
    bgGlow: 'indigo',
    stats: '2x Tezroq'
  },
  {
    icon: '🎨',
    title: 'Kreativ Dizayn',
    description: 'Har bir piksel mukammal. UI/UX dizayn bo\'yicha tajribali jamoamiz brendingizni hayotga tatbiq etadi.',
    color: 'from-purple-500 to-pink-500',
    bgGlow: 'purple',
    stats: '100+ Dizayn'
  },
  {
    icon: '🚀',
    title: 'Yuqori Samaradorlik',
    description: 'Optimallashtirilgan kod va zamonaviy arxitektura. Tez yuklanish va yuqori performance kafolati.',
    color: 'from-cyan-500 to-indigo-500',
    bgGlow: 'cyan',
    stats: '99.9% Uptime'
  },
  {
    icon: '🔒',
    title: 'Xavfsizlik',
    description: 'Ma\'lumotlar himoyasi va xavfsizlik - birinchi o\'rinda. Eng so\'nggi himoya mexanizmlari.',
    color: 'from-green-500 to-emerald-500',
    bgGlow: 'green',
    stats: 'SSL Sertifikat'
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Barcha qurilmalarda mukammal ishlash. Mobile-first yondashuv va adaptive interfeys.',
    color: 'from-orange-500 to-red-500',
    bgGlow: 'orange',
    stats: 'All Devices'
  },
  {
    icon: '💎',
    title: 'Premium Qo\'llab-Quvvatlash',
    description: '24/7 texnik yordam va konsultatsiya. Har qanday muammoni tezda hal qilamiz.',
    color: 'from-violet-500 to-purple-500',
    bgGlow: 'violet',
    stats: '24/7 Support'
  }
]

const getGlowColor = (color) => {
  const colors = {
    indigo: 'rgba(99, 102, 241, 0.4)',
    purple: 'rgba(168, 85, 247, 0.4)',
    cyan: 'rgba(6, 182, 212, 0.4)',
    green: 'rgba(34, 197, 94, 0.4)',
    orange: 'rgba(249, 115, 22, 0.4)',
    violet: 'rgba(139, 92, 246, 0.4)'
  }
  return colors[color] || colors.indigo
}
</script>

<template>
  <section id="features-section" class="relative py-32 px-6 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto max-w-7xl relative z-10">
      <!-- Section Header -->
      <div
          :class="[
          'text-center mb-20 transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <!-- Badge -->
        <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/40 backdrop-blur-xl border border-indigo-700/30 text-indigo-300 text-sm font-medium shadow-[0_0_30px_rgba(99,102,241,0.15)] mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Bizning Xizmatlar
        </div>

        <!-- Title -->
        <h2 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Nima Taklif
          </span>
          <br/>
          <span class="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Qilamiz?
          </span>
        </h2>

        <!-- Description -->
        <p class="text-lg text-slate-400 max-w-3xl mx-auto">
          Zamonaviy texnologiyalar va professional yondashuv bilan biznesingizni raqamli olamda muvaffaqiyatga olib
          boramiz.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            v-for="(feature, index) in features"
            :key="index"
            :style="{
            transitionDelay: `${index * 100}ms`,
          }"
            :class="[
            'group relative transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <!-- Glass Card -->
          <div
              class="relative h-full p-8 rounded-3xl bg-slate-900/30 backdrop-blur-[3px] border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 overflow-hidden">
            <!-- Hover Glow Effect -->
            <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                :style="{ background: `radial-gradient(circle at center, ${getGlowColor(feature.bgGlow)} 0%, transparent 70%)` }"
            ></div>

            <!-- Glass Overlay -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <!-- Content -->
            <div class="relative z-10">
              <!-- Icon Container -->
              <div class="mb-6 relative inline-block">
                <div
                    class="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                    :style="{ background: `linear-gradient(135deg, ${getGlowColor(feature.bgGlow)}, transparent)` }"
                ></div>
                <div
                    :class="[
                    'relative w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6',
                    `bg-gradient-to-br ${feature.color}`
                  ]"
                >
                  {{ feature.icon }}
                </div>
              </div>

              <!-- Stats Badge -->
              <div
                  class="absolute top-6 right-6 px-3 py-1 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {{ feature.stats }}
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                  :class="`group-hover:${feature.color}`">
                {{ feature.title }}
              </h3>

              <!-- Description -->
              <p class="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                {{ feature.description }}
              </p>

              <!-- Learn More Link -->
              <a
                  href="#"
                  class="inline-flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-indigo-400 transition-all duration-300"
              >
                <span>Batafsil</span>
                <svg
                    class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </a>
            </div>

            <!-- Bottom Gradient -->
            <div
                class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <!-- Floating Particles on Hover -->
          <div
              class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
                v-for="i in 3"
                :key="i"
                :style="{
                left: `${20 + i * 30}%`,
                animationDelay: `${i * 0.2}s`
              }"
                class="absolute top-1/2 w-1 h-1 rounded-full bg-indigo-400/60 animate-float-up"
            ></div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div
          :class="[
          'text-center mt-20 transition-all duration-1000 delay-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <p class="text-slate-400 mb-6">
          Loyihangizni muhokama qilishga tayyormisiz?
        </p>
        <button
            class="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-105">
          <span class="relative z-10 flex items-center gap-2">
            Biz Bilan Bog'laning
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
          <div
              class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float-up {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(20px);
    opacity: 0;
  }
}

.animate-float-up {
  animation: float-up 2s ease-in-out infinite;
}
</style>