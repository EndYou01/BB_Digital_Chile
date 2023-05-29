
import { Provider } from 'react-redux'

import { AppRouter } from './router/AppRouter.jsx'
import { store } from './redux/store/store.js'

const KidsrUsApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default KidsrUsApp
