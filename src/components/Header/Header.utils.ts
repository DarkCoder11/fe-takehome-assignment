import _capitalize from 'lodash/capitalize'
import _startsWith from 'lodash/startsWith'
import _toLower from 'lodash/toLower'

export const formatPathname = (pathname: string): string => {
  if (pathname === '/') {
    return 'Overview'
  }

  return _startsWith(pathname, '/')
    ? _capitalize(_toLower(pathname.slice(1)))
    : _capitalize(_toLower(pathname))
}
