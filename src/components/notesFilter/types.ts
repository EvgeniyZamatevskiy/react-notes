import { SetStateType } from "types"

export type NotesFilterPropsType = {
  searchQuery: string
  setSearchQuery: SetStateType<string>
}
