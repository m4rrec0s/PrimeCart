import React from 'react';
import { useParams } from 'react-router-dom';
import produtos from '../../json/products.json'

const ProductPage = ({ produtos }) => {
    const { id } = useParams(); // Obtenha o ID do produto da URL

    // Encontre o produto correspondente ao ID na lista de produtos
    const produto = produtos.find(item => item.id.toString() === id);

    if (!produto) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div>
            <h2>{produto.nome}</h2>
            <img src={produto.imagem} alt={produto.nome} />
            <p>{produto.descricao}</p>
            <h4>R$ {produto.preco.toFixed(2)}</h4>
            {produto.parcelado ? (
                <p>Parcelamento em até {produto.parcelas}x</p>
            ) : (
                <p>À vista</p>
            )}
            <button>Adicionar ao Carrinho</button>
            <input type="number" min="1" max={produto.maxQuantidade} defaultValue="1" />
        </div>
    );
};

export default ProductPage;
