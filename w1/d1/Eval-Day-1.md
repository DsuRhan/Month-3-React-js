2. **Memahami Perbedaan JSX dengan HTML**
   - Tuliskan penjelasan singkat mengenai perbedaan antara JSX dan HTML.
   - Sertakan contoh kode sederhana yang menunjukkan perbedaan tersebut.

*Jawab*
- JSX : syntax extension JavaScript yang mirip HTML, digunakan di React untuk menulis UI . JSX akan di-transfer oleh Node-modules menjadi JavaScript murni.

- HTML : language asli yang langsung dimengerti oleh browser, tanpa proses compile tambahan.

Perbedaan JSX dan HTML dengan output yang sama :
JSX : <pre>
<code>
// JSX di React
<div className="container">
  <h1>Hello, World</h1>
  <input type="text" />
</div>
</code>
</pre>
HTML : <pre>
<code>
<!-- HTML biasa -->
<div class="container">
  <h1>Hello, World</h1>
  <input type="text">
</div>

</code>
</pre>
3. **Menjelaskan Konsep Virtual DOM**
   - Buatlah ringkasan singkat tentang apa itu Virtual DOM dan bagaimana cara kerjanya di React.

*Jawab*
Virtual DOM adalah representasi virtual dari DOM asli yang disimpan di memori oleh React.

-Saat ada perubahan data , React membuat Virtual DOM baru.
-React lalu membandingkan Virtual DOM baru dengan yang lama.
-Hanya bagian yang berbeda yang di-update ke DOM asli (real DOM).
-Hasilnya: update UI jadi lebih cepat dan efisien dibanding langsung memanipulasi DOM setiap saat.
4. **Menjelaskan Perbedaan SPA vs MPA**
   - Tuliskan penjelasan mengenai perbedaan antara Single Page Application (SPA) dan Multi Page Application (MPA).
   - Berikan minimal 2 kelebihan dan 2 kekurangan dari masing-masing arsitektur.

   *Jawab*
   -  SPA (Single Page Application):
-Hanya ada satu halaman HTML utama.
-Navigasi antar “halaman” dilakukan dengan JavaScript (routing di sisi client).
-Konten baru dimuat via API (AJAX/Fetch), bukan dengan reload seluruh halaman.
   -  MPA (Multi Page Application):
-Setiap navigasi menuju URL baru akan me-reload seluruh halaman dari server.
-Cocok untuk aplikasi besar dengan banyak halaman independen.

-- Kelebihan & Kekurangan:

-SPA

+ User experience lebih halus (tanpa reload penuh).
+ Bisa lebih cepat setelah load awal, karena hanya data yang diambil dari server.
– SEO lebih sulit (karena konten di-render di client).
– Bundle awal cenderung besar, bisa lambat di first load.



MPA

+ SEO lebih baik (server kirim HTML lengkap).
+ Struktur lebih sederhana untuk aplikasi tradisional.
– Navigasi lambat (reload penuh tiap klik).
– Beban server lebih besar karena harus kirim halaman utuh.