<template>
  <div class="bg-pBlack h-screen pt-20">
    <div class="max-w-7xl h-3/4 bg-pGrayDark rounded-3xl px-5 py-5 flex space-x-5 w-full h-full items-center justify-center mx-auto">

      <!-- Settings Section -->
      <div class="h-fit w-full bg-pGray rounded-md">
        <h1 class="p-2 px-5 py-5 font-bold text-2xl">Convert Settings</h1>

        <div class="p-5 pt-f">
          <div class="grid grid-cols-1 gap-5">
            <div class="grid gap-2 grid-cols-1 bg-pdGray p-2 py-3 rounded-xl">
              <h2 class="text-pBlack text-lg px-1">Compress Image</h2>
              <select class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm" name="compression">
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
              <h2 class="text-pBlack text-lg px-1">Resize Image</h2>
              <div class="flex">
                <div class="flex gap-3">
                  <input type="text" id="x" class=" rounded-lg border-transparent appearance-none border border-gray-300 w-1/5 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="x"/>
                  <input type="text" id="y" class=" rounded-lg border-transparent appearance-none border border-gray-300 w-1/5 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="y"/>

                  <button type="button" class="py-2 px-4 bg-pBlue hover:bg-pdBlue text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                    Reset
                  </button>

                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-5">
              <div class="grid gap-2 grid-cols-1 bg-pdGray w-full p-2 py-3 rounded-xl">
                <h2 class="text-pBlack text-lg px-1">Convert To</h2>
                <select class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="compression">
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

                </select>
              </div>
              <div class="grid gap-2 grid-cols-1 bg-pdGray w-full p-2 py-3 rounded-xl">
                <h2 class="text-pBlack text-lg px-1">Start Convert</h2>
                <button type="button" class="py-2 px-4 bg-pGreen hover:bg-pdGreen text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                  Start Convert
                </button>
              </div>
            </div>

        </div>
        </div>
      </div>

      <div class="flex flex-col space-y-5 w-full h-full">

        <div class="h-1/2 w-full bg-pGray rounded-md">
          <!-- Upload Section -->
          <div class="grid grid-cols-2">
            <h1 class="p-2 px-5 py-3 font-bold text-2xl">Upload</h1>
            <button type="button" class="py-2 px-6 flex w-fit h-fit bg-pGreen hover:bg-pdGreen text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
              Add Media
            </button>
          </div>

          <div class="grid gap-2 grid-cols-1 bg-pdGray p-2 py-3 rounded-xl">
             <h2> ballz</h2>
          </div>
        </div>

        <div class="h-1/2 w-full bg-pGray rounded-md">
          <!-- Download Section -->
          <h1 class="p-2 px-5 py-3 font-bold text-2xl">Download</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "ImageConverter",
}
</script>