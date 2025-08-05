"use client"
import { Box } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import clsx from './page.module.css'

const carouselItems = [
  { id: 1, title: 'Slide 1', color: '#ff7e5f' },
  { id: 2, title: 'Slide 2', color: '#feb47b' },
  { id: 3, title: 'Slide 3', color: '#ffb6b9' },
  { id: 4, title: 'Slide 4', color: '#ee7e5f' },
  { id: 5, title: 'Slide 5', color: '#edd47b' },
  { id: 6, title: 'Slide 6', color: '#eeb6b9' },
  { id: 7, title: 'Slide 7', color: '#dd7e5f' },
  { id: 8, title: 'Slide 8', color: '#dcb47b' },
  { id: 9, title: 'Slide 9', color: '#ddb6b9' },
];

export default function SwiperSample() {
  return (
    <Box sx={{ width: '100%', border: 'solid 1px red' }}>
      <Swiper
        className={clsx['my-dynamic-swiper']}
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
          // 當視窗寬度大於等於 0px 時
          0: {
            slidesPerView: 1.1,
            spaceBetween: 8,
          },
          // 當視窗寬度大於等於 640px 時
          600: {
            slidesPerView: 2.2,
            spaceBetween: 16,
          },
          // 當視窗寬度大於等於 1024px 時
          900: {
            slidesPerView: 3.3,
            spaceBetween: 24,
          },
        }}
      >
        {/* 7. 使用 map 渲染輪播內容 */}
        {carouselItems.map(item => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                backgroundColor: item.color,
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '2rem',
                borderRadius: '8px',
              }}
            >
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}