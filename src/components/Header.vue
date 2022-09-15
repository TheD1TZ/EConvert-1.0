<template>
  <section class="relative w-full px-8 text-gray-700 p-2 bg-pGrayDark body-font" data-tails-scripts="//unpkg.com/alpinejs">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
      <span class="w-full text-transparent text-2xl font-extrabold bg-clip-text bg-gradient-to-r from-pdGreen to-pdBlue">EConvert</span>

      <nav class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">


        <a href="/" class="relative text-pGray font-medium leading-6 transition duration-150 ease-out hover:text-pBlue" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
          <span class="block">Home</span>
          <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
        </span>
        </a>

        <a href="/imageconverter" class="relative text-pGray font-medium leading-6 transition duration-150 ease-out hover:text-pBlue" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
          <span class="block">Image Converter</span>
          <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
        </span>
        </a>

        <a href="/videoconverter" class="relative text-pGray font-medium leading-6 transition duration-150 ease-out hover:text-pBlue" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
          <span class="block">Video Converter</span>
          <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
        </span>
        </a>

        <a href="/audioconverter" class="relative text-pGray font-medium leading-6 transition duration-150 ease-out hover:text-pBlue" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
          <span class="block">Audio Converter</span>
          <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
        </span>
        </a>

        <a href="/youtubedownloader" class="relative text-pGray font-medium leading-6 transition duration-150 ease-out hover:text-pBlue" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
          <span class="block">YouTube Downloader</span>
          <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
        </span>
        </a>


      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header"
}
</script>