import { TagType } from "types"

export type TagsPropsType = {
  tags: TagType[]
  noteId: number
  handleAddTagClick: (noteId: number, title: string) => void
  handleRemoveTagClick: (noteId: number, tagId: number) => void
  updatedTitle: string
}
