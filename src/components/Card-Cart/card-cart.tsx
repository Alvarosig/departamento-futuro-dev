import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "react-bootstrap"
import { CartData } from "../../page/main"

interface CardCartProps {
  cartItem: CartData
  removeFromCart: (item: CartData) => void
}

export function CardCart({ cartItem, removeFromCart }: CardCartProps) {
  return (
    <Card className="pt-4 px-3">
      <CardImg
        variant="top"
        src={cartItem.product.imagem}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          margin: "0 auto",
        }}
      />
      <span className="text-center">cód: {cartItem.product.codigo}</span>

      <CardBody>
        <CardTitle className="text-center text-truncate mb-1">
          {cartItem.product.descricao}
        </CardTitle>
        <CardText className="text-center text-truncate mb-1">
          Marca: {cartItem.product.marca}
        </CardText>
        <CardText
          className="text-center text-truncate mb-1"
          style={{ fontStyle: "italic" }}
        >
          {cartItem.product.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </CardText>
        <CardText className="text-center text-truncate">
          Qtde.: {cartItem.quantity}
        </CardText>
        
        <div className="d-flex justify-content-center">
          <Button variant="secondary" onClick={() => removeFromCart(cartItem)}>
            Remover
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
