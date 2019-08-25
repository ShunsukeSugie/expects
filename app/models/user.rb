class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :validatable
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable
  has_one :user_profile, dependent: :destroy
  has_many :products
  # has_many :reserves,dependent: :delete_all

  accepts_nested_attributes_for :user_profile
  has_many :purchases
  has_one :card
  validates :nickname, presence: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL_REGEX }
end
