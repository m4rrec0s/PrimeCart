import Banner from "../components/banner";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import productsData from "../json/products.json";
import { Link } from "react-router-dom";

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
              <div className="container-recents">
                <div className="recents">
                  {produtos.slice(0, 6).map((produto) => (
                    <Link
                      to={`/products/${produto.id}`}
                      key={produto.id}
                      className="product"
                    >
                      <div className="iten">
                        <div className="picture">
                          <img src={produto.image} alt={produto.name} />
                        </div>
                        <h3 className="truncate-text">{produto.name}</h3>
                        <p>{produto.description}</p>
                        <h4>
                          R$ {produto.price ? produto.price.toFixed(2) : "0.00"}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* <div className="inspired">
                <h2>Inspirado no último visto</h2>
                <div className="box-products">
                  {produtos.slice(6).map((produto) => (
                    <div key={produto.id} className="product">
                      <div className="picture">
                        <img src={produto.image} alt={produto.name} />
                      </div>
                      <h3 className="truncate-text">{produto.name}</h3>
                      <p>{produto.description}</p>
                      <h4>
                        R$ {produto.price ? produto.price.toFixed(2) : "0.00"}
                      </h4>
                    </div>
                  ))}
                </div>
              </div> */}
            </section>
            <section id="part-2">
              <div className="recents"></div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
