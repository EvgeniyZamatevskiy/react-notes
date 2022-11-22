import { TagType } from "types"

export type NoteItemPropsType = {
  noteId: number
  title: string
  tags: TagType[]
  handleRemoveNoteClick: (noteId: number) => void
  handleAddTagClick: (noteId: number, title: string) => void
  handleRemoveTagClick: (noteId: number, tagId: number) => void
  handleUpdateTitleClickOrKeyDown: (noteId: number, title: string) => void
}
