import Banner from "../components/banner";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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
                                    <Link key={produto.id} to={`/page-product/${produto.id}`} className="iten">
                                        {/* Renderize o conteúdo da div como um Link para a página do produto */}
                                        <h3 className="truncate-text">{produto.nome}</h3>
                                        <img src={produto.imagem} alt={produto.nome} />
                                        <p>{produto.descricao}</p>
                                        <h4>R$ {produto.preco.toFixed(2)}</h4>
                                    </Link>
                                ))}
                            </div>

                            <div className="inspired">
                                <h2>Inspirado no último visto</h2>
                                <div className="box-products">
                                    {produtos.slice(6).map(produto => (
                                        <Link key={produto.id} to={`/page-product/${produto.id}`} className="product">
                                            {/* Renderize o conteúdo da div como um Link para a página do produto */}
                                            <h3 className="truncate-text">{produto.nome}</h3>
                                            <img src={produto.imagem} alt={produto.nome} />
                                            <p>{produto.descricao}</p>
                                            <h4>R$ {produto.preco.toFixed(2)}</h4>
                                        </Link>
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