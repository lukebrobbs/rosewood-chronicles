import React, { useEffect, useReducer } from "react"
import { Element } from "react-scroll"
import TitleLogo from "../images/TitleLogo"
import "./home.scss"

export const homeReducer = (state: any, action: any): any => {
  switch (action.type) {
    case "SET_LAST_WINDOW_POSITION":
      return {
        lastWindowPosition: action.value,
        wrapperWidth: state.wrapperWidth,
      }
    case "SET_WRAPPER_WIDTH":
      console.log(action.value)
      return {
        lastWindowPosition: action.value,
        wrapperWidth: state.wrapperWidth - 0.2,
      }
    default:
      throw new Error("Reducer error")
  }
}

const Home = (props: any) => {
  const [state, dispatch] = useReducer(homeReducer, {
    wrapperWidth: 50,
    lastWindowPosition: 0,
  })

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = event => {
    console.log({ scrolly: window.scrollY, state })
    if (window.scrollY > state.lastWindowPosition && window.scrollY < 1000) {
      dispatch({ type: "SET_WRAPPER_WIDTH", value: window.scrollY })
    }
  }

  return (
    <>
      <Element name="titlePage" className="element">
        <div className="home__wrapper">
          <div
            className="home__image__wrapper"
            style={{ width: `${state.wrapperWidth}%` }}
          >
            <TitleLogo />
          </div>
        </div>
      </Element>
    </>
  )
}

export default Home
