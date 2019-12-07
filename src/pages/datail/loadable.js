import Loadable from 'react-loadable';
import React from 'react'


const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading() {
    return <div>等会吧。。。。。。</div>
  }
});

export default () => <LoadableComponent />


// export default class App extends React.Component {
//   render() {
//     return <LoadableComponent/>;
//   }
// }