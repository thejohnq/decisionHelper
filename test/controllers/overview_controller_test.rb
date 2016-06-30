require 'test_helper'

class OverviewControllerTest < ActionController::TestCase
  test "should get evaluating" do
    get :evaluating
    assert_response :success
  end

  test "should get evaluating_com" do
    get :evaluating_com
    assert_response :success
  end

  test "should get result" do
    get :result
    assert_response :success
  end

end
