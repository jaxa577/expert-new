<script></script>

<template>
  <div class="backg_animation">
    <img class="backg_image" src="/images/back_circle.svg" alt="" />
  </div>
</template>

<style scoped>
.backg_animation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(-20%);
  animation: pulse-animation 8s infinite;
  z-index: -1;
}
.backg_image {
  transition: all 0.7s ease-in-out;
  opacity: 0.6;
}

@keyframes pulse-animation {
  0% {
    transform: translateX(-20%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateX(-20%) scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: translateX(-20%) scale(1);
    opacity: 1;
  }
}
</style>
