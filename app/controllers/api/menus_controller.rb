class Api::MenusController < ApplicationController

  def index
    menus = Menu.all
    render json: menus
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: {errors: menu.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    Menu.find(params[:id]).destroy
    render json: {message: "Entire Menu Deleted"}
  end

  private

  def menu_params
    params.require(:menu).permit(:name)
  end
end
