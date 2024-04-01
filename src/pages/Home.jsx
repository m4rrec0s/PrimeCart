import Banner from "../components/banner";
import '../styles/Home.css'

function Home() {
    return (
        <>
            <div className="container-center">
                <Banner />
                <div className="content-center">
                    <div className="gradient"></div>
                    <section>
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
                                <div className="product"></div>
                                <div className="product"></div>
                                <div className="product"></div>
                                <div className="product"></div>
                                <div className="product"></div>
                                <div className="product"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home;