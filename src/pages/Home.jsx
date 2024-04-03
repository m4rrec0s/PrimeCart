import { useState, useEffect } from 'react';
import Banner from "../components/banner";
import '../styles/Home.css'

function Home() {
    const [gradientTop, setGradientTop] = useState(130);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            let gradientTopValue;

            if (windowWidth <= 1130) {
                gradientTopValue = 300;
            } else {
                gradientTopValue = Math.max(0, windowWidth - 725) * 0.30 + 130;
            }
    
            setGradientTop(gradientTopValue);
        };
    
        window.addEventListener('resize', handleResize);
  
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        }, []
    );

    return (

        <>
            <div className="container-center">
                <Banner />
                <div className="content" style={{ top: gradientTop }}>
                    <div className="center">
                        <section id="part-1">
                            <div className="recents">
                                <div className="iten">
                                    <h3>Visto recentemente</h3>
                                </div>
                                <div className="iten">
                                    <h3>Visto recentemente</h3>
                                </div>
                                <div className="iten">
                                    <h3>Visto recentemente</h3>
                                </div>
                                <div className="iten">
                                    <h3>Visto recentemente</h3>
                                </div>
                                <div className="iten">
                                    <h3>Visto recentemente</h3>
                                </div>
                                <div className="iten">
                                    <h3>Visto recentemente</h3>
                                </div>
                            </div>
                            <div className="inspired">
                                <h2>Inspirado no último visto</h2>
                                <div className="box-products">
                                    <div className="product">
                                        <span>
                                            <p>Product description</p>
                                        </span>
                                        <h3>R$ 9,99</h3>
                                    </div>
                                    <div className="product">
                                        <span>
                                            <p>Product description</p>
                                        </span>
                                        <h3>R$ 9,99</h3>
                                    </div>
                                    <div className="product">
                                        <span>
                                            <p>Product description</p>
                                        </span>
                                        <h3>R$ 9,99</h3>
                                    </div>
                                    <div className="product">
                                        <span>
                                            <p>Product description</p>
                                        </span>
                                        <h3>R$ 9,99</h3>
                                    </div>
                                    <div className="product">
                                        <span>
                                            <p>Product description</p>
                                        </span>
                                        <h3>R$ 9,99</h3>
                                    </div>
                                    <div className="product">
                                        <span>
                                            <p>Product description</p>
                                        </span>
                                        <h3>R$ 9,99</h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="part-2">
                            <div className="recents"></div>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;