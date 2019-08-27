class Api::MessagesController < ApplicationController
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
        respond_to do |format|
          format.html
          format.json{@new_message = @message.where(id > ?',params[:message][:id])}
      end
  end
end
