import React, { FC, useEffect, useState } from "react"
import { NoteType, ReturnComponentType, TagType } from "types"
import { NotesFilter, NotesForm, NotesList } from "components"
import { EMPTY_STRING } from "constants/base"
import { useFilteredNotes } from "hooks"
import notesData from "notes.json"

export const App: FC = (): ReturnComponentType => {

  const [notes, setNotes] = useState<NoteType[]>([])
  const [searchQuery, setSearchQuery] = useState(EMPTY_STRING)

  const filteredNotes = useFilteredNotes(notes, searchQuery)

  const handleRemoveNoteClick = (noteId: number): void => {
    setNotes(notes.filter(({id}) => id !== noteId))
  }

  const handleAddNoteClick = (title: string): void => {
    const tag = title.split(" ").at(-1)
    const tags = [{id: 1, title: `#${tag}`}]
    const note: NoteType = {id: Date.now(), title, tags}

    setNotes([note, ...notes])
  }

  const handleAddTagClick = (noteId: number, title: string): void => {
    const tag: TagType = {id: Date.now(), title: `#${title}`}
    setNotes(notes.map(note => note.id === noteId ? {...note, tags: [...note.tags, tag]} : note))
  }

  const handleRemoveTagClick = (noteId: number, tagId: number): void => {
    setNotes(notes.map(note => note.id === noteId ? {...note, tags: note.tags.filter(({id}) => id !== tagId)} : note))
  }

  const handleUpdateTitleClickOrKeyDown = (noteId: number, title: string): void => {
    const foundTags = title.split(" ").filter(tag => tag.startsWith("#") && tag.length > 1)

    const newTags = foundTags.map((tag, index) => ({id: Date.now() + index, title: tag}))

    title = title.replace(/#/g, EMPTY_STRING)

    const newNotes = notes.map(note => {
      if (foundTags && note.id === noteId) {
        return {...note, title, tags: [...note.tags, ...newTags]}
      }

      if (note.id === noteId) {
        return {...note, title}
      }

      return note
    })

    setNotes(newNotes)
  }

  useEffect(() => {
    setNotes(notesData)
  }, [])

  return (
    <div className="app">
      <NotesForm handleAddNoteClick={handleAddNoteClick}/>
      <NotesFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <NotesList
        notes={filteredNotes}
        handleRemoveNoteClick={handleRemoveNoteClick}
        handleAddTagClick={handleAddTagClick}
        handleRemoveTagClick={handleRemoveTagClick}
        handleUpdateTitleClickOrKeyDown={handleUpdateTitleClickOrKeyDown}
      />
    </div>
  )
}
