class UserCharacterSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :char_id
end
