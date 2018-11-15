import React, { memo, Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Loading } from './components/Loading.js'

function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            exact
            path="/"
            component={lazy(() => import('./pages/Index'))}
          />
          <Route
            component={() => (
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} /* eslint-disable-line prettier/prettier */>
                <h1>404 Not Found</h1>
              </div>
            )}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default memo(Routes)
