import React, { ChangeEvent, FC, useState } from "react"
import { ReturnComponentType } from "types"
import { NoteItemPropsType } from "./types"
import { Button, Input, Tags } from "components"
import { EMPTY_STRING } from "constants/base"
import classes from "./index.module.scss"

export const NoteItem: FC<NoteItemPropsType> =
  ({
     noteId,
     title,
     tags,
     handleRemoveNoteClick,
     handleAddTagClick,
     handleRemoveTagClick,
     handleUpdateTitleClickOrKeyDown
   }): ReturnComponentType => {

    const [isEditMode, setIsEditMode] = useState(false)
    const [updatedTitle, setUpdatedTitle] = useState(EMPTY_STRING)

    const onRemoveNoteClick = (): void => {
      handleRemoveNoteClick(noteId)
    }

    const onUpdatedTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setUpdatedTitle(event.currentTarget.value)
    }

    const onUpdateTitleClickOrEnter = (): void => {
      handleUpdateTitleClickOrKeyDown(noteId, updatedTitle)
      setIsEditMode(false)
      setUpdatedTitle(EMPTY_STRING)
    }

    const onUpdateTitleEscape = (): void => {
      setIsEditMode(false)
      setUpdatedTitle(EMPTY_STRING)
    }

    const onToggleIsEditModeClick = (): void => {
      if (!updatedTitle) {
        setIsEditMode(true)
        setUpdatedTitle(title)
      } else {
        setIsEditMode(false)
        setUpdatedTitle(EMPTY_STRING)
      }
    }

    return (
      <div className={classes.noteItem}>
        <div className={classes.body}>
          {isEditMode
            ? <div className={classes.edit}>
              <Input
                variant={"primary"}
                value={updatedTitle}
                onChange={onUpdatedTitleChange}
                autoFocus
                onEnter={onUpdateTitleClickOrEnter}
                onEscape={onUpdateTitleEscape}
              />
              <Button variant={"primary"} className={classes.saveButton} onClick={onUpdateTitleClickOrEnter}>
                save
              </Button>
            </div>
            : <div className={classes.title}>{title}</div>}
          <div className={classes.buttons}>
            <Button variant={"primary"} className={classes.removeButton} onClick={onRemoveNoteClick}>
              Remove
            </Button>
            <Button variant={"primary"} className={classes.editButton} onClick={onToggleIsEditModeClick}>
              {isEditMode ? "Cancel" : "Edit"}
            </Button>
          </div>
        </div>
        <Tags
          noteId={noteId}
          tags={tags}
          handleAddTagClick={handleAddTagClick}
          handleRemoveTagClick={handleRemoveTagClick}
          updatedTitle={updatedTitle}
        />
      </div>
    )
  }
