exports.onRouteUpdate = function({ location }) {
  // Don't track while developing.
  if (process.env.NODE_ENV === `production` && typeof _hmt === `function`) {
    _hmt.push(['_trackPageview', (location || {}).pathname])
  }
}
