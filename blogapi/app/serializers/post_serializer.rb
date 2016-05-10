class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :updated_at, :views, :votes, :slug, :header
  belongs_to :user
end
