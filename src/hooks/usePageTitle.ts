import { useEffect } from 'react'

const BASE_TITLE = 'Kareem Nasr — Software Engineer'

/** Sets the document title for a page; restores the base title portion. */
export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} · ${BASE_TITLE}` : BASE_TITLE
  }, [page])
}
