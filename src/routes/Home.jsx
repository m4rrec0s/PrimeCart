import Banner from "../components/banner";
import { useState, useEffect } from "react";
import '../styles/Home.css'
import productsData from '../json/products.json'

function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        setProdutos(productsData);
    }, []);

    return (

        <>
            <div className="container-center">
                <Banner />
                <div className="content">
                    <div className="center">
                        <section id="part-1">
                            <div className="recents">
                                {produtos.slice(0, 6).map(produto => (
                                    <div key={produto.id} className="iten">
                                        <div className="picture"><img src={produto.imagem} alt={produto.nome} /></div>
                                        <h3 className="truncate-text">{produto.nome}</h3>
                                        <p>{produto.descricao}</p>
                                        <h4>R$ {produto.preco.toFixed(2)}</h4>
                                    </div>
                                ))}
                            </div>

                            <div className="inspired">
                                <h2>Inspirado no último visto</h2>
                                <div className="box-products">
                                    {produtos.slice(6).map(produto => (
                                        <div key={produto.id} className="product">
                                            {/* Aplica a classe de estilo ao nome do produto */}
                                            <div className="picture"><img src={produto.imagem} alt={produto.nome} /></div>
                                            <h3 className="truncate-text">{produto.nome}</h3>
                                            <p>{produto.descricao}</p>
                                            <h4>R$ {produto.preco.toFixed(2)}</h4>
                                        </div>
                                    ))}
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