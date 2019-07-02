// Type definitions for [muriatic] [3.0.1]
// Project: [muriatic]
// Definitions by: [ryota-murakami] <[https://ryota-murakami.github.io]>

/*~ This is the module plugin template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

import { ReactChildren, ReactNode  } from 'react'

declare module Muriatic {
  export interface ProviderProps {
    store: Object
    children: ReactChildren
  }

  export function Provider(props: ProviderProps): ReactNode

  export function useStore(store?: Object): [Object, Function]
}
