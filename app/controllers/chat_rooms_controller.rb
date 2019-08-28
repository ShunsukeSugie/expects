class ChatRoomsController < ApplicationController
  def index
    # @purchase = Purchase.find(params[:id])
    # @reserve = @purchase.reserrve
    @message =Message.new
    # @chat_room = ChatRoom.find(reserve_id:@reserve.id)
  end
  def show
    
    @chat_room =ChatRoom.find_by(purchase_id: params[:id])
   
    
    @message = Message.new
    if  Message.all.present?
    @messages = @chat_room.messages.includes(:user)
    @messages = @group.messages.includes(:user)
        respond_to do |format|
          format.html
          format.json
        end
    end
  end
  def create
    if @message
    @message = @group.messages.new(message_params)
    end
    if @message.save
      respond_to do |format|
        format.html {redirect_to chat_room_path(@group), notice: 'メッセージが送信されました'}
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
    binding.pry
    @group = ChatRoom.find_by(purchase_id:params[:purchase_id])
  end

end
