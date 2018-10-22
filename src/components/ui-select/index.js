import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';

const Select = (props) => {
  const options = props.options || []
  const selected = props.selected || ''

  return(
    <div className={s.root}>
      <label htmlFor={props.id} className={s.label}>{props.label}</label>
      <div className={s.container}>
        <select className={s.component} onChange={props.onChange} defaultValue={selected}>
          <option value="">{props.holder}</option>
          {
            options.map((option, index) => (
              <option value={option.value} key={index}>
                {option.text}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
}
export const UiSelect = withStyles(s)(Select);