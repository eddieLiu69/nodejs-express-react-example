import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'
import CommentBox from './CommentBox'
import FilterableProductTable from './Product'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
    <Route path="/comments" component={CommentBox}/>
    <Route path="/products" component={FilterableProductTable}/>
  </Route>
)