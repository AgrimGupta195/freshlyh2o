let analyticsLoaded = false

export function initializeAnalytics(measurementId) {
  if (!measurementId || typeof document === 'undefined' || analyticsLoaded) {
    return
  }

  analyticsLoaded = true

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag = window.gtag || gtag

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    send_page_view: false,
  })
}

export function trackPageView(measurementId) {
  if (!measurementId || typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: window.location.pathname + window.location.search,
    page_location: window.location.href,
    page_title: document.title,
  })
}
