class User < ApplicationRecord
    has_secure_password
    has_many :user_characters
    has_many :characters, through: :user_characters
    has_many :user_campaigns
    has_many :campaigns, through: :user_campaigns
end
