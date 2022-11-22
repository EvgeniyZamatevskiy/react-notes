import { TagType } from "types"

export type TagsListPropsType = {
  tags: TagType[]
  handleRemoveTagClick: (noteId: number, tagId: number) => void
  noteId: number
  updatedTitle: string
}
