import Img from "gatsby-image"
import React, { FunctionComponent, useEffect } from "react"
import { ShopProps } from "../../types"
import "./shop.scss"

const Shop: FunctionComponent<ShopProps> = props => {
  useEffect(() => {
    document.getElementById("booksWrapper").scrollTo(120, 0)
  }, [])
  return (
    <div className="shop__wrapper">
      <h1 className="shop__header">{props.pageData.edges[0].node.header}</h1>
      <div className="shop__books__wrapper" id="booksWrapper">
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
        ROSEWOOD MERCHANDISE
      </a>
      <a
        className="shop__link button"
        href="https://www.penguin.co.uk/series/roschron/the-rosewood-chronicles.html"
        target="__blank"
      >
        ROSEWOOD BOOKS
      </a>
    </div>
  )
}

export default Shop
