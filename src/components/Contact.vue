<script setup>
import {ref, onMounted} from 'vue'

const isVisible = ref(false)
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})
const isSubmitting = ref(false)
const showSuccess = ref(false)

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

  const section = document.querySelector('#contact-section')
  if (section) observer.observe(section)
})

const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'info@x-code.uz',
    link: 'mailto:info@x-code.uz',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '📱',
    title: 'Telefon',
    value: '+998 90 123 45 67',
    link: 'tel:+998901234567',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '📍',
    title: 'Manzil',
    value: 'Toshkent, O\'zbekiston',
    link: '#',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '⏰',
    title: 'Ish vaqti',
    value: 'Dush-Juma, 9:00-18:00',
    link: '#',
    color: 'from-orange-500 to-red-500'
  }
]

const socialLinks = [
  {name: 'Telegram', icon: 'TG', url: '#', color: 'from-blue-400 to-cyan-400'},
  {name: 'Instagram', icon: 'IG', url: 'https://www.instagram.com/007zzc/', color: 'from-pink-500 to-purple-500'},
  {name: 'LinkedIn', icon: 'IN', url: '#', color: 'from-blue-600 to-indigo-600'},
  {name: 'GitHub', icon: 'GH', url: '#', color: 'from-slate-600 to-slate-800'}
]

const handleSubmit = async () => {
  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  isSubmitting.value = false
  showSuccess.value = true

  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>

<template>
  <section id="contact-section" class="relative py-32 px-6 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"></div>
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
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/40 backdrop-blur-xl border border-indigo-700/30 text-indigo-300 text-sm font-medium shadow-[0_0_30px_rgba(99,102,241,0.15)] mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Bog'lanish
        </div>

        <!-- Title -->
        <h2 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Keling, Birgalikda
          </span>
          <br/>
          <span class="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Yarataylik
          </span>
        </h2>

        <!-- Description -->
        <p class="text-lg text-slate-400 max-w-3xl mx-auto">
          Loyihangizni muhokama qilish uchun biz bilan bog'laning. Har qanday savol va takliflaringizni kutamiz!
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div
            :class="[
            'transition-all duration-1000',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          ]"
        >
          <div class="relative p-8 rounded-3xl bg-slate-900/30 backdrop-blur-xl border border-slate-800/50">
            <!-- Glass Overlay -->
            <div
                class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl pointer-events-none"></div>

            <form @submit.prevent="handleSubmit" class="relative space-y-6">
              <!-- Name Input -->
              <div class="group">
                <label class="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  <span>Ism</span>
                  <span class="text-indigo-400">*</span>
                </label>
                <input
                    v-model="formData.name"
                    type="text"
                    required
                    placeholder="Ismingizni kiriting"
                    class="w-full px-4 py-3.5 bg-slate-800/30 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-800/50 transition-all duration-300"
                />
              </div>

              <!-- Email & Phone Row -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="group">
                  <label class="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                    <span>Email</span>
                    <span class="text-indigo-400">*</span>
                  </label>
                  <input
                      v-model="formData.email"
                      type="email"
                      required
                      placeholder="email@example.com"
                      class="w-full px-4 py-3.5 bg-slate-800/30 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-800/50 transition-all duration-300"
                  />
                </div>

                <div class="group">
                  <label class="block text-sm font-medium text-slate-300 mb-2">
                    <span>Telefon</span>
                  </label>
                  <input
                      v-model="formData.phone"
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      class="w-full px-4 py-3.5 bg-slate-800/30 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-800/50 transition-all duration-300"
                  />
                </div>
              </div>

              <!-- Subject Input -->
              <div class="group">
                <label class="block text-sm font-medium text-slate-300 mb-2">
                  <span>Mavzu</span>
                </label>
                <input
                    v-model="formData.subject"
                    type="text"
                    placeholder="Loyihangiz haqida qisqacha"
                    class="w-full px-4 py-3.5 bg-slate-800/30 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-800/50 transition-all duration-300"
                />
              </div>

              <!-- Message Textarea -->
              <div class="group">
                <label class="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                  <span>Xabar</span>
                  <span class="text-indigo-400">*</span>
                </label>
                <textarea
                    v-model="formData.message"
                    required
                    rows="5"
                    placeholder="Loyihangiz haqida batafsil yozing..."
                    class="w-full px-4 py-3.5 bg-slate-800/30 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-800/50 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="group relative w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting" class="relative z-10 flex items-center justify-center gap-2">
                  Xabar Yuborish
                  <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                       stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span v-else class="relative z-10 flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Yuborilmoqda...
                </span>
                <div
                    class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <!-- Success Message -->
              <div
                  v-if="showSuccess"
                  class="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center gap-3 animate-fade-in"
              >
                <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
                <span>Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beramiz.</span>
              </div>
            </form>
          </div>
        </div>

        <!-- Contact Info -->
        <div
            :class="[
            'space-y-8 transition-all duration-1000 delay-200',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          ]"
        >
          <!-- Contact Cards -->
          <div class="grid sm:grid-cols-2 gap-4">
            <a
                v-for="(info, index) in contactInfo"
                :key="index"
                :href="info.link"
                class="group relative p-6 rounded-2xl bg-slate-900/30 backdrop-blur-xl border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
            >
              <!-- Icon -->
              <div class="mb-4">
                <div
                    :class="[
                    'w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br transition-all duration-300 group-hover:scale-110',
                    info.color
                  ]"
                >
                  {{ info.icon }}
                </div>
              </div>

              <!-- Title -->
              <h3 class="text-sm font-medium text-slate-400 mb-1">
                {{ info.title }}
              </h3>

              <!-- Value -->
              <p class="text-white font-semibold group-hover:text-indigo-400 transition-colors">
                {{ info.value }}
              </p>

              <!-- Hover Effect -->
              <div
                  class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          <!-- Social Links -->
          <div class="relative p-8 rounded-3xl bg-slate-900/30 backdrop-blur-xl border border-slate-800/50">
            <div
                class="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl pointer-events-none"></div>

            <div class="relative">
              <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span class="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
                Ijtimoiy Tarmoqlar
              </h3>

              <p class="text-slate-400 text-sm mb-6">
                Bizni kuzatib boring va yangiliklardan xabardor bo'ling!
              </p>

              <div class="grid grid-cols-2 gap-3">
                <a
                    v-for="(social, index) in socialLinks"
                    :key="index"
                    :href="social.url"
                    class="group relative flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                >
                  <div
                      :class="[
                      'w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110',
                      social.color
                    ]"
                  >
                    {{ social.icon }}
                  </div>
                  <span class="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {{ social.name }}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <!-- Map Placeholder -->
          <div
              class="relative h-64 rounded-3xl bg-slate-900/30 backdrop-blur-xl border border-slate-800/50 overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <div class="text-5xl mb-4">🗺️</div>
                <p class="text-slate-400 text-sm">Map Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>