import React, { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { FRUITS } from '../fruits'

function DebounceSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const filteredFruits = FRUITS.filter((fruit) => fruit.toLowerCase().includes(debouncedSearch.toLowerCase()))

  return(
    <>
    </>
  )
}