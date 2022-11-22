import React, { ChangeEvent, FC, useState } from "react"
import { ReturnComponentType } from "types"
import { NotesFormPropsType } from "./types"
import { EMPTY_STRING, ERROR_MESSAGE } from "constants/base"
import { Button, Input } from "components"
import classes from "./index.module.scss"

export const NotesForm: FC<NotesFormPropsType> = ({handleAddNoteClick}): ReturnComponentType => {

  const [title, setTitle] = useState(EMPTY_STRING)
  const [errorMessage, setErrorMessage] = useState(EMPTY_STRING)

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.currentTarget.value)

    if (errorMessage) {
      setErrorMessage(EMPTY_STRING)
    }
  }

  const onAddNoteClickOrEnter = (): void => {
    const titleTrimmed = title.replace(/\s+/g, " ").trim()

    if (titleTrimmed) {
      handleAddNoteClick(titleTrimmed)
      setTitle(EMPTY_STRING)
    } else {
      setErrorMessage(ERROR_MESSAGE)
    }
  }

  return (
    <div className={classes.notesForm}>
      <Input
        variant={"primary"}
        placeholder={"Enter the title"}
        value={title}
        onChange={onInputChange}
        onEnter={onAddNoteClickOrEnter}
        errorMessage={errorMessage}
      />
      <Button variant={"primary"} className={classes.button} onClick={onAddNoteClickOrEnter}>
        Add note
      </Button>
    </div>
  )
}
