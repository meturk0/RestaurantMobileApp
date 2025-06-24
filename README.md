# Restoran Uygulaması

Bu proje, React Native ve Expo kullanılarak geliştirilmiş bir restoran arama uygulamasıdır. Kullanıcılar, Yelp API üzerinden İstanbul'daki restoranları arayabilir, fiyat aralığına göre filtreleyebilir ve detaylarını görüntüleyebilir.

## Özellikler
- Restoran arama (Yelp API ile)
- Fiyat aralığına göre filtreleme (Ucuz, Uygun, Pahalı)
- Restoran detaylarını ve fotoğraflarını görüntüleme
- Modern ve kullanıcı dostu arayüz

## Ekranlar ve Bileşenler
- **SearchScreen:** Arama çubuğu ve sonuç listeleri
- **ResultsShowScreen:** Seçilen restoranın detayları ve fotoğrafları
- **SearchBar:** Arama terimi girişi
- **ResultsList:** Fiyat aralığına göre restoran listesi
- **ResultDetail:** Restoran kartı (isim, puan, görsel)
- **useResults:** Restoran arama için özel hook

## Kurulum
1. **Depoyu klonlayın:**
   ```bash
   git clone <repo-url>
   cd restoran
   ```
2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
3. **Projeyi başlatın:**
   ```bash
   npm start
   ```
   veya
   ```bash
   expo start
   ```

4. **Uygulamayı cihazda çalıştırın:**
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

## Yelp API Anahtarı Hakkında
- Projede `api/yelp.js` dosyasında bir Yelp API anahtarı gömülü olarak bulunmaktadır.
- **Güvenlik için kendi API anahtarınızı kullanmanız ve bu anahtarı gizli tutmanız önerilir.**
- Kendi anahtarınızı almak için [Yelp Developers](https://www.yelp.com/developers/v3/manage_app) üzerinden kayıt olabilirsiniz.
- Anahtarı aldıktan sonra `api/yelp.js` dosyasındaki `Authorization` kısmını güncelleyin:
  ```js
  headers: {
    Authorization: 'Bearer <YOUR_API_KEY>',
  },
  ```

## Kullanılan Teknolojiler
- React Native
- Expo
- React Navigation
- Axios
- Yelp Fusion API

## Uygulama Resimleri
![image alt](https://github.com/meturk0/RestaurantMobileApp/blob/9001754b97038cdb873cc97b3924fdb8f88ee5a7/1.png)
![image alt](https://github.com/meturk0/RestaurantMobileApp/blob/9001754b97038cdb873cc97b3924fdb8f88ee5a7/2.png)
![image alt](https://github.com/meturk0/RestaurantMobileApp/blob/9001754b97038cdb873cc97b3924fdb8f88ee5a7/3.png)
![image alt](https://github.com/meturk0/RestaurantMobileApp/blob/9001754b97038cdb873cc97b3924fdb8f88ee5a7/4.png)

