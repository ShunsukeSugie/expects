class MessagesController < ApplicationController
  before_action :set_group
  def index
    @chat_room =ChatRoom.find(params[:chat_room_id])
    @message = Message.new
    @purchase =Purchase.find(@chat_room.purchase_id)
    @reserve =Reserve.find(@purchase.reserve_id)
    @product =Product.find(@reserve.product_id)
    if@messages.present?
      render :create
    else
    @message = Message.new
    @messages = @group.messages.includes(:user)
        respond_to do |format|
          format.html
          format.json
        end
    end
  end
  def create

    @message = @group.messages.new(message_params)
    if @message.save
      respond_to do |format|
        format.html {redirect_to chat_room_messages_path(@group.id), notice: 'メッセージが送信されました'}
        format.json
        end
    else
      @messages = @group.messages.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      render :index
    end
end

  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
   
    @group = ChatRoom.find(params[:chat_room_id])
  end


end

