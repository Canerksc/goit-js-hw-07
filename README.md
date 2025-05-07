JavaScript DOM Manipulation Tasks

Bu proje, JavaScript kullanarak temel DOM (Document Object Model) manipülasyonu pratikleri içerir. Her görev, farklı kullanıcı etkileşimlerini yönetmek ve sayfa içeriğini dinamik olarak değiştirmek üzerine odaklanır.

✏️ Görev 1: Kategori Listesi Analizi

Amaç:

DOM üzerinden kategori sayısını bulma

Her kategori için başlık ve içindeki öğe sayısını yazdırma

Örnek Konsol Çıktısı:

Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5

🖼️ Görev 2: Resim Galerisi

Amaç:

Verilen bir diziye göre resim galerisi oluşturmak

Tek adımda DOM'a eklemek

CSS ile temel flexbox düzeni

Gereksinimler:

<ul class="gallery"> içine <li> ve <img> etiketleri eklenmeli

insertAdjacentHTML() ya da createElement() kullan

Flexbox ile galeri tasarla

🧵 Görev 3: Selamla Kullanıcı

Amaç:

Kullanıcı input yazarken adını selamlama mesajına yazmak

Boş bırakırsa "Anonymous" göstermek

HTML:

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

Özellik:

trim() ile boşluklar temizlenir

input olayı dinlenir

📆 Görev 4: Giriş Formu Doğrulama

Amaç:

Form gönderilirken inputları kontrol etmek

Boşsa alert göstermek, doluysa değerleri nesneye aktarmak ve konsola yazdırmak

HTML:

<form class="login-form">
  <label>Email<input type="email" name="email" /></label>
  <label>Password<input type="password" name="password" /></label>
  <button type="submit">Log in</button>
</form>

🌟 Görev 5: Arka Plan Rengi Değiştir

Amaç:

Butona tıklayınca sayfanın arka plan rengini değiştirmek

Aynı rengi <span class="color"> içine yazmak

Fonksiyon:

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

🛏️ Görev 6: Dinamik Kutular Oluştur

Amaç:

Kullanıcının belirlediği kadar kutu oluşturmak ve temizlemek

Boyutlar her kutuda 10px artar

Arka plan renkleri rastgele belirlenir

HTML:

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>
<div id="boxes"></div>

Fonksiyonlar:

createBoxes(amount) → DOM'a kutuları ekler

destroyBoxes() → kutuları temizler
