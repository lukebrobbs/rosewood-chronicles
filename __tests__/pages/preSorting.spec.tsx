import { cleanup, render } from "@testing-library/react"
import { StaticQuery, useStaticQuery } from "gatsby"
import React from "react"
import { IBanners, IFluid } from "../../src/components/PreSorting/types"
import PreSortingPage from "../../src/pages/preSorting"

afterEach(cleanup)

describe("PreSorting page", () => {
  let mockBanners: IBanners
  let mockFluid: IFluid
  let mockMobileFluid: IFluid
  beforeEach(() => {
    mockFluid = {
      fluid: {
        aspectRatio: 4,
        src: "sdg3f",
        srcSet: "gfgdf",
        sizes: "gerg",
        base64: "ergerger",
        tracedSVG: "xcvxcv",
        srcWebp: "xcvcxsdv",
        srcSetWebp: "adasd",
        media: "ertgrt",
      },
    }
    mockMobileFluid = {
      fluid: {
        aspectRatio: 4,
        src: "sdgsfd3f",
        srcSet: "gfgsddf",
        sizes: "gesdfrg",
        base64: "ergergber",
        tracedSVG: "xcsdfvxcv",
        srcWebp: "xcvcxbbsdv",
        srcSetWebp: "adbbasd",
        media: "ertfdwgrt",
      },
    }
    mockBanners = {
      conchDesktop: mockFluid,
      conchMobile: mockMobileFluid,
      ivyDesktop: mockFluid,
      ivyMobile: mockMobileFluid,
      stratusDesktop: mockFluid,
      stratusMobile: mockMobileFluid,
    }
    // @ts-ignore
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          author: "Luke Brobbin",
          description: "test description",
          title: `Default Starter`,
        },
      },
    })
    // @ts-ignore
    StaticQuery.mockImplementation(({ render }) =>
      render({
        site: {
          siteMetadata: {
            author: "Luke Brobbin",
            description: "test description",
            title: `Default Starter`,
          },
        },
        mobileImage: {
          childImageSharp: {
            mockFluid,
          },
        },
        desktopImage: {
          childImageSharp: {
            mockFluid,
          },
        },
      })
    )
  })

  it("Should render the correct text returned in graphQL query", () => {
    const mockData = {
      allContentfulSortingQuiz: {
        edges: [
          {
            node: {
              introductionText: {
                introductionText:
                  "Welcome to Rosewood Hall! Each new pupil who attends Rosewood Hall is allocated a house - Ivy, Stratus or Conch. Find out which house you belong in by signing up to take part in our house sorting quiz and to recieve exclusive content from author Connie Glynn!",
              },
              houseBanners: mockBanners,
            },
          },
        ],
      },
    }
    const { getByTestId } = render(
      <PreSortingPage data={mockData} location={{ origin: "/" }} />
    )

    expect(getByTestId("preSortingDescription").textContent).toBe(
      mockData.allContentfulSortingQuiz.edges[0].node.introductionText
        .introductionText
    )
  })
})
