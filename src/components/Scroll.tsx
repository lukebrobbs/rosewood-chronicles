import React, { FunctionComponent } from "react"

interface ILinkProps {
  to: string
  block?: ScrollLogicalPosition
}

interface IElementProps {
  name: string
}

export const Link: FunctionComponent<
  ILinkProps & React.HTMLAttributes<HTMLAnchorElement>
> = props => {
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

export const Element: FunctionComponent<
  IElementProps & React.HTMLAttributes<HTMLDivElement>
> = props => {
  return <div {...props} />
}
