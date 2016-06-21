require 'test_helper'

class McdCreatingControllerTest < ActionController::TestCase
  test "should get createProblem" do
    get :createProblem
    assert_response :success
  end

  test "should get createCriteria" do
    get :createCriteria
    assert_response :success
  end

  test "should get createAlternatives" do
    get :createAlternatives
    assert_response :success
  end

  test "should get overview" do
    get :overview
    assert_response :success
  end

end
