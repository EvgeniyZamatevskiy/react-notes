import React, { ChangeEvent, KeyboardEvent, FC } from "react"
import { ReturnComponentType } from "types"
import { InputPropsType } from "./types"
import { EMPTY_STRING } from "constants/base"
import { Key } from "enums"
import classes from "./index.module.scss"

export const Input: FC<InputPropsType> =
  ({
     className,
     onChange,
     onKeyDown,
     setValue,
     onEnter,
     onEscape,
     errorMessage,
     variant,
     ...restProps
   }): ReturnComponentType => {

    const inputClass = variant ? classes[variant] : classes.input
    const additionalInputClass = className ? className : EMPTY_STRING
    const errorInputClass = errorMessage ? classes.errorInput : EMPTY_STRING
    const inputClasses = `${inputClass} ${additionalInputClass} ${errorInputClass}`

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      onChange && onChange(event)

      setValue && setValue(event.currentTarget.value)
    }

    const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
      onKeyDown && onKeyDown(event)

      onEnter && event.key === Key.ENTER && onEnter()
      onEscape && event.key === Key.ESCAPE && onEscape()
    }

    return (
      <div className={classes.container}>
        <input
          type={"text"}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          className={inputClasses}
          {...restProps}
        />
        {errorMessage && <span className={classes.errorMessage}>{errorMessage}</span>}
      </div>
    )
  }
