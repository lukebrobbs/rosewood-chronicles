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
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: props.block || "center",
      })
    }
  }

  return (
    <a {...props} onClick={handleClick}>
      {props.children}
    </a>
  )
}

export const Element: FunctionComponent<
  IElementProps & React.HTMLAttributes<HTMLDivElement>
> = props => {
  return <div {...props} />
}
