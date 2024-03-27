import { CartData } from "../../page/main"

interface CupomBodyProps {
  cart: CartData[]
}

export function CupomBody({ cart }: CupomBodyProps) {
  function calculateTotalPrice() {
    let totalPrice = 0
    cart.forEach((item) => {
      if (!item.removed) {
        totalPrice += item.product.preco * item.quantity
      }
    })

    return totalPrice
  }

  const total = calculateTotalPrice()

  return (
    <>
      {cart.map((item) => {
        return (
          <tbody key={item.product.codigo}>
            <tr>
              <td className="px-1">{item.removed ? "-" : "+"}</td>
              <td className="px-1">{item.product.codigo}</td>
              <td className="px-1">{item.product.descricao}</td>
              <td className="px-1">
                {item.product.preco.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td className="px-1">{item.quantity}</td>
              <td className="px-1">
                {(item.product.preco * item.quantity).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
        )
      })}
      <tfoot>
        <tr>
          <td colSpan={6} style={{ textAlign: "right", fontWeight: "bold" }}>
            Total: R${" "}
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </td>
        </tr>
      </tfoot>
    </>
  )
}
