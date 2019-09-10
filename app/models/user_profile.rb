class UserProfile < ApplicationRecord
  belongs_to :user
  mount_uploader :avatar,UploadFileUploader
  
  VALID_PHONE_REGEX =  /\A\d{10}$|^\d{11}\z/
  validates :tel, presence: true, format: { with: VALID_PHONE_REGEX }
  validates :last_name_kata, presence: true, format: { with: /\A[\p{katakana}\p{blank}ー－]+\z/, message: 'はカタカナで入力して下さい。'}
  validates :first_name_kata, presence: true, format: { with: /\A[\p{katakana}\p{blank}ー－]+\z/, message: 'はカタカナで入力して下さい。'}
  with_options presence: true do
    validates :last_name ,:first_name,:birth
  end
end
