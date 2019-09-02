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
    const navHeight = document.getElementById("responsive-navbar-nav")
      .offsetHeight
    const top =
      navHeight > 100
        ? element.offsetTop -
          document.getElementById("navbar").offsetHeight +
          navHeight
        : element.offsetTop - document.getElementById("navbar").offsetHeight
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        left: 0,
        top,
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
