import React, { FC } from "react"
import { ReturnComponentType } from "types"
import { TagsListPropsType } from "./types"
import { TagItem } from "components"
import classes from "./index.module.scss"

export const TagsList: FC<TagsListPropsType> =
  ({
     tags,
     handleRemoveTagClick,
     noteId,
     updatedTitle
   }): ReturnComponentType => {

    const tagsRender = tags.map(({id, title}) => {
      return (
        <TagItem
          key={id}
          tagId={id}
          title={title}
          handleRemoveTagClick={handleRemoveTagClick}
          noteId={noteId} updatedTitle={updatedTitle}
        />)
    })

    return (
      <div className={classes.tagsList}>
        {tagsRender}
      </div>
    )
  }
