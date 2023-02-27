import React from "react"
import { AiFillCaretRight } from "react-icons/ai"
import { Link } from "react-router-dom"

const Tabla = ({ countries }) => {
  return (
    <>
      <table className="table table-dark  mt-3">
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Region</th>
            <th>Population</th>
            <th>Languages</th>
            <th>Go</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((result, id) => (
            <tr key={id}>
              <td>
                <img src={result.flag} alt="" style={{ height: "auto", width: "90px", objectFit: "cover" }} />
              </td>
              <td>{result.name}</td>
              <td>{result.region}</td>
              <td>{result.population}</td>
              <td>
                {result.languages.map((l) => (
                  <p>{l.name}</p>
                ))}
              </td>
              <td>
                <Link to={`/country/${result.name}`}>
                  <AiFillCaretRight />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default Tabla
