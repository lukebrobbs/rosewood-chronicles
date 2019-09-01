import Img from "gatsby-image"
import React, { FunctionComponent } from "react"
import { IShopProps } from "../../types"
import "./shop.scss"

const Shop: FunctionComponent<IShopProps> = props => {
  return (
    <div className="shop__wrapper">
      <h1 className="shop__header">{props.pageData.edges[0].node.header}</h1>
      <div className="shop__books__wrapper">
        {props.pageData.edges[0].node.books.map(book => {
          return (
            <a
              key={book.bookName}
              className="shop__book"
              target="__blank"
              href={book.link}
            >
              <Img fluid={book.bookImage.fluid} />
              <Img fluid={book.reflectionImage.fluid} />
            </a>
          )
        })}
      </div>
      <a
        className="shop__link button"
        href={props.pageData.edges[0].node.shopButtonLink}
        target="__blank"
      >
        SHOP NOW
      </a>
    </div>
  )
}

export default Shop
