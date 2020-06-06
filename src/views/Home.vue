<template>
  <div class="home">
    <section class="hero is-medium">
      <div class="hero-body" :style="{'background-image': `url(${require('@/img/Hero.jpg')})`}">
        <div class="section has-text-centered">
          <h1 class="title is-size-1 is-1 has-text-white">eiddo Properti</h1>
          <form class="field has-addons-centered has-addons is-multiline">
            <div class="control has-icons-left is-medium is-clearfix is-expanded">
              <input
                class="input is-rounded"
                type="text"
                v-model="searchString"
                placeholder="Masukkan Jenis Properti, Alamat atau Deskripsi"
              />
              <span class="icon is-left">
                <i class="fas fa-search"></i>
              </span>
            </div>
          </form>
          <p class="has-text-white">eiddo Properti Terpercaya Nomor Satu di Indonesia</p>
        </div>
      </div>
    </section>
    <section class="section">
      <cardrekomen></cardrekomen>
    </section>
    <section class="section">
      <properti></properti>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Cardrekomen from '@/components/Cardrekomen.vue'
import Properti from '@/components/Properti.vue'

export default {
  name: 'Home',
  components: {
    Cardrekomen,
    Properti
  }
}
</script>
<style lang="scss" scoped>
</style>
