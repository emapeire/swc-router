export default function useQueryParams({ req } = {}) {
  const isSever = typeof window === 'undefined'

  if (isSever) {
    const { query } = req
    return query
  }

  const search = window.location.search
  const params = new URLSearchParams(search)
  return Object.fromEntries(params.entries())
}
