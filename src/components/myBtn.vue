<template>
  <button
      class="hidden md:block relative px-6 py-2.5 rounded-full bg-slate-800 text-white font-medium overflow-hidden group border border-white/10 hover:border-indigo-500/50 transition-colors">
    <span class="relative z-10 group-hover:text-white transition-colors"><slot></slot></span>
    <div
        class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div
        class="absolute inset-0 opacity-0 group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"></div>
  </button>
</template>