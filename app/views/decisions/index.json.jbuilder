json.array!(@decisions) do |decision|
  json.extract! decision, :id, :username, :rating, :comment, :criterion_id, :alternative_id, :agreed_decision_id
  json.url decision_url(decision, format: :json)
end
