<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import Btn from '../components/myBtn.vue'
import { auth } from "../stores/auth.js";

const signOut = auth()

const isScrolled = ref(false)
const isVisible = ref(false)
const isMobileMenuOpen = ref(false)

function scrollToMain(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function scrollToFeatures(){
  window.scrollTo({top: 1450, behavior: 'smooth'})
}

function scrollToPortfolio(){
  window.scrollTo({top: 2830, behavior: 'smooth'})
}

function scrollToTeam(){
  window.scrollTo({top: 4620, behavior: 'smooth'})
}

function scrollToContact(){
  window.scrollTo({top: 5620, behavior: 'smooth'})
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const props = defineProps({
  navbar1: String,
  navbar2: String,
  navbar3: String,
  navbar4: String,
})

const data = [
  {navbar: props.navbar1},
  {navbar: props.navbar2},
  {navbar: props.navbar3},
  {navbar: props.navbar4}
]
</script>

<template>
  <header
      :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
      isScrolled ? 'py-2' : 'py-6',
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    ]"
  >
    <div
        :class="[
        'container mx-auto flex justify-between items-center px-6 transition-all duration-500',
        isScrolled
          ? 'bg-slate-900/40 backdrop-blur-[2px] shadow-[2px_1px_1px_gray] rounded-full border border-white/20 shadow-[0_8px_32px_rgba(139,92,246,0.15)] py-3 max-w-6xl'
          : 'bg-transparent max-w-7xl'
      ]"
    >
      <!-- Logo -->
      <a href="#" class="group relative z-[60] flex items-center gap-3">
        <div class="relative">
          <div
              class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          <div
              class="relative w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
            X
          </div>
        </div>
        <span
            class="text-2xl font-bold text-white tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-500 transition-all duration-300">
          U-CODE
        </span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8">
        <a
            @click="item.navbar === 'Bosh Sahifa' ? scrollToMain(): false; item.navbar === 'Xizmatlar' ? scrollToFeatures() : false ; item.navbar === 'Portfolio'? scrollToPortfolio(): false; item.navbar === 'Jamoa'? scrollToTeam() : false"
            v-for="(item, index) in data"
            :key="index"
            :style="{ transitionDelay: `${index * 100 + 300}ms` }"
            :class="[
              'cursor-pointer relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 py-2 group',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            ]"
        >
          {{ item.navbar }}
          <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
        </a>
      </nav>

      <!-- Desktop Button -->
      <div class="hidden md:block">
        <Btn @click="signOut.signOut()"
            :class="['transition-all duration-1000 delay-700', isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75']">
          Sign Out
        </Btn>
      </div>
      <button @click="toggleMenu"
              class="md:hidden relative z-[60] flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none">
        <span
            :class="['w-6 h-0.5 bg-white rounded-full transition-all duration-300', isMobileMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
        <span
            :class="['w-6 h-0.5 bg-white rounded-full transition-all duration-300', isMobileMenuOpen ? 'opacity-0' : '']"></span>
        <span
            :class="['w-6 h-0.5 bg-white rounded-full transition-all duration-300', isMobileMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
      </button>
    </div>
  </header>
  <div
      :class="[
      'fixed inset-0 z-[55] md:hidden transition-all duration-500',
      isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
    ]"
  >
    <!-- Backdrop with blur -->
    <div
        @click="toggleMenu"
        :class="[
        'absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-500',
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
      ]"
    ></div>

    <!-- Glass Sidebar -->
    <div
        :class="[
        'absolute top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-900/90 via-indigo-950/90 to-purple-950/90 backdrop-blur-2xl border-l border-white/20 shadow-[0_0_50px_rgba(139,92,246,0.3)] transition-transform duration-500 ease-out',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <!-- Glass effect overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

      <!-- Animated gradient border -->
      <div
          class="absolute inset-0 bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent opacity-50 pointer-events-none"></div>

      <!-- Content -->
      <div class="relative h-full flex flex-col justify-center items-center px-8 py-20">
        <!-- Decorative elements -->
        <div
            class="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div
            class="absolute bottom-8 left-8 w-40 h-40 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>

        <!-- Menu Items -->
        <nav class="flex flex-col gap-6 w-full">
          <a
              v-for="(item, index) in data"
              :key="index"
              href="#"
              @click="toggleMenu"
              :style="{ transitionDelay: `${index * 50}ms` }"
              :class="[
              'group relative text-2xl font-semibold text-white hover:text-indigo-300 transition-all duration-300 py-3 px-6 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10',
              isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            ]"
          >
            <span class="relative z-10 flex items-center gap-3">
              <span
                  class="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {{ item.navbar }}
            </span>
            <div
                class="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </nav>

        <!-- Button -->
        <div
            :style="{ transitionDelay: '200ms' }"
            :class="[
            'mt-12 w-full transition-all duration-500',
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          ]"
        >
          <Btn @click="toggleMenu" class="w-full">
            Bog'lanish
          </Btn>
        </div>

        <!-- Social Links -->
        <div
            :style="{ transitionDelay: '250ms' }"
            :class="[
            'mt-12 flex gap-6 transition-all duration-500',
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          ]"
        >
          <a
              v-for="(social, index) in ['facebook', 'twitter', 'instagram']"
              :key="index"
              href="#"
              class="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-indigo-400/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="8"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>