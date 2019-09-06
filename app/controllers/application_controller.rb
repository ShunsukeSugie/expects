class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_search
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
    devise_parameter_sanitizer.permit(:sign_up, keys: [user_profile_attributes: [:last_name,:first_name,:last_name_kata,:first_name_kata,:birth,:tel] ])
  end
  def set_search
     
      @search = Product.ransack(params[:q]) #ransackメソッド推奨
      @search_products = @search.result.includes(:category,:address)
  end
end
