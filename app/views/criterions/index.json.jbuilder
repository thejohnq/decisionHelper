json.array!(@criterions) do |criterion|
  json.extract! criterion, :id, :title, :description, :priority, :problem_id
  json.url criterion_url(criterion, format: :json)
end
