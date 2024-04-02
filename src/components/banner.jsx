import { useState, useEffect } from 'react';
import '../styles/Banner.css';
import banner1 from '../assets/banners/pascoa-banner.jpg'
import banner2 from '../assets/banners/cyber-sale-banner.jpg'
import banner3 from '../assets/banners/eletronics-banner.jpg'
import banner4 from '../assets/banners/primecart-banner.jpg'

const banners = [
    banner1,
    banner2,
    banner3,
    banner4
]

function Banner() {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const [gradientTop, setGradientTop] = useState(130);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentBannerIndex(prevIndex =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const handleResize = () => {
          const windowWidth = window.innerWidth;
          const gradientTopValue = Math.max(0, windowWidth - 725) * 0.222 + 130;
          setGradientTop(gradientTopValue);
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
          window.removeEventListener('resize', handleResize);
      };
      }, []
    );

    return (
        <div className="banner-container">
            <div className="banner" style={{ backgroundImage: `url(${banners[currentBannerIndex]})`}}>
                <a href="#"></a>
            </div>
            <div className="gradient" style={{ top: gradientTop }}></div>
        </div>
    );
}

export default Banner;