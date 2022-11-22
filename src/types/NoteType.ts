export type TagType = {
  id: number
  title: string
}

export type NoteType = {
  id: number
  title: string
  tags: TagType[]
}
