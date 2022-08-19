import cn from 'classnames'

import styles from './button.module.css'

export function Button({ primary, children, ...props }) {
  return (
    <button
      type="button"
      className={cn('btn', {
        [styles.primary]: primary,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
