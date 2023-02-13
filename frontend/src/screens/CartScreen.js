import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap"
import Message from "../components/Message"
import { addToCart } from "../actions/cartActions"
import { useParams } from "react-router-dom"

const CartScreen = ({ location, history }) => {
  const productId = useParams()

  const qty = location.search
}

export default CartScreen
