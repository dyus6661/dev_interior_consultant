<template>
  <header class="header text-white">
    <div class="container mx-auto px-4">
      <nav id="navigation">
        <div
          class="
            fixed
            top-0
            inset-x-0
            px-4
            md:px-0
            bg-gray-dark
            shadow-md
            md:shadow-none md:relative
            flex
            justify-between
            items-start
            py-5
            md:py-10
            z-10
          "
        >
          <a
            href="#"
            class="
              logo
              p-2
              uppercase
              text-sm
              font-crimson-pro font-extralight
              border border-white
              transition-colors
              duration-300
              hover:bg-white hover:text-gray-dark
            "
            >This Interior</a
          >
          <button
            id="nav-toggle-btn"
            class="
              absolute
              top-5
              right-4
              flex-none flex
              md:hidden
              justify-center
              items-center
              w-9
              h-9
            "
            type="button"
            @click="isNavOpen = true"
          >
            <span class="material-icons text-4xl"> menu </span>
          </button>
          <div
            class="nav-links hidden md:flex items-center text-lg leading-snug"
          >
            <a href="#" class="nav-item">Home</a>
            <a href="#" class="nav-item md:ml-20">Collection</a>
            <a href="#" class="nav-item md:ml-20">About</a>
            <a href="#" class="nav-item md:ml-20">Contact</a>
          </div>
        </div>
        <transition name="nav">
          <div
            id="mobile-menu"
            class="w-screen h-screen bg-gray-dark flex-col fixed inset-0 z-10"
            v-if="isNavOpen"
          >
            <div class="relative w-full h-full">
              <button
                class="
                  absolute
                  top-5
                  right-4
                  flex-none flex
                  justify-center
                  items-center
                  w-9
                  h-9
                "
                type="button"
                @click="isNavOpen = false"
              >
                <span class="material-icons text-4xl"> close </span>
              </button>
              <div
                class="
                  nav-links
                  flex flex-col
                  justify-center
                  items-center
                  h-full
                "
              >
                <a href="#" class="nav-item">Home</a>
                <a href="#" class="nav-item mt-8">Collection</a>
                <a href="#" class="nav-item mt-8">About</a>
                <a href="#" class="nav-item mt-8">Contact</a>
              </div>
            </div>
          </div>
        </transition>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
    };
  },
  watch: {
    /**
     * @param {Boolean} val - Current value of the nav state
     */
    isNavOpen(val) {
      if (val) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
};
</script>
<style scoped>
.nav-enter-active,
.nav-leave-active {
  transition: transform 0.3s;
}

.nav-enter-active {
  transform: translateY(0%);
}

.nav-enter {
  transform: translateY(-100%);
}

.nav-leave {
  transform: translateY(0%);
}

.nav-leave-active {
  transform: translateY(-100%);
}
</style>