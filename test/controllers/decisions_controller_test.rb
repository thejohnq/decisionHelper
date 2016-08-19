require 'test_helper'

class DecisionsControllerTest < ActionController::TestCase
  setup do
    @decision = decisions(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:decisions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create decision" do
    assert_difference('Decision.count') do
      post :create, decision: { agreed_decision_id: @decision.agreed_decision_id, alternative_id: @decision.alternative_id, comment: @decision.comment, criterion_id: @decision.criterion_id, rating: @decision.rating, username: @decision.username }
    end

    assert_redirected_to decision_path(assigns(:decision))
  end

  test "should show decision" do
    get :show, id: @decision
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @decision
    assert_response :success
  end

  test "should update decision" do
    patch :update, id: @decision, decision: { agreed_decision_id: @decision.agreed_decision_id, alternative_id: @decision.alternative_id, comment: @decision.comment, criterion_id: @decision.criterion_id, rating: @decision.rating, username: @decision.username }
    assert_redirected_to decision_path(assigns(:decision))
  end

  test "should destroy decision" do
    assert_difference('Decision.count', -1) do
      delete :destroy, id: @decision
    end

    assert_redirected_to decisions_path
  end
end
