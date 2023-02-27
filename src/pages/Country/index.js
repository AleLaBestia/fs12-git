import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { api } from "../../api"
import SingleCountry from "../../components/SingleCountry"
import * as C from "./styles"

function Country() {
  const { name } = useParams()
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState([])

  useEffect(() => {
    if (name) {
      getCountry(name)
    }
  }, [name])

  const getCountry = async (param) => {
    setLoading(true)
    let country = await api.getCountry(param)
    setCountry(country)
    console.log(country)
    setLoading(false)
  }

  return (
    <C.CountryPage>
      <div>
        <Link to="/" className="back--button">
          Back
        </Link>
        {loading && <div className="loading">loading...</div>}
        {!loading &&
          country.map((item) => (
            <SingleCountry
              flag={item.flags.png}
              name={item.name}
              region={item.region}
              capital={item.capital}
              population={item.population}
            />
          ))}
      </div>
    </C.CountryPage>
  )
}

export default Country
