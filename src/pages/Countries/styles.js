import styled from "styled-components"

export const CountriesArea = styled.main`
  min-height: calc(100vh - 90px);
  background-color: rgb(32, 45, 54);
  transition: all ease 0.2s;
  .countries {
    display: grid;
    width: 1024px;
    margin: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;

    .loading {
      color: #fff;
    }
  }

  .pagination {
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 0px;
    padding: 20px 0px;

    button {
      height: 40px;
      width: 40px;
      background-color: rgb(43, 55, 67);
      color: #fff;
      border: none;
      box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
      margin: 0px 5px;
      cursor: pointer;
    }

    .active {
      font-weight: bold;
    }
  }

  @media (max-width: 1024px) {
    .countries {
      width: auto;
      padding: 0px 20px;
    }
  }

  @media (max-width: 768px) {
    .countries {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 440px) {
    .countries {
      grid-template-columns: 1fr;
    }
  }
`
