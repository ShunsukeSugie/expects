Geocoder.configure(
  # street address geocoding service (default :nominatim)
  lookup: :google,

  # IP address geocoding service (default :ipinfo_io)
  # ip_lookup: :maxmind,
  language: :ja,
  # to use an API key:
  api_key: ENV['GEOCORDER'],
  use_https: true,
  # geocoding service request timeout, in seconds (default 3):
  timeout: 5,

  # set default units to kilometers:
  units: :km,

)
