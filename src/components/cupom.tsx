import { CartData } from "../page/main"
import { CupomBody } from "./Cupom-table-body/cupom-body"

interface CupomProps {
  cart: CartData[]
}

export function Cupom({ cart }: CupomProps) {
  return (
    <div className="container">
      <h1 className="fs-4 font-weight-bold text-center">Cupom Fiscal</h1>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th className="px-1">op</th>
              <th className="px-1">cód</th>
              <th className="px-1">produto</th>
              <th className="px-1">preço unit</th>
              <th className="px-1"> qtd</th>
              <th className="px-1">preço</th>
            </tr>
          </thead>
          <CupomBody cart={cart} />
        </table>
      </div>
    </div>
  )
}
