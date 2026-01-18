<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isVisible = ref(false)
const activeTab = ref('overview')

// Team member data (bu backend'dan kelishi kerak)
const teamMembers = [
  {
    id: 1,
    name: 'Alibek Karimov',
    role: 'CEO & Founder',
    avatar: '👨‍💼',
    bio: 'IT sohasida 10+ yillik tajriba. Startaplarni rivojlantirish bo\'yicha mutaxassis.',
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    stats: { projects: '100+', experience: '10+ yil', clients: '50+', rating: '4.9/5' },
    social: { telegram: 'https://t.me/alibek', linkedin: '#', github: '#', twitter: '#' },
    achievements: ['🏆 Best Startup 2023', '💡 Innovation Award', '🎯 Tech Leader 2024'],
    skills: [
      { name: 'Leadership', level: 95 },
      { name: 'Strategy', level: 90 },
      { name: 'Business Dev', level: 88 },
      { name: 'Product Vision', level: 92 }
    ],
    about: `Men IT sohasida 10 yildan ortiq tajribaga ega mutaxassisман. Mening asosiy yo'nalishim startaplarni yaratish va rivojlantirish.

    Shu vaqt ichida 100 dan ortiq muvaffaqiyatli loyihada ishtirok etdim va bir nechta kompaniyalarni asos solganman. Texnologiya va biznesni birlashtirish - mening asosiy kuchim.

    Jamoa bilan ishlash, viziya yaratish va uni amalga oshirish menga eng katta zavq bag'ishlaydi.`,
    experience: [
      {
        company: 'X-CODE',
        position: 'CEO & Founder',
        period: '2020 - Hozir',
        description: 'Kompaniyani noldan boshlab 50+ xodimli tashkilotga aylantirdim.'
      },
      {
        company: 'TechStart Inc.',
        position: 'CTO',
        period: '2017 - 2020',
        description: 'Texnologiya bo\'limini boshqardim va bir nechta innovatsion mahsulot ishlab chiqdim.'
      },
      {
        company: 'Digital Solutions',
        position: 'Senior Developer',
        period: '2014 - 2017',
        description: 'Enterprise darajadagi yechimlar ustida ishladim.'
      }
    ],
    projects: [
      { name: 'E-Commerce Platform', role: 'Lead', year: '2023', status: 'success' },
      { name: 'Mobile Banking App', role: 'Advisor', year: '2022', status: 'success' },
      { name: 'SaaS Dashboard', role: 'Product Owner', year: '2023', status: 'ongoing' },
      { name: 'AI Assistant', role: 'Founder', year: '2024', status: 'ongoing' }
    ],
    testimonials: [
      {
        name: 'Jamshid Ahmadov',
        role: 'CTO at TechCorp',
        avatar: '👨‍💼',
        text: 'Alibek bilan ishlash ajoyib tajriba edi. Uning leadership va vision qobiliyati haqiqatan ham ajoyib!'
      },
      {
        name: 'Dilnoza Karimova',
        role: 'Product Manager',
        avatar: '👩‍💼',
        text: 'Professional yondashuv va doimo yordam berishga tayyor. Eng yaxshi rahbarlardan biri!'
      }
    ],
    email: 'alibek@x-code.uz',
    phone: '+998 90 123 45 67',
    location: 'Toshkent, O\'zbekiston'
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
    achievements: ['🎨 Apple Design Award', '⭐ Top Designer'],
    skills: [
      { name: 'Leadership', level: 95 },
      { name: 'Strategy', level: 90 },
      { name: 'Business Dev', level: 88 },
      { name: 'Product Vision', level: 92 }
    ],
    about: `Men IT sohasida 10 yildan ortiq tajribaga ega mutaxassisман. Mening asosiy yo'nalishim startaplarni yaratish va rivojlantirish.

    Shu vaqt ichida 100 dan ortiq muvaffaqiyatli loyihada ishtirok etdim va bir nechta kompaniyalarni asos solganman. Texnologiya va biznesni birlashtirish - mening asosiy kuchim.

    Jamoa bilan ishlash, viziya yaratish va uni amalga oshirish menga eng katta zavq bag'ishlaydi.`,
    experience: [
      {
        company: 'X-CODE',
        position: 'CEO & Founder',
        period: '2020 - Hozir',
        description: 'Kompaniyani noldan boshlab 50+ xodimli tashkilotga aylantirdim.'
      },
      {
        company: 'TechStart Inc.',
        position: 'CTO',
        period: '2017 - 2020',
        description: 'Texnologiya bo\'limini boshqardim va bir nechta innovatsion mahsulot ishlab chiqdim.'
      },
      {
        company: 'Digital Solutions',
        position: 'Senior Developer',
        period: '2014 - 2017',
        description: 'Enterprise darajadagi yechimlar ustida ishladim.'
      }
    ],
    projects: [
      { name: 'E-Commerce Platform', role: 'Lead', year: '2023', status: 'success' },
      { name: 'Mobile Banking App', role: 'Advisor', year: '2022', status: 'success' },
      { name: 'SaaS Dashboard', role: 'Product Owner', year: '2023', status: 'ongoing' },
      { name: 'AI Assistant', role: 'Founder', year: '2024', status: 'ongoing' }
    ],
    testimonials: [
      {
        name: 'Jamshid Ahmadov',
        role: 'CTO at TechCorp',
        avatar: '👨‍💼',
        text: 'Alibek bilan ishlash ajoyib tajriba edi. Uning leadership va vision qobiliyati haqiqatan ham ajoyib!'
      },
      {
        name: 'Dilnoza Karimova',
        role: 'Product Manager',
        avatar: '👩‍💼',
        text: 'Professional yondashuv va doimo yordam berishga tayyor. Eng yaxshi rahbarlardan biri!'
      }
    ],
    email: 'alibek@x-code.uz',
    phone: '+998 90 123 45 67',
    location: 'Toshkent, O\'zbekiston'
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
    achievements: ['💻 Open Source Hero', '🚀 Tech Lead'],
    skills: [
      { name: 'Leadership', level: 95 },
      { name: 'Strategy', level: 90 },
      { name: 'Business Dev', level: 88 },
      { name: 'Product Vision', level: 92 }
    ],
    about: `Men IT sohasida 10 yildan ortiq tajribaga ega mutaxassisман. Mening asosiy yo'nalishim startaplarni yaratish va rivojlantirish.

    Shu vaqt ichida 100 dan ortiq muvaffaqiyatli loyihada ishtirok etdim va bir nechta kompaniyalarni asos solganman. Texnologiya va biznesni birlashtirish - mening asosiy kuchim.

    Jamoa bilan ishlash, viziya yaratish va uni amalga oshirish menga eng katta zavq bag'ishlaydi.`,
    experience: [
      {
        company: 'X-CODE',
        position: 'CEO & Founder',
        period: '2020 - Hozir',
        description: 'Kompaniyani noldan boshlab 50+ xodimli tashkilotga aylantirdim.'
      },
      {
        company: 'TechStart Inc.',
        position: 'CTO',
        period: '2017 - 2020',
        description: 'Texnologiya bo\'limini boshqardim va bir nechta innovatsion mahsulot ishlab chiqdim.'
      },
      {
        company: 'Digital Solutions',
        position: 'Senior Developer',
        period: '2014 - 2017',
        description: 'Enterprise darajadagi yechimlar ustida ishladim.'
      }
    ],
    projects: [
      { name: 'E-Commerce Platform', role: 'Lead', year: '2023', status: 'success' },
      { name: 'Mobile Banking App', role: 'Advisor', year: '2022', status: 'success' },
      { name: 'SaaS Dashboard', role: 'Product Owner', year: '2023', status: 'ongoing' },
      { name: 'AI Assistant', role: 'Founder', year: '2024', status: 'ongoing' }
    ],
    testimonials: [
      {
        name: 'Jamshid Ahmadov',
        role: 'CTO at TechCorp',
        avatar: '👨‍💼',
        text: 'Alibek bilan ishlash ajoyib tajriba edi. Uning leadership va vision qobiliyati haqiqatan ham ajoyib!'
      },
      {
        name: 'Dilnoza Karimova',
        role: 'Product Manager',
        avatar: '👩‍💼',
        text: 'Professional yondashuv va doimo yordam berishga tayyor. Eng yaxshi rahbarlardan biri!'
      }
    ],
    email: 'alibek@x-code.uz',
    phone: '+998 90 123 45 67',
    location: 'Toshkent, O\'zbekiston'
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
    achievements: ['📈 Growth Expert', '🎯 Campaign Master'],
    skills: [
      { name: 'Leadership', level: 95 },
      { name: 'Strategy', level: 90 },
      { name: 'Business Dev', level: 88 },
      { name: 'Product Vision', level: 92 }
    ],
    about: `Men IT sohasida 10 yildan ortiq tajribaga ega mutaxassisман. Mening asosiy yo'nalishim startaplarni yaratish va rivojlantirish.

    Shu vaqt ichida 100 dan ortiq muvaffaqiyatli loyihada ishtirok etdim va bir nechta kompaniyalarni asos solganman. Texnologiya va biznesni birlashtirish - mening asosiy kuchim.

    Jamoa bilan ishlash, viziya yaratish va uni amalga oshirish menga eng katta zavq bag'ishlaydi.`,
    experience: [
      {
        company: 'X-CODE',
        position: 'CEO & Founder',
        period: '2020 - Hozir',
        description: 'Kompaniyani noldan boshlab 50+ xodimli tashkilotga aylantirdim.'
      },
      {
        company: 'TechStart Inc.',
        position: 'CTO',
        period: '2017 - 2020',
        description: 'Texnologiya bo\'limini boshqardim va bir nechta innovatsion mahsulot ishlab chiqdim.'
      },
      {
        company: 'Digital Solutions',
        position: 'Senior Developer',
        period: '2014 - 2017',
        description: 'Enterprise darajadagi yechimlar ustida ishladim.'
      }
    ],
    projects: [
      { name: 'E-Commerce Platform', role: 'Lead', year: '2023', status: 'success' },
      { name: 'Mobile Banking App', role: 'Advisor', year: '2022', status: 'success' },
      { name: 'SaaS Dashboard', role: 'Product Owner', year: '2023', status: 'ongoing' },
      { name: 'AI Assistant', role: 'Founder', year: '2024', status: 'ongoing' }
    ],
    testimonials: [
      {
        name: 'Jamshid Ahmadov',
        role: 'CTO at TechCorp',
        avatar: '👨‍💼',
        text: 'Alibek bilan ishlash ajoyib tajriba edi. Uning leadership va vision qobiliyati haqiqatan ham ajoyib!'
      },
      {
        name: 'Dilnoza Karimova',
        role: 'Product Manager',
        avatar: '👩‍💼',
        text: 'Professional yondashuv va doimo yordam berishga tayyor. Eng yaxshi rahbarlardan biri!'
      }
    ],
    email: 'alibek@x-code.uz',
    phone: '+998 90 123 45 67',
    location: 'Toshkent, O\'zbekiston'
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
    achievements: ['⚡ Performance Pro', '🔧 System Architect'],
    skills: [
      { name: 'Leadership', level: 95 },
      { name: 'Strategy', level: 90 },
      { name: 'Business Dev', level: 88 },
      { name: 'Product Vision', level: 92 }
    ],
    about: `Men IT sohasida 10 yildan ortiq tajribaga ega mutaxassisман. Mening asosiy yo'nalishim startaplarni yaratish va rivojlantirish.

    Shu vaqt ichida 100 dan ortiq muvaffaqiyatli loyihada ishtirok etdim va bir nechta kompaniyalarni asos solganman. Texnologiya va biznesni birlashtirish - mening asosiy kuchim.

    Jamoa bilan ishlash, viziya yaratish va uni amalga oshirish menga eng katta zavq bag'ishlaydi.`,
    experience: [
      {
        company: 'X-CODE',
        position: 'CEO & Founder',
        period: '2020 - Hozir',
        description: 'Kompaniyani noldan boshlab 50+ xodimli tashkilotga aylantirdim.'
      },
      {
        company: 'TechStart Inc.',
        position: 'CTO',
        period: '2017 - 2020',
        description: 'Texnologiya bo\'limini boshqardim va bir nechta innovatsion mahsulot ishlab chiqdim.'
      },
      {
        company: 'Digital Solutions',
        position: 'Senior Developer',
        period: '2014 - 2017',
        description: 'Enterprise darajadagi yechimlar ustida ishladim.'
      }
    ],
    projects: [
      { name: 'E-Commerce Platform', role: 'Lead', year: '2023', status: 'success' },
      { name: 'Mobile Banking App', role: 'Advisor', year: '2022', status: 'success' },
      { name: 'SaaS Dashboard', role: 'Product Owner', year: '2023', status: 'ongoing' },
      { name: 'AI Assistant', role: 'Founder', year: '2024', status: 'ongoing' }
    ],
    testimonials: [
      {
        name: 'Jamshid Ahmadov',
        role: 'CTO at TechCorp',
        avatar: '👨‍💼',
        text: 'Alibek bilan ishlash ajoyib tajriba edi. Uning leadership va vision qobiliyati haqiqatan ham ajoyib!'
      },
      {
        name: 'Dilnoza Karimova',
        role: 'Product Manager',
        avatar: '👩‍💼',
        text: 'Professional yondashuv va doimo yordam berishga tayyor. Eng yaxshi rahbarlardan biri!'
      }
    ],
    email: 'alibek@x-code.uz',
    phone: '+998 90 123 45 67',
    location: 'Toshkent, O\'zbekiston'
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
    achievements: ['📊 Agile Master', '🎖️ PMP Certified'],
    skills: [
      { name: 'Leadership', level: 95 },
      { name: 'Strategy', level: 90 },
      { name: 'Business Dev', level: 88 },
      { name: 'Product Vision', level: 92 }
    ],
    about: `Men IT sohasida 10 yildan ortiq tajribaga ega mutaxassisман. Mening asosiy yo'nalishim startaplarni yaratish va rivojlantirish.

    Shu vaqt ichida 100 dan ortiq muvaffaqiyatli loyihada ishtirok etdim va bir nechta kompaniyalarni asos solganman. Texnologiya va biznesni birlashtirish - mening asosiy kuchim.

    Jamoa bilan ishlash, viziya yaratish va uni amalga oshirish menga eng katta zavq bag'ishlaydi.`,
    experience: [
      {
        company: 'X-CODE',
        position: 'CEO & Founder',
        period: '2020 - Hozir',
        description: 'Kompaniyani noldan boshlab 50+ xodimli tashkilotga aylantirdim.'
      },
      {
        company: 'TechStart Inc.',
        position: 'CTO',
        period: '2017 - 2020',
        description: 'Texnologiya bo\'limini boshqardim va bir nechta innovatsion mahsulot ishlab chiqdim.'
      },
      {
        company: 'Digital Solutions',
        position: 'Senior Developer',
        period: '2014 - 2017',
        description: 'Enterprise darajadagi yechimlar ustida ishladim.'
      }
    ],
    projects: [
      { name: 'E-Commerce Platform', role: 'Lead', year: '2023', status: 'success' },
      { name: 'Mobile Banking App', role: 'Advisor', year: '2022', status: 'success' },
      { name: 'SaaS Dashboard', role: 'Product Owner', year: '2023', status: 'ongoing' },
      { name: 'AI Assistant', role: 'Founder', year: '2024', status: 'ongoing' }
    ],
    testimonials: [
      {
        name: 'Jamshid Ahmadov',
        role: 'CTO at TechCorp',
        avatar: '👨‍💼',
        text: 'Alibek bilan ishlash ajoyib tajriba edi. Uning leadership va vision qobiliyati haqiqatan ham ajoyib!'
      },
      {
        name: 'Dilnoza Karimova',
        role: 'Product Manager',
        avatar: '👩‍💼',
        text: 'Professional yondashuv va doimo yordam berishga tayyor. Eng yaxshi rahbarlardan biri!'
      }
    ],
    email: 'alibek@x-code.uz',
    phone: '+998 90 123 45 67',
    location: 'Toshkent, O\'zbekiston'
  }
]

const member = computed(() => {
  const id = parseInt(route.params.id)
  return teamMembers.find(m => m.id === id) || teamMembers[0]
})

onMounted(() => {
  scrollTo({ top:0, behavior: 'smooth' })
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const goBack = () => {
  router.push('/')
}

const tabs = [
  { id: 'overview', label: 'Umumiy', icon: '📊' },
  { id: 'experience', label: 'Tajriba', icon: '💼' },
  { id: 'projects', label: 'Loyihalar', icon: '🚀' },
  { id: 'testimonials', label: 'Fikrlar', icon: '💬' }
]
</script>

<template>
  <div class="min-h-screen bg-[#0B0F19] relative overflow-hidden">
    <!-- Background Effects -->
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div class="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style="animation-delay: 1s"></div>
    </div>

    <div class="relative z-10">
      <!-- Back Button -->
      <div class="container mx-auto max-w-7xl px-6 pt-8">
        <button
            @click="goBack"
            class="group flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/30 text-slate-300 hover:text-white hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
        >
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span>Orqaga</span>
        </button>
      </div>

      <!-- Hero Section -->
      <div class="container mx-auto max-w-7xl px-6 py-16">
        <div
            :class="[
            'transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          ]"
        >
          <!-- Profile Card -->
          <div class="relative">
            <!-- Outer Glow -->
            <div
                class="absolute -inset-1 rounded-3xl blur-2xl opacity-30"
                :style="{ background: `linear-gradient(135deg, ${member.glowColor}, transparent)` }"
            ></div>

            <!-- Main Card -->
            <div class="relative rounded-3xl bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 backdrop-blur-2xl border border-slate-800/50 overflow-hidden">
              <!-- Decorative Elements -->
              <div class="absolute top-0 right-0 w-96 h-96 opacity-10">
                <div :class="['w-full h-full bg-gradient-to-bl rounded-bl-[8rem]', member.color]"></div>
              </div>

              <div class="relative p-12">
                <div class="flex flex-col lg:flex-row gap-12">
                  <!-- Left: Avatar & Quick Info -->
                  <div class="lg:w-1/3">
                    <!-- Avatar -->
                    <div class="relative inline-block mb-6">
                      <div
                          class="absolute inset-0 rounded-3xl blur-2xl opacity-60"
                          :style="{ background: `linear-gradient(135deg, ${member.glowColor}, transparent)` }"
                      ></div>
                      <div
                          :class="[
                          'relative w-48 h-48 rounded-3xl flex items-center justify-center text-8xl bg-gradient-to-br',
                          member.color
                        ]"
                      >
                        {{ member.avatar }}
                      </div>
                      <!-- Online Badge -->
                      <div class="absolute bottom-4 right-4">
                        <div class="relative">
                          <div class="absolute inset-0 bg-green-400 rounded-full blur-md animate-pulse"></div>
                          <div class="relative px-4 py-2 bg-green-500 rounded-full text-white text-sm font-bold">
                            Online
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Quick Stats -->
                    <div class="grid grid-cols-2 gap-3">
                      <div
                          v-for="(value, key) in member.stats"
                          :key="key"
                          class="p-4 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 text-center"
                      >
                        <div class="text-2xl font-bold text-white mb-1">{{ value }}</div>
                        <div class="text-xs text-slate-400 capitalize">{{ key }}</div>
                      </div>
                    </div>

                    <!-- Social Links -->
                    <div class="mt-6 space-y-3">
                      <a
                          v-for="(url, platform) in member.social"
                          :key="platform"
                          :href="url"
                          class="group flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
                      >
                        <div :class="['w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold bg-gradient-to-br text-white', member.color]">
                          {{ platform.slice(0, 2).toUpperCase() }}
                        </div>
                        <span class="text-sm text-slate-300 group-hover:text-white capitalize transition-colors">
                          {{ platform }}
                        </span>
                      </a>
                    </div>
                  </div>

                  <!-- Right: Main Info -->
                  <div class="lg:w-2/3">
                    <!-- Name & Role -->
                    <div class="mb-6">
                      <h1
                          class="text-5xl font-bold mb-3 bg-gradient-to-r bg-clip-text text-transparent"
                          :class="member.color"
                      >
                        {{ member.name }}
                      </h1>
                      <p class="text-2xl text-indigo-400 font-medium mb-4">{{ member.role }}</p>

                      <!-- Contact Info -->
                      <div class="flex flex-wrap gap-4 text-sm text-slate-400">
                        <div class="flex items-center gap-2">
                          <span>📧</span>
                          <span>{{ member.email }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <span>📱</span>
                          <span>{{ member.phone }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                          <span>📍</span>
                          <span>{{ member.location }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Bio -->
                    <p class="text-slate-300 leading-relaxed mb-8">
                      {{ member.bio }}
                    </p>

                    <!-- Achievements -->
                    <div class="mb-8">
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span class="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                        Yutuqlar
                      </h3>
                      <div class="flex flex-wrap gap-3">
                        <div
                            v-for="(achievement, idx) in member.achievements"
                            :key="idx"
                            class="px-4 py-2 rounded-lg bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 text-sm text-slate-200"
                        >
                          {{ achievement }}
                        </div>
                      </div>
                    </div>

                    <!-- Skills -->
                    <div>
                      <h3 class="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span class="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                        Ko'nikmalar
                      </h3>
                      <div class="space-y-4">
                        <div v-for="skill in member.skills" :key="skill.name">
                          <div class="flex justify-between mb-2">
                            <span class="text-sm text-slate-300">{{ skill.name }}</span>
                            <span class="text-sm font-bold text-indigo-400">{{ skill.level }}%</span>
                          </div>
                          <div class="h-2 bg-slate-800/50 rounded-full overflow-hidden">
                            <div
                                :class="['h-full bg-gradient-to-r rounded-full transition-all duration-1000', member.color]"
                                :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs Section -->
      <div class="container mx-auto max-w-7xl px-6 pb-20">
        <!-- Tab Navigation -->
        <div class="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
              'px-6 py-3 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300',
              activeTab === tab.id
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_30px_rgba(99,102,241,0.4)]'
                : 'bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 text-slate-400 hover:bg-slate-800/50 hover:text-white'
            ]"
          >
            <span class="mr-2">{{ tab.icon }}</span>
            {{ tab.label }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="relative rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-slate-800/50 p-8">
          <!-- Overview Tab -->
          <div v-if="activeTab === 'overview'" class="space-y-6">
            <h3 class="text-2xl font-bold text-white mb-4">Men haqimda</h3>
            <p class="text-slate-300 leading-relaxed whitespace-pre-line">{{ member.about }}</p>
          </div>

          <!-- Experience Tab -->
          <div v-if="activeTab === 'experience'" class="space-y-6">
            <h3 class="text-2xl font-bold text-white mb-6">Ish tajribasi</h3>
            <div
                v-for="(exp, idx) in member.experience"
                :key="idx"
                class="relative pl-8 pb-8 border-l-2 border-slate-700/50 last:pb-0"
            >
              <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"></div>
              <div class="mb-2">
                <h4 class="text-xl font-bold text-white">{{ exp.position }}</h4>
                <p class="text-indigo-400 font-medium">{{ exp.company }}</p>
                <p class="text-sm text-slate-500">{{ exp.period }}</p>
              </div>
              <p class="text-slate-300">{{ exp.description }}</p>
            </div>
          </div>

          <!-- Projects Tab -->
          <div v-if="activeTab === 'projects'" class="space-y-4">
            <h3 class="text-2xl font-bold text-white mb-6">Loyihalar</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div
                  v-for="(project, idx) in member.projects"
                  :key="idx"
                  class="p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div class="flex justify-between items-start mb-3">
                  <h4 class="text-lg font-bold text-white">{{ project.name }}</h4>
                  <span
                      :class="[
                      'px-3 py-1 rounded-full text-xs font-bold',
                      project.status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    ]"
                  >
                    {{ project.status === 'success' ? '✓ Tugallangan' : '⏳ Davom etmoqda' }}
                  </span>
                </div>
                <p class="text-sm text-slate-400 mb-2">{{ project.role }} • {{ project.year }}</p>
              </div>
            </div>
          </div>

          <!-- Testimonials Tab -->
          <div v-if="activeTab === 'testimonials'" class="space-y-6">
            <h3 class="text-2xl font-bold text-white mb-6">Hamkasblarning fikrlari</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div
                  v-for="(testimonial, idx) in member.testimonials"
                  :key="idx"
                  class="p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
              >
                <p class="text-slate-300 italic mb-4">"{{ testimonial.text }}"</p>
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl">
                    {{ testimonial.avatar }}
                  </div>
                  <div>
                    <p class="text-white font-semibold">{{ testimonial.name }}</p>
                    <p class="text-sm text-slate-400">{{ testimonial.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(100, 116, 139, 0.5);
}
</style>