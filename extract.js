const extract = (query) => {
  let url = new URL(query)
  let searchParams = new URLSearchParams(url)

  // Display the key/value pairs
  for (let pair of searchParams.entries()) {
    localStorage.setItem(pair[0], pair[1])
  }
}

export default extract
