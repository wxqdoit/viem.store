<script setup lang="ts">
import { VPButton, VPSponsors } from 'vitepress/theme'
import { sponsors } from '../sponsors'
</script>

<template>
  <section class="VPHomeSponsors">
    <div class="container">
      <div class="sponsors">
        <VPSponsors :data="sponsors" />
      </div>

      <div class="action">
        <VPButton
          theme="sponsor"
          text="成为赞助商"
          href="https://github.com/sponsors/wagmi-dev"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.VPHomeSponsors {
  margin-top: 0 !important;
  background-color: var(--vp-c-bg);
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.love {
  margin: 0 auto;
  width: 28px;
  height: 28px;
  color: var(--vp-c-text-3);
}

.icon {
  width: 28px;
  height: 28px;
  fill: currentColor;
}

.message {
  margin: 0 auto;
  padding-top: 10px;
  max-width: 320px;
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.sponsors {
  padding-top: 32px;
}

.action {
  padding-top: 40px;
  text-align: center;
}
</style>

<style>
.vp-sponsor-grid.big .vp-sponsor-grid-image {
  transform: scale(1.5);
}
</style>
