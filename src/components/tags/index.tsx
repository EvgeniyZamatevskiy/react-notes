import React, { FC } from "react"
import { ReturnComponentType } from "types"
import { TagsPropsType } from "./types"
import { TagsForm, TagsList } from "components"
import classes from "./index.module.scss"

export const Tags: FC<TagsPropsType> =
  ({
     tags,
     handleAddTagClick,
     noteId,
     handleRemoveTagClick,
     updatedTitle
   }): ReturnComponentType => {

    return (
      <div className={classes.tags}>
        <TagsList tags={tags} handleRemoveTagClick={handleRemoveTagClick} noteId={noteId} updatedTitle={updatedTitle}/>
        <TagsForm handleAddTagClick={handleAddTagClick} noteId={noteId}/>
      </div>
    )
  }
