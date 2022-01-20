import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom"
import { App } from "../App"


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch >
        <Route path="/">
          <App />
        </Route>
        <Route path="*">
          <Navigate to="/" />
        </Route>
      </Switch >
    </BrowserRouter>

  )
}