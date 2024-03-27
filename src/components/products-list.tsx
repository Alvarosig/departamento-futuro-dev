import { Product } from "../page/main"

interface ProductsListProps {
  products: Product[]
}

export function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="container">
      <h1 className="fs-4 font-weight-bold text-center">Produtos</h1>
      {products.map((produto) => {
        return (
          <p key={produto.codigo}>
            {produto.codigo} - {produto.descricao} - marca {produto.marca} -{" "}
            {produto.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        )
      })}
    </div>
  )
}
