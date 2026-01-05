<script setup>
import {ref, onMounted, computed} from 'vue'

const isVisible = ref(false)
const activeFilter = ref('all')

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

  const section = document.querySelector('#portfolio-section')
  if (section) observer.observe(section)
})

const filters = [
  {id: 'all', label: 'Hammasi'},
  {id: 'web', label: 'Web'},
  {id: 'mobile', label: 'Mobile'},
  {id: 'design', label: 'Dizayn'}
]

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'Zamonaviy onlayn savdo platformasi',
    image: '🛍️',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: 'from-blue-500 to-cyan-500',
    stats: {users: '50K+', rating: '4.9'}
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'mobile',
    description: 'Xavfsiz mobil bank ilovasi',
    image: '💳',
    tags: ['Flutter', 'Firebase', 'API'],
    color: 'from-green-500 to-emerald-500',
    stats: {users: '100K+', rating: '4.8'}
  },
  {
    id: 3,
    title: 'Brand Identity Design',
    category: 'design',
    description: 'To\'liq brend identifikatsiyasi',
    image: '🎨',
    tags: ['Figma', 'Illustrator', 'Photoshop'],
    color: 'from-purple-500 to-pink-500',
    stats: {projects: '30+', clients: '5+'}
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'web',
    description: 'Analytics va monitoring dashboard',
    image: '📊',
    tags: ['Vue.js', 'Tailwind', 'Charts'],
    color: 'from-indigo-500 to-purple-500',
    stats: {users: '25K+', rating: '4.9'}
  },
  {
    id: 5,
    title: 'Fitness Tracker App',
    category: 'mobile',
    description: 'Sport va salomatlik ilovasi',
    image: '💪',
    tags: ['React Native', 'Redux', 'HealthKit'],
    color: 'from-orange-500 to-red-500',
    stats: {downloads: '200K+', rating: '4.7'}
  },
  {
    id: 6,
    title: 'UI/UX Case Study',
    category: 'design',
    description: 'Restaurant ordering app dizayni',
    image: '🍔',
    tags: ['Sketch', 'Principle', 'InVision'],
    color: 'from-yellow-500 to-orange-500',
    stats: {screens: '50+', variants: '3'}
  }
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }
  return projects.filter(project => project.category === activeFilter.value)
})

const setFilter = (filterId) => {
  activeFilter.value = filterId
}
</script>

<template>
  <section id="portfolio-section" class="relative py-32 px-6 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto max-w-7xl relative z-10">
      <!-- Section Header -->
      <div
          :class="[
          'text-center mb-16 transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <!-- Badge -->
        <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/40 backdrop-blur-xl border border-purple-700/30 text-purple-300 text-sm font-medium shadow-[0_0_30px_rgba(168,85,247,0.15)] mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Portfolio
        </div>

        <!-- Title -->
        <h2 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Bizning
          </span>
          <br/>
          <span class="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Loyihalarimiz
          </span>
        </h2>

        <!-- Description -->
        <p class="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
          Muvaffaqiyatli bajarilgan loyihalarimiz bilan tanishing. Har bir loyiha - bu sifat va innovatsiya namunasi.
        </p>

        <!-- Filter Buttons -->
        <div
            :class="[
            'flex flex-wrap items-center justify-center gap-3 transition-all duration-1000 delay-200',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <button
              v-for="filter in filters"
              :key="filter.id"
              @click="setFilter(filter.id)"
              :class="[
              'px-6 py-3 rounded-full font-medium text-sm transition-all duration-300',
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] scale-105'
                : 'bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 text-slate-400 hover:bg-slate-800/50 hover:text-white hover:border-purple-600/50'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            :style="{ transitionDelay: `${index * 100}ms` }"
            :class="[
            'group transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <!-- Project Card -->
          <div
              class="relative h-full rounded-3xl bg-slate-900/30 backdrop-blur-xl border border-slate-800/50 hover:border-slate-700/50 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]">
            <!-- Image/Icon Container -->
            <div class="relative h-64 overflow-hidden">
              <!-- Gradient Background -->
              <div
                  :class="[
                  'absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-500',
                  project.color
                ]"
              ></div>

              <!-- Large Emoji Icon -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-8xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {{ project.image }}
                </div>
              </div>

              <!-- Hover Overlay -->
              <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <!-- Stats on Hover -->
              <div
                  class="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div
                    v-for="(value, key) in project.stats"
                    :key="key"
                    class="px-3 py-1.5 rounded-lg bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-xs text-slate-300"
                >
                  <span class="font-semibold text-white">{{ value }}</span> {{ key }}
                </div>
              </div>

              <!-- Category Badge -->
              <div
                  class="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-xs text-slate-300 capitalize">
                {{ project.category }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <!-- Title -->
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
                  :class="`group-hover:${project.color}`">
                {{ project.title }}
              </h3>

              <!-- Description -->
              <p class="text-slate-400 text-sm mb-4 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-3 py-1 rounded-lg bg-slate-800/30 border border-slate-700/30 text-xs text-slate-400 hover:text-slate-300 hover:border-purple-600/30 transition-colors duration-300"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- View Project Link -->
              <a
                  href="#"
                  class="inline-flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-purple-400 transition-all duration-300"
              >
                <span>Ko'rish</span>
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

            <!-- Shine Effect on Hover -->
            <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div
                  class="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
          v-if="filteredProjects.length === 0"
          class="text-center py-20"
      >
        <div class="text-6xl mb-4">🔍</div>
        <p class="text-slate-400">Bu kategoriyada loyihalar topilmadi</p>
      </div>

      <!-- Bottom CTA -->
      <div
          :class="[
          'text-center mt-20 transition-all duration-1000 delay-500',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <p class="text-slate-400 mb-6">
          Ko'proq loyihalarni ko'rmoqchimisiz?
        </p>
        <button
            class="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] hover:scale-105">
          <span class="relative z-10 flex items-center gap-2">
            Barcha Loyihalar
            <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                 stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </span>
          <div
              class="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional animations if needed */
</style>