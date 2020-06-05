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
            <a href="#">
              <img src="@/img/3.jpg" alt />
            </a>
          </div>
          <div class="column is-4">
            <a href="#">
              <img src="@/img/4.jpg" alt />
            </a>
          </div>
          <div class="column is-4">
            <a href="#">
              <img src="@/img/5.jpg" alt />
            </a>
          </div>
          <div class="column is-4">
            <a href="#">
              <img src="@/img/6.jpg" alt />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
