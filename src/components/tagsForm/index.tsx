import React, { ChangeEvent, FC, useState } from "react"
import { ReturnComponentType } from "types"
import { TagsFormPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import { Button, Input } from "components"
import classes from "./index.module.scss"

export const TagsForm: FC<TagsFormPropsType> = ({handleAddTagClick, noteId}): ReturnComponentType => {

  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState(EMPTY_STRING)

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const valueTrimmed = event.currentTarget.value.trim()
    setTitle(valueTrimmed)
  }

  const onAddTagClickOrEnter = (): void => {
    if (title) {
      handleAddTagClick(noteId, title)
      setTitle(EMPTY_STRING)
    }

    setIsEditMode(false)
  }

  const onDeactivateIsModalEscape = (): void => {
    setIsEditMode(false)
  }

  const onActivateIsEditModeClick = (): void => {
    setIsEditMode(true)
  }

  return (
    <div className={classes.tasksForm}>
      {isEditMode
        ? <div className={classes.body}>
          <Input
            variant={"primary"}
            autoFocus
            value={title}
            onChange={onTitleChange}
            onEnter={onAddTagClickOrEnter}
            onEscape={onDeactivateIsModalEscape}
          />
          <Button variant={"primary"} className={classes.addButton} onClick={onAddTagClickOrEnter}>add</Button>
        </div>
        : <Button className={classes.plusButton} onClick={onActivateIsEditModeClick}>+</Button>}
    </div>
  )
}
