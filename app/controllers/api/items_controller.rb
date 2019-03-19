class Api::ItemsController < ApplicationController
before_action :set_menu
before_action :set_item, only: [:update, :destroy]

  def index
    items = @menu.items
    render json: items
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render json: {errors: item.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: {message: "Upate Item Failed"}
    end
  end

  def destroy
    @item.destroy
    render json: {message: "Menu Item Deleted"}
  end

  private

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :description, :price, :menu_id)
  end

end
