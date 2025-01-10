import { FunctionComponent, FunctionComponentElement } from 'react'

declare global {

  namespace SvgAsset {
    export type Props = React.SVGProps<SVGSVGElement>

    export type Component = FunctionComponent<Props>

    export type Element = FunctionComponentElement<Props>
  }

}

export {}
