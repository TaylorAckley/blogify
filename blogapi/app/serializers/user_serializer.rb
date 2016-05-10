class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :handle, :email, :verified, :profile
  has_many :posts
end
