<template>

  <div class="bg-pBlack h-screen pt-20">

    <div class="max-w-7xl h-3/4 bg-pGrayDark flex rounded-3xl px-5 py-5 space-x-5 w-full h-full items-center justify-center mx-auto">

      <!-- Settings Section -->
      <div class="h-fit w-full bg-pGray rounded-md">
        <h1 class="p-2 px-5 py-5 font-bold text-2xl">Image Converter</h1>

        <div class="p-5">
          <div class="grid grid-cols-1 gap-5">

            <div class="grid gap-2 grid-cols-1 bg-pdGray p-2 py-3 rounded-xl">
              <h2 class="text-pBlack text-lg px-1">Image</h2>
              <input class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white file:bg-pGreen file:text-white file:font-bold file:py-2 file:px-4 file:border-0 file:rounded-md"
                     type="file"
                     accept="image/*"
                     @change="">

            </div>

            <div class="grid grid-cols-2 gap-5">

            <div class="grid gap-2 grid-cols-1 bg-pdGray p-2 py-3 rounded-xl">
              <h2 class="text-pBlack text-lg px-1">Compression</h2>
                <select v-model="COMPRESS" class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm" name="compression">
                  <option value="no-comp">
                    No Compression
                  </option>
                  <option value="low-comp">
                    Low Compression
                  </option>
                  <option value="mid-comp">
                    Medium Compression
                  </option>
                  <option value="high-comp">
                    High Compression
                  </option>
                </select>
            </div>

            <div class="grid gap-2 grid-cols-1 bg-pdGray p-2 py-3 rounded-xl">
              <h2 class="text-pBlack text-lg px-1">Resize</h2>
              <div class="grid grid-cols-3 gap-2 px-2">
                <input class="rounded-lg outline-none text-center" type="text" title="ballz" v-model="IMAGEX" placeholder="x">
                <input class="rounded-lg outline-none text-center" type="text" v-model="IMAGEY" placeholder="y">
                <button class="rounded-md text-center bg-pBlue hover:bg-pdBlue text-white py-2 px-4" @click="resetImageSize" >Reset</button>
              </div>
            </div>

            </div>


            <div class="grid grid-cols-2 gap-5">
              <div class="grid gap-2 grid-cols-1 bg-pdGray w-full p-2 py-3 rounded-xl">
                <h2 class="text-pBlack text-lg px-1">File Type</h2>
                <select  class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="compression">
                  <option value="jpeg">
                    JPEG
                  </option>
                  <option value="png">
                    PNG
                  </option>
                  <option value="gif">
                    GIF
                  </option>
                  <option value="tiff">
                    TIFF
                  </option>
                  <option value="pdf">
                    PDF
                  </option>
                  <option value="webp">
                    WEBP
                  </option>
                  <option value="bmp">
                    BMP
                  </option>
                  <option value="svg">
                    SVG
                  </option>
                  <option value="jfif">
                    JFIF
                  </option>
                </select>
              </div>
              <div class="grid gap-2 grid-cols-1 bg-pdGray w-full p-2 py-3 rounded-xl">
                <h2 class="text-pBlack text-lg px-1">Start Convert</h2>
                <button type="button" @click="" class="py-2 px-4 bg-pGreen hover:bg-pdGreen text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                  Add to Queue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="h-full w-full bg-pGray rounded-md">
        <!-- Download Section -->
        <div class="grid grid-cols-2">
          <h1 class="p-2 px-5 py-3 font-bold text-2xl">Download List</h1>
        </div>

        <div class="flex gap-3 px-6 drop-shadow-md">

          <h1>Coming Soon...</h1>

<!--          <a class="w-full bg-pdGray p-2 py-3 rounded-xl">-->
<!--            <h2>Max Verstappen Gaat vreemd expoosd 2002 REAL podkast</h2>-->

<!--            <img :src="{IMGURL}" class="h-32" alt="uploaded img">-->

<!--          </a>-->

<!--          &lt;!&ndash;- Download File &ndash;&gt;-->
<!--          <a class="flex gap-2 p-4 grid-cols-1 p-2 py-3 rounded-xl text-center cursor-pointer bg-pGreen hover:bg-pdGreen transition">-->
<!--            <button class="text-pBlack">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />-->
<!--              </svg>-->
<!--            </button>-->
<!--          </a>-->

        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "ImageConverter",
  data() {
    return {
    }
  },
  methods: {

  },
}
</script>