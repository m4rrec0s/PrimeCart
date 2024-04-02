import Banner from "../components/banner";
import '../styles/Home.css'

function Home() {
    return (
        <>
            <div className="container-center">
                <Banner />
                <div className="content">
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