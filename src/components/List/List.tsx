import classNames from 'classnames'
import _map from 'lodash/map'

import { ListProps } from './List.props'

export function List<T>({ items, render, className }: ListProps<T>) {
  return (
    <ul className={classNames('tw-flex', className)}>
      {_map(items, (item, index) => (
        <li key={index}>
          {render(item, index)}
        </li>
      ))}
    </ul>
  )
}
