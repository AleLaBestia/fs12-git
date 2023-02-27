import React, { useEffect, useState } from "react"
import Input from "../../components/input"
import * as C from "./styles"
import { api } from "../../api"

import Tabla from "../../components/Tabla"
import Pagination from "./Pagination"

function Countries() {
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    getAllCountries()
  }, [])

  const getAllCountries = async () => {
    setLoading(true)
    let countries = await api.getCountries()
    setCountries(countries)
    console.log(countries)
    setLoading(false)
  }

  const lowerSearch = search.toLowerCase()

  const filteredCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(lowerSearch) || country.region.toLowerCase().includes(lowerSearch),
  )

  const pagCountries = filteredCountries.slice(offset, offset + 5)

  return (
    <C.CountriesArea>
      <Input value={search} search={setSearch} />
      <div className="countries">
        {loading && <div className="loading">Carregando...</div>}
        {!loading && <Tabla countries={pagCountries} />}
      </div>
      <Pagination limit={5} total={filteredCountries.length} offset={offset} setOffset={setOffset} />
    </C.CountriesArea>
  )
}

export default Countries
