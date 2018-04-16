class StaticPagesController < ApplicationController
  def show
    render template: "static_pages/#{params[:page]}"
  end

  def show_nested
    render template: "static_pages/#{params[:namespace]}/#{params[:page]}"
  end
end
