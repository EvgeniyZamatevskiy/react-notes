import { NoteType } from "types"

export type NotesListPropsType = {
  notes: NoteType[]
  handleRemoveNoteClick: (noteId: number) => void
  handleAddTagClick: (noteId: number, title: string) => void
  handleRemoveTagClick: (noteId: number, tagId: number) => void
  handleUpdateTitleClickOrKeyDown: (noteId: number, title: string) => void
}
