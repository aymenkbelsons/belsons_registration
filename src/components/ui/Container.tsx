import React, { ReactNode, HTMLAttributes } from 'react'
import classNames from 'classnames'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  innerClassName?: string
}

const Container = ({
  children,
  className,
  innerClassName,
  ...rest
}: ContainerProps) => {
  return (
    <section
      className={classNames(
        'h-auto py-12 lg:py-20  relative',
        className
      )}
      {...rest}
    >
      <div
        className={classNames(
          'container mx-auto px-6 lg:px-10',
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  )
}

export default Container
