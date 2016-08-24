json.extract! @problem, :id, :title, :description, :creator, :algorithm_id, :obligatoryComments, :created_at, :updated_at
json.array!(@criterions) do |criterion|
  json.extract! criterion, :id, :title, :description, :priority, :problem_id
  json.url criterion_url(criterion, format: :json)
end
json.array!(@alternatives) do |alternative|
  json.extract! alternative, :id, :title, :description, :problem_id
  json.url alternative_url(alternative, format: :json)
end
