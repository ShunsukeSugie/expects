class ReviewsController < ApplicationController
  before_action :set_product, only: [:new,:create,:review_params]
  def new 
    @review =Review.new
    @purchase = Purchase.find(params[:purchase_id])
    @product = @purchase.reserve.product
  end
  def create
   @review= Review.new(review_params)
   @review.save
   redirect_to users_path
  end
  private
  def review_params
    params.require(:review).permit(:review,:grade).merge(product_id:@product.id,purchase_id:params[:purchase_id])
  end
  def set_product
     
    @purchase = Purchase.find(params[:purchase_id])
    @product = @purchase.reserve.product
  end
end
