<template>
  <section class="section">
    <div class="columns">
      <div class="column is-7">
        <!--gambar-->
        <figure class="image">
          <img src="@/img/1.jpg" />
        </figure>
        <br />
        <section class="section-kiri">
          <p>
            <span class="title is-2">CLUSTER CONDOTEL</span>
          </p>
          <br />
          <p class="content">
            KULDEVEE CLUSTER, hunian eksklusif premium yang menghadirkan atmosfer CONTEMPORARY HOMES UPPER-CLAS
            LIVING.
            Kawasan seluas 2,3 Ha ini merupakan masterpiece dari Abdael Nusa Group di area Joglo-Meruya
            Selatan,
            Sebuah Green Concept yang secara Khusus diciptakan untuk keluarga urban modern yang mendambakan
            sebuah
            hunian yang berkualitas. LARGE-SCALE GREEN AREA Dikembangkan secara eksklusif hanya 112 rumah,
            CLOVER
            HILL merupakan private cluster eksklusif dengan jalan yang lebar, lingkungan tenang dan teduh
            ditengah
            hiruk pikuk perkotaan, serta derail elemen landscape yang menyatu mulai main gate, jalan, taman,
            dan
            lingkungan.
          </p>
          <komen></komen>
        </section>
      </div>
      <div class="container">
        <section class="section-padding">
          <h3 class="title is-5">Marketing Galeri</h3>
          <a>
            <span class="icon is-small">
              <i class="fas fa-phone"></i>
            </span>
            +6281231347777
          </a>
          <p>
            <span class="icon is-small">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            Jl. Banggeris Kec. Sungai Kunjang, Kota Samarinda, Kalimantan Timur
          </p>
        </section>
        <br />
        <section class="section-padding">
          <h3 class="title is-5">Details</h3>
          <p>
            Kamar Tidur:
            <b>8</b>
          </p>
          <p>
            Kamar Mandi:
            <b>8</b>
          </p>
          <p>
            Jumlah Lantai:
            <b>2</b>
          </p>
          <p>
            Bangunan(m2):
            <b>70</b>
          </p>
          <p>
            Lahan(m2):
            <b>100</b>
          </p>
        </section>
        <br />
        <section class="section-padding">
          <h3 class="title is-5">Fasilitas</h3>
          <p>Free Wifi</p>
          <p>Keamanan 24 Jam</p>
          <p>Taman Bermain</p>
          <p>Kolam Berenang</p>
        </section>
        <br />
        <section class="section-padding">
          <h3 class="title is-5">Lokasi</h3>
          <figure class="image is-flex">
            <iframe
              class="his-ratio"
              frameborder="0"
              allowfullscreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.670172727504!2d117.12091361366285!3d-0.4937529996397579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67ee479ff5103%3A0xac289cc22fdc5061!2sJl.%20Banggeris%2C%20Kec.%20Sungai%20Kunjang%2C%20Kota%20Samarinda%2C%20Kalimantan%20Timur%2075243!5e0!3m2!1sen!2sid!4v1582127164119!5m2!1sen!2sid"
            ></iframe>
          </figure>
        </section><br>
        <section class="section-paddingless">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                    <figure class="image is-48x48">
                        <img src="@/img/avatar.jpeg">
                    </figure>
                    </div>
                    <div class="media-content">
                    <p class="title is-4">Anggara Azis Saputra</p>
                    <p class="subtitle is-6 has-text-primary">Premium User</p>
                    </div>
                </div>
                    <a href="https://api.whatsapp.com/send?phone=6282151510448&text=Saya%20ingin%20bertanya%20apakah%20properti%20ini%20masih%20tersedia?">
                        <b-button class="button is-primary">
                            <span class="b-icon is-small">
                            <i class="fab fa-whatsapp"></i>
                            </span>
                            <span>CHAT SEKARANG</span>
                        </b-button>
                    </a>
            </div>
        </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import Komen from '@/components/Komen.vue'

export default {
  name: 'Rumah1',
  components: {
    Komen
  }
}
</script>
