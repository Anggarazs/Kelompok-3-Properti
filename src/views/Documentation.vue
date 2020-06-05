<template>
  <div class="container is-fluid">
    <section class="section">
      <div class="container">
        <h2 class="title has-text-centered">Gallery</h2>
        <div class="columns is-multiline">
          <div class="column is-4">
            <router-link :to="{ path: '/documentation/galeri1' }">
                <img src="@/img/1.jpg" alt></router-link>
          </div>
          <div class="column is-4">
            <router-link :to="{ path: '/documentation/galeri2' }">
              <img src="@/img/2.jpg" alt />
            </router-link>
          </div>
          <div class="column is-4">
            <router-link :to="{ path: '/documentation/galeri3' }">
              <img src="@/img/3.jpg" alt />
            </router-link>
          </div>
          <div class="column is-4">
            <router-link :to="{ path: '/documentation/galeri4' }">
              <img src="@/img/4.jpg" alt />
            </router-link>
          </div>
          <div class="column is-4">
            <router-link :to="{ path: '/documentation/galeri5' }">
              <img src="@/img/5.jpg" alt />
            </router-link>
          </div>
          <div class="column is-4">
            <router-link :to="{ path: '/documentation/galeri6' }">
              <img src="@/img/6.jpg" alt />
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
