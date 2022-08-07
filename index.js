import logMessage from './assets/js/logger.js'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'

// Log message to console
logMessage('A very warm welcome to Expack!')
// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}