const extract = () => {
  let url = new URL(window.location.search)
  let searchParams = new URLSearchParams(url)

  // Display the key/value pairs
  for (let pair of searchParams.entries()) {
    localStorage.setItem(pair[0], pair[1])
  }
}

export default extract
