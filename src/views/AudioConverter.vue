<template>

  <div class="bg-pBlack h-screen pt-20">

    <div class="max-w-7xl h-3/4 bg-pGrayDark flex rounded-3xl px-5 py-5 space-x-5 w-full h-full items-center justify-center mx-auto">

      <!-- Settings Section -->
      <div class="h-fit w-full bg-pGray rounded-md">
        <h1 class="p-2 px-5 py-5 font-bold text-2xl">Audio Converter</h1>

        <div class="p-5">
          <div class="grid grid-cols-1 gap-5">

            <div class="grid gap-2 grid-cols-1 bg-pdGray p-2 py-3 rounded-xl">
              <h2 class="text-pBlack text-lg px-1">Audio File</h2>
              <input class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white file:bg-pGreen file:text-white file:font-bold file:py-2 file:px-4 file:border-0 file:rounded-md"
                     type="file"
                     accept="audio/*"
                     @change="uploadFile">
            </div>

            <div class="grid grid-cols-2 gap-5">
              <div class="grid gap-2 grid-cols-1 bg-pdGray w-full p-2 py-3 rounded-xl">
                <h2 class="text-pBlack text-lg px-1">File Type</h2>
                <select v-model="FILE_TYPE" class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="compression">
                  <option value="mp3">
                    MP3
                  </option>
                  <option value="wav">
                    WAV
                  </option>
                  <option value="flac">
                    FLAC
                  </option>
                  <option value="ogg">
                    OGG
                  </option>
                </select>
              </div>
              <div class="grid gap-2 grid-cols-1 bg-pdGray w-full p-2 py-3 rounded-xl transition">
                <h2 class="text-pBlack text-lg px-1">Start Convert</h2>

                  <button type="button" @click="transcode(FILE_URL, FILE_NAME, FILE_TYPE, ORIGINAL_FILE_TYPE)" class="flex w-full justify-center py-2 px-4 bg-pGreen hover:bg-pdGreen text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" :class="isLoading ? '' : 'hidden'">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ message }}

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
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import { defineComponent } from "vue";
import { downloadFile } from "../Utils.js";

export default defineComponent({
  name: "App",
  data() {
    return {
      FILE_URL: "",
      FILE_NAME: "",
      FILE_SIZE: "",
      ORIGINAL_FILE_TYPE: "",
      FILE_TYPE: "wav",
      FILE: "",
      message: "Start Convert",
      isLoading: false,
    };
  },
  methods:{
    async transcode(file_url, name, file_type, original_file_type) {
      const ffmpeg = createFFmpeg({
        log: true,
        mainName: 'main',
        corePath: 'https://unpkg.com/@ffmpeg/core-st@0.11.1/dist/ffmpeg-core.js',
      });

      if (file_type === original_file_type) {
        alert("You can't convert to the same file type");
        return;
      }

      this.message = "Loading...";
      this.isLoading = true;
      if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
      }
      ffmpeg.FS("writeFile", name, await fetchFile(file_url));

      await ffmpeg.run('-i', name, 'EConvert-' + name + '.' + file_type);

      this.message = "Done!";
      this.isLoading = false;

      const data = ffmpeg.FS("readFile", "EConvert-" + name + "." + file_type);

      const url = URL.createObjectURL(
          new Blob([data.buffer], { type: "audio/" + file_type })
      );

      downloadFile(url, "EConvert-" + name.split('.')[0] + "." + file_type);

      ffmpeg.exit();

      this.message = "Start Convert";
    },
    uploadFile(e) {
      const file = e.target.files[0];
      this.FILE = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e =>{
        this.FILE_URL = URL.createObjectURL(file);
        this.FILE_NAME = file.name;
        this.FILE_SIZE = file.size / 1000000;
        this.ORIGINAL_FILE_TYPE = file.name.split('.')[1];
      };
    }
  },
});
</script>