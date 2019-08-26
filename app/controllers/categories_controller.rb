class CategoriesController < ApplicationController
  def index
  end
  def show
    @category = Category.find(params[:id])
    @products = Product.where(category_id:@category.subtree_ids)
  end
end
