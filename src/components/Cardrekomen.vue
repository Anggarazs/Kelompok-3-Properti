<template>
  <div class="columns is-multiline is-centered">
    <div class="src column is-12-mobile is-6-tablet is-6-desktop">
      <div class="card is-shadowless bundar">
        <div class="card-image">
          <figure class="image">
            <!--rumah1-->
              <router-link :to="{ path: '/rumah1' }">
                <img src="@/img/1.jpg">
              </router-link>
          </figure>
        </div>
        <div class="result card-content">
          <div class="content">
            <p>
              <span class="title is-4 is-capitalized">
                <a class="has-text-black">CLUSTER CONDOTEL</a>
              </span>
              <br>
              <span class="block">Jl. Banggeris</span>
            </p>
            <p>
              Hadir dengan rumah hasil buah karya desainer ternama yang th hasil buah karya desainer
              ternama yang terinspirasi dari alam
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="src column is-12-mobile is-6-tablet is-6-desktop">
      <div class="card is-shadowless bundar">
        <div class="card-image">
          <figure class="image">
            <!--rumah 2-->
            <router-link :to="{ path: '/rumah1' }">
              <img src="@/img/2.jpg" class="bundar">
            </router-link>
          </figure>
        </div>
        <div class="result card-content">
          <div class="content">
            <p>
              <span class="title is-4 is-capitalized">
                <a href="rumah2.html" class="has-text-black">YUKATA SUITES</a>
              </span>
              <br />
              <span class="block">Jl. P. Antasari</span>
            </p>
            <p>Menggabungkan beberapa elemen alam seperti Tanah, air, angin, kayu yang dapat menimbulkan rasa nyaman</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
