import React, { useState } from "react"
import * as C from "./styles"
import useDebounce from "./useDebounce"

function Input({ value, search }) {
  const deboucedChange = useDebounce(search, 500)

  const [input, setInput] = useState("")

  const handleChange = (e) => {
    deboucedChange(e)
    setInput(e)
  }

  return (
    <C.InputArea>
      <input type="text" placeholder="Search By Country" value={input} onChange={(e) => handleChange(e.target.value)} />
    </C.InputArea>
  )
}

export default Input
