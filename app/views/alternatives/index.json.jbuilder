json.array!(@alternatives) do |alternative|
  json.extract! alternative, :id, :title, :description, :problem_id
  json.url alternative_url(alternative, format: :json)
end
