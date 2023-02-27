import React from "react"
import * as C from "./styles"

function SingleCountry({ name, population, region, capital, flag }) {
  return (
    <C.CountryData>
      <img src={flag} alt="" />
      <div className="data--area">
        <h1>{name}</h1>
        <div className="data--firstArea">
          <p>
            <span>{capital}</span>
          </p>
        </div>
        <p>The country belongs to {region}</p>
        <p>It has population of {population}</p>
      </div>
    </C.CountryData>
  )
}

export default SingleCountry
