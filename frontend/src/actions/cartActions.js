import { useParams } from "react-router-dom"
import axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants"

export const addToCart = (qty) => async (dispatch, getState) => {
  const { id } = useParams()
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
