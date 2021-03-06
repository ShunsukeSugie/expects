require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.storage :fog
  config.fog_provider = 'fog/aws'
  config.fog_public = false
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: ENV['ACCESS_KEY'],
    aws_secret_access_key: ENV['SECRET_KEY'],
    region: 'ap-northeast-1'
  }

  config.fog_directory  = 'expects'
  config.asset_host = "https://s3.ap-northeast-1.amazonaws.com/expects"
  config.cache_storage = :fog
  config.root = Rails.root.join('tmp')
  config.cache_dir = "#{Rails.root}/tmp/uploads"
end
