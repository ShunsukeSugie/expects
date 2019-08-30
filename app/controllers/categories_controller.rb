class CategoriesController < ApplicationController
  def index
  end
  def show
    @category = Category.find(params[:id])
    if @category.children.present?
    @products = Product.where(category_id:@category.children.ids)
    else
    @products=Product.where(category_id:@category.id)
    
    end
  end
end
