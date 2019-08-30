Geocoder.configure(
  # street address geocoding service (default :nominatim)
  lookup: :google,
<<<<<<< Updated upstream

  # IP address geocoding service (default :ipinfo_io)
  # ip_lookup: :maxmind,
  language: :ja,
  # to use an API key:
  api_key: ENV['GEOCORDER'],

  # geocoding service request timeout, in seconds (default 3):
  timeout: 5,

  # set default units to kilometers:
  units: :km,

=======
  :http_proxy => 'rneh4uo8ry9dw:c5uc5kKCoF_aIYJyfxSSRQGO4w@http://quotaguard.com:9292',
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

>>>>>>> Stashed changes
)
