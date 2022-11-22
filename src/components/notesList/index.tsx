import React, { FC } from "react"
import { ReturnComponentType } from "types"
import { NotesListPropsType } from "./types"
import { NoteItem } from "components"
import classes from "./index.module.scss"

export const NotesList: FC<NotesListPropsType> =
  ({
     notes,
     handleRemoveNoteClick,
     handleAddTagClick,
     handleRemoveTagClick,
     handleUpdateTitleClickOrKeyDown
   }): ReturnComponentType => {

    const notesRender = notes.map(({id, title, tags}) => {
      return (
        <NoteItem
          key={id}
          noteId={id}
          title={title}
          tags={tags}
          handleRemoveNoteClick={handleRemoveNoteClick}
          handleAddTagClick={handleAddTagClick}
          handleRemoveTagClick={handleRemoveTagClick}
          handleUpdateTitleClickOrKeyDown={handleUpdateTitleClickOrKeyDown}
        />
      )
    })

    if (!notes.length) {
      return <h1 className={classes.title}>Notes not found</h1>
    }

    return (
      <div>
        <h1 className={classes.title}>List of notes</h1>
        {notesRender}
      </div>
    )
  }
