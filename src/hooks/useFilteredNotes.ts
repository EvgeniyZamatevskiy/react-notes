import { useMemo } from "react"
import { NoteType } from "types"

export const useFilteredNotes = (notes: NoteType[], searchQuery: string): NoteType[] => {

  const filteredNotes = useMemo(() => {
    return notes.filter(({tags}) => tags.find(({title}) => title.toLowerCase().includes(searchQuery.toLowerCase())))
  }, [notes, searchQuery])

  return filteredNotes
}
