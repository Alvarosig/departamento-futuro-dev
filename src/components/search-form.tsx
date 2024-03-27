import { zodResolver } from "@hookform/resolvers/zod"
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  InputGroup,
} from "react-bootstrap"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CartData, Product } from "../page/main"

const productSchema = z.object({
  code: z.coerce.number().positive().min(0, { message: "Insira o código" }),
  quantity: z.coerce.number().positive().min(1, { message: "Insira um valor" }),
})

type ProductSchema = z.infer<typeof productSchema>

interface SearchFormProps {
  setCart: (cart: CartData[]) => void
  products: Product[]
  cart: CartData[]
}

export function SearchForm({ setCart, products, cart }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
  })

  function handleAddProduct(data: ProductSchema) {
    const isProductPresent = products.find((product) => {
      return product.codigo === data.code
    })

    if (isProductPresent) {
      setCart([
        ...cart,
        { product: isProductPresent, quantity: data.quantity },
      ])
    }

    reset()
  }

  return (
    <div className="container">
      <h1 className="fs-4 font-weight-bold text-center">Pesquisar Produto</h1>

      <Form
        onSubmit={handleSubmit(handleAddProduct)}
        className="row row-cols-lg-auto g-3 align-items-center justify-content-center mt-1"
        id="searchForm"
      >
        <InputGroup className="rounded-input mb-3" style={{ width: "60%" }}>
          <FormLabel
            htmlFor="code"
            style={{ marginRight: "8px", fontSize: "1rem" }}
          >
            Código do Produto:
          </FormLabel>
          <FormControl
            id="code"
            type="text"
            aria-describedby="basic-addon1"
            className="text-center"
            placeholder="Ex: 1002"
            required
            {...register("code")}
          />
          {errors.code && (
            <span className="text-danger">{errors.code.message}</span>
          )}
        </InputGroup>

        <InputGroup className="rounded-input mb-3" style={{ width: "30%" }}>
          <FormLabel htmlFor="quantity" style={{ marginRight: "8px" }}>
            Quantidade:
          </FormLabel>
          <FormControl
            id="quantity"
            type="number"
            step="1"
            min="1"
            placeholder="Ex: 1"
            datatype="number"
            className="text-center"
            required
            {...register("quantity")}
          />
          {errors.quantity && (
            <span className="text-danger">{errors.quantity.message}</span>
          )}
        </InputGroup>
      </Form>

      <div className="d-flex justify-content-center mt-2">
        <Button
          className="btn btn-secondary px-5 py-2 text-white"
          form="searchForm"
          type="submit"
        >
          ADICIONAR
        </Button>
      </div>
    </div>
  )
}
