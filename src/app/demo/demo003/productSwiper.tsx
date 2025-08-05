"use client"
import { Box } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import clsx from './page.module.css'

const imageSrc00 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202503?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4VEpBUDFBeEhMZS9GUnNSYXdEd0hscisrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazVVcFlOTkdoMWg4ZkdDS1ovMUlzcW8";
const imageSrc01 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-pro-202409_GEO_US?wid=800&amp;hei=1000&amp;fmt=jpeg&amp;qlt=90&amp;.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXUHpnd0VsRWFiaWRaRHRaUXBvNTNkaTN3cldHSVhIZCtHM2xVUWV5dTAvVlU4amgyYkZNZC9iNVQ4S1VDT21ldVlKWlgzZzdyUXEzcGE2bUxYbWVvdHFROE5HdXpXTzl3cVdSci8xOTZVOXo";
const imageSrc02 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyOWVOMytmanI1M0ZTQWR1RjlDMWJpNXFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVbk15N0N0R0lhUGhlMG1Tdmc3RjZVQ09NTUhYNlZ6OGxKNWpBMHlTSTlldko";
const imageSrc03 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-air-202503?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXRFJ0OFRiWngrNGllYTMvQ1dlWDBQZjZXYXJlRUd1cTBYTnRnbTNlazIvMzRHeXB5TnVsU3R6Qjd0Y2JzbURyWEdJV2RaUklyUnViT0c4OGJXRWhUTnArYWpGdS9XeFgvbS9ITnNYOEhYaG4";
const imageSrc04 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&amp;hei=1000&amp;fmt=jpeg&amp;qlt=90&amp;.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vbGtrQjBqdmhJbWlLcCtlQTMwc01SdjkvamYzRzRvcFlnajNacmhEOC9BeDE1UUxLT2t0cW42N3FvQzVqaGhrVVlSek45NHpYUG91NnZ3YmlDQlpUYnArYWpGdS9XeFgvbS9ITnNYOEhYaG4";
const imageSrc05 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16e-202502_GEO_US?wid=800&amp;hei=1000&amp;fmt=jpeg&amp;qlt=90&amp;.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXSzRWdVVUSklyLzFIUnk0cUZLSXhCWFRScHZrVGpHeDlzdWlveXRWTHp6UlJSeXJaL3JqNm9jc2psYU5Qelh0TnBVbkFCTnNoWjVEWkE2SURLL0ZUc2RITWhFWEVpNkNSNHRRNkh1eDBJS1E";
const imageSrc06 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-202503?wid=800&amp;hei=1000&amp;fmt=jpeg&amp;qlt=90&amp;.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXQUs0eUd5eURRc1MxSHJvV1NyOEwyZFR5T0hac1V4Mzl2bFB3cFFJNlo2NWdsbGZlRHV0Q3JlbHJxWXRlWjZpMm4xU2w0TkJQWUczYmhEbjM5ZUUxREU";
const imageSrc07 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-mac-studio-202503?wid=800&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyMFozSSthUWxLelAxTitDZ3M4Tk5nbm45S05qekNUdVUwMVFyK1pKaERUd3NtS0NkZnlUKzBRdlpRai9zMDR0cTA2K1VNZGNlb0hPLzMyemJjWVkyQ0JMQzBoZ1NYMmRGQ2VZWXI2YVMzc2I";
const imageSrc08 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-16-202409_GEO_US?wid=800&amp;hei=1000&amp;fmt=jpeg&amp;qlt=90&amp;.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXTzBZbG1KSFRCNEs3N1J2VHI2VE83eVcvVW04SmttNWI1emkwWW5tcUh6OTczTGJ1bkVZOVdxMC9CSUwydmQ4a0lXL2VyS2UzTWpqR2RTME5WUFdGQ1dQbHh6UVl4cENBaFg1MFlxNlFlK1k";
const imageSrc09 = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_US?wid=800&amp;hei=1000&amp;fmt=jpeg&amp;qlt=90&amp;.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vbHdYN09OOVhGMkJZZWFPTlJDYlZ0WFUvdWo0OXUzR2x0Z0haVDFBUVBIV3AwckMxbExydC8yeDhtUjlFVHdKVnRSR0liZklwWjJ2eGlOd1dxRHFuOXJWWnVyVEo4eUhscENBMForWW5nUlg";

// imageWidth:400, imageHeight:500
const carouselItems = [
  { id: 1, title: 'iPhone 16 Pro', color: '#F0F0EC', imageSrc: imageSrc01 },
  { id: 2, title: 'MacBook Air', color: '#1d1d1f', imageSrc: imageSrc02 },
  { id: 3, title: 'iPad Air', color: '#1d1d1f', imageSrc: imageSrc03 },
  { id: 4, title: 'Apple Watch Series 10', color: '#1d1d1f', imageSrc: imageSrc04 },
  { id: 5, title: 'iPhone 16e', color: '#1d1d1f', imageSrc: imageSrc05 },
  { id: 6, title: 'iPad', color: '#1d1d1f', imageSrc: imageSrc06 },
  { id: 7, title: 'Mac Studio', color: '#1d1d1f', imageSrc: imageSrc07 },
  { id: 8, title: 'iPhone 16', color: '#F0F0EC', imageSrc: imageSrc08 },
  { id: 9, title: 'Apple Watch Ultra 2', color: '#F0F0EC', imageSrc: imageSrc09 },
];

export default function ProductSwiper() {
  return (
    <Box sx={{ width: '100%', border: 'solid 1px lightgrey' }}>
      <Swiper
        className={clsx['my-product-swiper']}
        // 啟用所需的模組
        modules={[Navigation, Pagination, A11y]}
        // 啟用導航按鈕 (左右箭頭)
        navigation
        // 啟用分頁指示器 (底部小圓點)
        pagination={{ clickable: true }}
        // 是否循環播放
        loop={true}
        // RWD
        breakpoints={{
          // xs
          0: {
            slidesPerView: 1.1,
            spaceBetween: 8,
          },
          // sm
          600: {
            slidesPerView: 2.2,
            spaceBetween: 16,
          },
          // md
          900: {
            slidesPerView: 3.2,
            spaceBetween: 16,
          },
          // lg
          1200: {
            slidesPerView: 3.3,
            spaceBetween: 16,
          },
        }}
      >
        {/* 7. 使用 map 渲染輪播內容 */}
        {carouselItems.map(item => (
          <SwiperSlide key={item.id}>
            <Box sx={{ position: 'relative' }} onClick={() => window.location.assign(`https://www.google.com/search?q=${item.title}`)}>
              <Image loading="lazy" className={clsx['image-cover']} width={400} height={500} alt="" src={item.imageSrc} />
              <Box sx={{ position: 'absolute', top: 0, left: 0, m: 2 }}>
                <Box typography='h6' color={item.color}>{item.title}</Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}