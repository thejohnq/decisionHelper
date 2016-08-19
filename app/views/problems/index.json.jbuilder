json.array!(@problems) do |problem|
  json.extract! problem, :id, :title, :description, :creator, :algorithm_id, :obligatoryComments
  json.url problem_url(problem, format: :json)
end
