import { html, css, LitElement } from 'lit'

import MyApp from './components/MyApp'

export class App extends LitElement {
  constructor() {
    super()
  }

  render() {
    return MyApp(html, css, LitElement)
  }
}

customElements.define('app-html', App)
