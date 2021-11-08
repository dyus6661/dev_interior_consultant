<template>
  <main>
    <div class="container mx-auto px-4 mt-10 lg:mt-36 pb-3 md:pb-9">
      <div class="hero flex flex-col lg:flex-row md:justify-between">
        <div
          class="
            w-full
            max-w-xs
            flex flex-col
            items-start
            xl:mt-40
            lg:mt-12
            xl:mr-24
            md:max-w-md
          "
        >
          <h1
            class="
              text-white text-4xl
              xl:text-5xl
              md:text-4xl
              font-lora font-medium
              leading-10
            "
          >
            Modern interior
          </h1>
          <p
            class="
              mt-6
              text-white text-sm
              xl:text-2xl
              md:text-xl
              max-w-[15.625rem]
              md:max-w-sm
            "
          >
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </p>
          <a
            href="#"
            class="
              mt-6
              inline-flex
              items-center
              text-white text-sm
              xl:text-lg
              md:text-base
              font-bold
            "
          >
            Read more
            <span class="material-icons ml-4"> trending_flat </span>
          </a>
        </div>
        <div class="mt-6 lg:mt-0 w-full flex flex-1 flex-col">
          <div class="relative">
            <img src="~/assets/images/photo1.png" alt="" />
          </div>
          <div
            class="
              bg-gray-dark
              shadow-md
              w-full
              max-w-[18.75rem]
              md:max-w-[25.625rem]
              ml-auto
              pt-3
              pb-6
              px-5
              md:pt-4 md:pb-8 md:px-7
              transform
              -translate-x-3 -translate-y-12
              md:-translate-x-6 md:-translate-y-20
            "
          >
            <div class="flex flex-col">
              <div class="flex">
                <div class="mr-3">
                  <img
                    class="rounded-full w-9 h-9 md:w-12 md:h-12"
                    src="~/assets/images/photo2.png"
                    alt=""
                  />
                </div>
                <div>
                  <p class="text-white text-xs">Aliza Webber</p>
                  <span class="text-gray text-xs">Interior designer</span>
                </div>
              </div>
              <div class="mt-5">
                <h3
                  class="
                    font-lora font-bold
                    text-white text-lg
                    md:text-2xl
                    leading-6
                  "
                >
                  Designed in 2020 by Aliza Webber
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>