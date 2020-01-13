import React, { FunctionComponent } from "react"

interface LinkProps {
  to: string
  block?: ScrollLogicalPosition
}

interface ElementProps {
  name: string
}

export const Link: FunctionComponent<LinkProps &
  React.HTMLAttributes<HTMLAnchorElement>> = props => {
  const handleClick = () => {
    const element = document.getElementsByName(props.to)[0]
    const top =
      element.offsetTop - document.getElementById("navbar").offsetHeight
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top,
      })
    }
  }

  return (
    <a
      {...props}
      onClick={e => {
        props.onClick(e)
        handleClick()
      }}
    >
      {props.children}
    </a>
  )
}

export const Element: FunctionComponent<ElementProps &
  React.HTMLAttributes<HTMLDivElement>> = props => {
  return <div {...props} />
}
