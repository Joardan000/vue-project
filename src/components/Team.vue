<script setup>
import {ref, onMounted} from 'vue'

const isVisible = ref(false)
const hoveredCard = ref(null)

onMounted(() => {
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

  const section = document.querySelector('#team-section')
  if (section) observer.observe(section)
})

const team = [
  {
    id: 1,
    name: 'Alibek Karimov',
    role: 'CEO & Founder',
    avatar: '👨‍💼',
    bio: 'IT sohasida 10+ yillik tajriba. Startaplarni rivojlantirish bo\'yicha mutaxassis.',
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    stats: {projects: '100+', experience: '10+ yil'},
    social: {telegram: '#', linkedin: '#', github: '#'},
    achievements: ['🏆 Best Startup 2023', '💡 Innovation Award']
  },
  {
    id: 2,
    name: 'Madina Rahimova',
    role: 'Lead Designer',
    avatar: '👩‍🎨',
    bio: 'UX/UI dizayn bo\'yicha ekspert. Apple Design Award g\'olibi.',
    color: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    stats: {designs: '200+', awards: '5'},
    social: {telegram: '#', linkedin: '#', dribbble: '#'},
    achievements: ['🎨 Apple Design Award', '⭐ Top Designer']
  },
  {
    id: 3,
    name: 'Sardor Toshmatov',
    role: 'Lead Developer',
    avatar: '👨‍💻',
    bio: 'Full-stack dasturchi. React va Node.js bo\'yicha kuchli tajriba.',
    color: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34, 197, 94, 0.4)',
    stats: {code: '50K+', repos: '150+'},
    social: {telegram: '#', github: '#', stackoverflow: '#'},
    achievements: ['💻 Open Source Hero', '🚀 Tech Lead']
  },
  {
    id: 4,
    name: 'Nilufar Azimova',
    role: 'Marketing Director',
    avatar: '👩‍💼',
    bio: 'Raqamli marketing strategiyasi va brend rivojlantirish mutaxassisi.',
    color: 'from-orange-500 to-red-500',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    stats: {campaigns: '80+', roi: '300%+'},
    social: {telegram: '#', linkedin: '#', instagram: '#'},
    achievements: ['📈 Growth Expert', '🎯 Campaign Master']
  },
  {
    id: 5,
    name: 'Javohir Ergashev',
    role: 'Backend Engineer',
    avatar: '👨‍🔧',
    bio: 'Scalable backend arxitektura va microservices bo\'yicha tajriba.',
    color: 'from-indigo-500 to-purple-500',
    glowColor: 'rgba(99, 102, 241, 0.4)',
    stats: {apis: '50+', uptime: '99.9%'},
    social: {telegram: '#', github: '#', linkedin: '#'},
    achievements: ['⚡ Performance Pro', '🔧 System Architect']
  },
  {
    id: 6,
    name: 'Shoira Mahmudova',
    role: 'Project Manager',
    avatar: '👩‍💻',
    bio: 'Agile va Scrum metodologiyasi bo\'yicha sertifikatlangan mutaxassis.',
    color: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(236, 72, 153, 0.4)',
    stats: {projects: '60+', teams: '15+'},
    social: {telegram: '#', linkedin: '#', slack: '#'},
    achievements: ['📊 Agile Master', '🎖️ PMP Certified']
  }
]
</script>

<template>
  <section id="team-section" class="relative py-32 px-6 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
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
          Bizning Jamoa
        </div>

        <!-- Title -->
        <h2 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Professional
          </span>
          <br/>
          <span class="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mutaxassislar
          </span>
        </h2>

        <!-- Description -->
        <p class="text-lg text-slate-400 max-w-3xl mx-auto">
          Tajribali va креativ jamoamiz bilan tanishing. Har bir a'zo o'z sohasida professional va g'ayratli.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RouterLink
            v-for="(member, index) in team"
            :key="member.id"
            :to="`/member/${member.id}`"
            class="block"
            :style="{ transitionDelay: `${index * 100}ms` }"
            :class="[
              'group transition-all duration-1000 cursor-pointer',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ]"
            @mouseenter="hoveredCard = member.id"
            @mouseleave="hoveredCard = null"
        >
          <!-- Premium Team Card -->
          <div class="relative h-full">
            <!-- Outer Glow Effect -->
            <div
                class="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                :style="{ background: `linear-gradient(135deg, ${member.glowColor}, transparent)` }"
            ></div>

            <!-- Main Card -->
            <div
                class="relative h-full rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-slate-800/50 group-hover:border-slate-700/50 overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]">
              <!-- Animated Background Gradient -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div
                    :class="[
                    'absolute inset-0 bg-gradient-to-br opacity-5',
                    member.color
                  ]"
                ></div>
              </div>

              <!-- Glass Overlay -->
              <div
                  class="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <!-- Decorative Corner Elements -->
              <div
                  class="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div
                    :class="[
                    'absolute top-0 right-0 w-full h-full bg-gradient-to-bl rounded-bl-full',
                    member.color
                  ]"
                ></div>
              </div>

              <!-- Content -->
              <div class="relative p-8">
                <!-- Avatar Section -->
                <div class="flex items-start gap-4 mb-6">
                  <!-- Avatar Container -->
                  <div class="relative flex-shrink-0">
                    <!-- Rotating Ring -->
                    <div
                        :class="[
                        'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:rotate-180',
                        `bg-gradient-to-r ${member.color}`
                      ]"
                        style="padding: 2px;"
                    >
                      <div class="w-full h-full bg-slate-900 rounded-2xl"></div>
                    </div>

                    <!-- Avatar Glow -->
                    <div
                        class="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                        :style="{ background: `linear-gradient(135deg, ${member.glowColor}, transparent)` }"
                    ></div>

                    <!-- Avatar -->
                    <div
                        :class="[
                        'relative w-20 h-20 rounded-2xl flex items-center justify-center text-4xl bg-gradient-to-br transition-all duration-500 group-hover:scale-110',
                        member.color
                      ]"
                    >
                      {{ member.avatar }}
                    </div>

                    <!-- Online Status -->
                    <div class="absolute -bottom-1 -right-1">
                      <div class="relative">
                        <div class="absolute inset-0 bg-green-400 rounded-full blur-sm animate-pulse"></div>
                        <div class="relative w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"></div>
                      </div>
                    </div>
                  </div>

                  <!-- Name & Role -->
                  <div class="flex-1 min-w-0">
                    <h3
                        class="text-xl font-bold text-white mb-1 truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                        :class="`group-hover:${member.color}`"
                    >
                      {{ member.name }}
                    </h3>
                    <p class="text-sm font-medium mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {{ member.role }}
                    </p>
                  </div>
                </div>

                <!-- Bio -->
                <p class="text-sm text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                  {{ member.bio }}
                </p>

                <!-- Achievements Pills -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <div
                      v-for="(achievement, idx) in member.achievements"
                      :key="idx"
                      class="px-3 py-1.5 rounded-lg bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 text-xs text-slate-300 group-hover:bg-slate-800/60 group-hover:border-slate-600/40 transition-all duration-300"
                  >
                    {{ achievement }}
                  </div>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 gap-3 mb-6">
                  <div
                      v-for="(value, key) in member.stats"
                      :key="key"
                      class="relative p-3 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 text-center group-hover:bg-slate-800/50 group-hover:border-slate-600/50 transition-all duration-300 overflow-hidden"
                  >
                    <!-- Stat Glow on Hover -->
                    <div
                        :class="[
                        'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500',
                        member.color
                      ]"
                    ></div>

                    <div class="relative">
                      <div class="text-lg font-bold text-white mb-0.5">{{ value }}</div>
                      <div class="text-xs text-slate-500 capitalize">{{ key }}</div>
                    </div>
                  </div>
                </div>

                <!-- Social Links -->
                <div class="flex gap-2">
                  <a
                      v-for="(url, platform) in member.social"
                      :key="platform"
                      :href="url"
                      class="relative flex-1 h-11 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 flex items-center justify-center text-slate-400 hover:text-white overflow-hidden transition-all duration-300 group/social"
                  >
                    <!-- Social Button Hover Effect -->
                    <div
                        :class="[
                        'absolute inset-0 bg-gradient-to-r opacity-0 group-hover/social:opacity-100 transition-opacity duration-300',
                        member.color
                      ]"
                    ></div>

                    <span class="relative z-10 text-xs font-bold uppercase tracking-wide">
                      {{ platform.slice(0, 2) }}
                    </span>

                    <!-- Glow on hover -->
                    <div
                        class="absolute inset-0 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 blur-lg"
                        :style="{ background: member.glowColor }"
                    ></div>
                  </a>
                </div>
              </div>

              <!-- Bottom Accent Line -->
              <div
                  :class="[
                  'absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-500',
                  member.color
                ]"
              ></div>

              <!-- Shine Effect -->
              <div
                  class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                <div
                    class="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>

      <!-- Bottom CTA -->
      <div
          :class="[
          'text-center mt-20 transition-all duration-1000 delay-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div
            class="relative inline-block p-8 rounded-3xl bg-slate-900/30 backdrop-blur-xl border border-slate-800/50 group hover:border-slate-700/50 transition-all duration-500">
          <!-- Outer Glow -->
          <div
              class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <!-- Glass Overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl"></div>

          <div class="relative">
            <div class="text-5xl mb-4">🚀</div>
            <h3 class="text-2xl font-bold text-white mb-3">
              Jamоaga Qo'shiling!
            </h3>
            <p class="text-slate-400 mb-6 max-w-2xl">
              Biz doim iqtidorli va g'ayratli mutaxassislarni qidiramiz. Agar siz jamoamizga qo'shilishni istasangiz -
              ariza yuboring!
            </p>
            <button
                class="group/btn relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:scale-105">
              <span class="relative z-10 flex items-center gap-2">
                Vakansiyalarni Ko'rish
                <svg class="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
              <div
                  class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* No additional styles needed - all handled with Tailwind */
</style>