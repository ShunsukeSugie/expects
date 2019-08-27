json.array! @messages do |message|
  json.name     message.user.nickname
  json.date     message.created_at
  json.image    message.image.url
  json.id       message.id
  json.text     message.content
end
