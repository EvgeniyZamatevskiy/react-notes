export type TagItemPropsType = {
  tagId: number
  title: string
  handleRemoveTagClick: (noteId: number, tagId: number) => void
  noteId: number
  updatedTitle: string
}
