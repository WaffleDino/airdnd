class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :class, :level
end
