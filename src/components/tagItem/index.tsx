import React, { FC } from "react"
import { ReturnComponentType } from "types"
import { TagItemPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import { Button } from "components"
import classes from "./index.module.scss"

export const TagItem: FC<TagItemPropsType> =
  ({
     tagId,
     title,
     handleRemoveTagClick,
     noteId,
     updatedTitle
   }): ReturnComponentType => {

    const isHaveTag = updatedTitle.split(" ").some(tag => tag.toLowerCase().includes(title.toLowerCase().slice(1)))

    const onRemoveTagClick = (): void => {
      handleRemoveTagClick(noteId, tagId)
    }

    return (
      <div className={`${classes.tagItem} ${isHaveTag ? classes.active : EMPTY_STRING}`}>
        <h2>{title}</h2>
        {tagId !== 1 && <Button className={classes.removeTagButton} onClick={onRemoveTagClick}>&#10006;</Button>}
      </div>
    )
  }
