import { Col, Row } from "react-bootstrap"
import { CardCart } from "./Card-Cart/card-cart"
import { CartData } from "../page/main"

interface CartProps {
  cart: CartData[]
  removeFromCart: (itemToRemove: CartData) => void
  setCart: (cart: CartData[]) => void
}

export function Cart({ cart, removeFromCart }: CartProps) {
  return (
    <div className="container">
      <h1 className="fs-4 font-weight-bold text-center mb-3">
        Carrinho de Compras
      </h1>
      {cart.length === 0 ? (
        <p className="fs-5 text-center">
          Seu carrinho está vazio, adicione alguns produtos!
        </p>
      ) : (
        <div
          className="overflow-auto"
          style={{ maxWidth: "100%", overflowX: "auto" }}
        >
          <Row className="row-cols-auto flex-nowrap">
            {cart.map((item) => {
              return (
                <Col
                  key={item.product.codigo}
                  style={{
                    maxWidth: "12rem",
                    minWidth: "12rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  <CardCart cartItem={item} removeFromCart={removeFromCart} />
                </Col>
              )
            })}
          </Row>
        </div>
      )}
    </div>
  )
}
