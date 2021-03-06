const Page = require('.')

class StartPage extends Page {
  getViewModel (formData, errors) {
    return {
      ...super.getViewModel(formData, errors),
      isStartPage: true,
      skipTimeoutWarning: true
    }
  }
}

module.exports = StartPage
