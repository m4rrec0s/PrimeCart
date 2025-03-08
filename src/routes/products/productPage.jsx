import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../json/products.json";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = productsData.find(
      (product) =>
        product.id === id ||
        product.id === parseInt(id) ||
        String(product.id) === id
    );

    console.log("Produto encontrado:", foundProduct);
    setProduct(foundProduct);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Estado atual do produto:", product);

  if (loading) {
    return (
      <div className="product-page">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-page">
        <p>Produto não encontrado. ID buscado: {id}</p>
      </div>
    );
  }

  // Renderização com verificações de segurança para cada propriedade
  return (
    <div className="product-page">
      <h1>Detalhes do Produto</h1>
      <div className="product-details">
        <div className="product-image">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name || "Imagem do produto"}
            />
          ) : (
            <div className="no-image">Sem imagem disponível</div>
          )}
        </div>
        <div className="product-info">
          <h2>{product.name || "Sem nome"}</h2>
          <p className="product-description">
            {product.description || "Sem descrição"}
          </p>
          <p className="product-price">
            {product.price ? `R$ ${product.price}` : "Preço não disponível"}
          </p>
          <button className="add-to-cart-btn">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
