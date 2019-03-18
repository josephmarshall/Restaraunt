class Api::ItemsController < ApplicationController
before_action :set_menu

  def index
    items = @menu.items
    render json: items
  end

  def destroy
    Item.find(params[:id]).destroy
    render json: {message: "Menu Item Deleted"}
  end

  private

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

end
