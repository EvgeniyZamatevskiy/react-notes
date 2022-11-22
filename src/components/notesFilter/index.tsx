import React, { FC } from "react"
import { ReturnComponentType } from "types"
import { NotesFilterPropsType } from "./types"
import { Button, Input } from "components"
import { EMPTY_STRING } from "constants/base"
import classes from "./index.module.scss"

export const NotesFilter: FC<NotesFilterPropsType> = ({searchQuery, setSearchQuery}): ReturnComponentType => {

  const onResetSearchQueryClick = (): void => {
    setSearchQuery(EMPTY_STRING)
  }

  return (
    <div className={classes.notesFilter}>
      <Input variant={"primary"} placeholder={"Enter tag name"} value={searchQuery} setValue={setSearchQuery}/>
      {searchQuery && <Button className={classes.test} onClick={onResetSearchQueryClick}>&#10006;</Button>}
    </div>
  )
}
