import { Col, Container, Row } from "react-bootstrap"
import { Header } from "../components/header"
import { ProductsList } from "../components/products-list"
import { SearchForm } from "../components/search-form"
import { Cart } from "../components/cart"
import { Cupom } from "../components/cupom"
import { useEffect, useState } from "react"
import produtos from "../../public/produtos.json"

export interface Product {
  codigo: number
  descricao: string
  marca: string
  preco: number
  imagem?: string | undefined
}

export interface CartData {
  product: Product
  quantity: number
  removed?: boolean
}

export function Main() {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartData[]>([])
  const [removedCart, setRemovedCart] = useState<CartData[]>([])

  useEffect(() => {
    loadProducts()
  }, [])

  function loadProducts() {
    setTimeout(() => {
      setProducts(produtos)
    }, 1000)
  }

  function removeFromCart(itemToRemove: CartData) {
    const newCart = cart.filter(
      (item) => item.product.codigo !== itemToRemove.product.codigo
    )
    setCart(newCart)
    setRemovedCart([...removedCart, { ...itemToRemove, removed: true }])
  }

  return (
    <Container fluid className="bg-light min-vh-100 p-0 m-0 lg-overflow-hidden overflow-x-hidden">
      <Header />
      <div className="d-flex justify-content-center">
        <Row className="flex-grow-1 vh-100">
          <Col md={3} className="border-end border-secondary-subtle p-0">
            <div className="p-3 vh-100">
              <ProductsList products={products} />
            </div>
          </Col>

          <Col md={6}>
            <Row>
              <Col className="p-0">
                <div className="p-4 mb-3 border-bottom border-secondary-subtle">
                  <SearchForm
                    setCart={setCart}
                    products={products}
                    cart={cart}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="p-3">
                  <Cart cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
                </div>
              </Col>
            </Row>
          </Col>
          
          <Col md={3} className="border-start border-secondary-subtle p-0">
            <div className="bg-warning-subtle vh-100 p-3 overflow-hidden">
              <Cupom cart={[...cart, ...removedCart]}/>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
