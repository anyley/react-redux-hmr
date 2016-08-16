import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import VisibleCards from './components/VisibleCards'
import NewCardModal from './components/NewCardModal'

export default (
<Route path="/" component={App}>
    <Route path="/deck/:deckId" component={VisibleCards}>
        {/*<Route path="/deck/:deckId/new" component={NewCardModal} />*/}
    </Route>
</Route>
)