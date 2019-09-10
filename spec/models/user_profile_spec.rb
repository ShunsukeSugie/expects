require 'rails_helper'
describe UserProfile do
  describe '#create' do
    it "is invalid without a last_name" do
      user_profile = build(:user_profile, last_name: "")
      user_profile.valid?
      expect(user_profile.errors[:last_name]).to include("can't be blank")
    end

    it "is a last_name zenkaku" do
      user_profile = build(:user_profile, last_name: "aaa")
      user_profile.valid?
      expect(user_profile.errors[:last_name]).to include("全角で入力して下さい")
    end

    it "is invalid without a first_name" do
      user_profile = build(:user_profile, first_name: "")
      user_profile.valid?
      expect(user_profile.errors[:first_name]).to include("can't be blank")
    end

    it "is a first_name zenkaku" do
      user_profile = build(:user_profile, first_name: "aaa")
      user_profile.valid?
      expect(user_profile.errors[:first_name]).to include("全角で入力して下さい")
    end

    it "is invalid without a last_name_kata" do
      user_profile = build(:user_profile, last_name_kata: "")
      user_profile.valid?
      expect(user_profile.errors[:last_name_kata]).to include("can't be blank")
    end

    it "is a last_name_kata zenkaku" do
      user_profile = build(:user_profile, last_name_kata: "あああ")
      user_profile.valid?
      expect(user_profile.errors[:last_name_kata]).to include("全角カタカナで入力して下さい")
    end

    it "is invalid without a first_name_kata" do
      user_profile = build(:user_profile, first_name_kata: "")
      user_profile.valid?
      expect(user_profile.errors[:first_name_kata]).to include("can't be blank")
    end

    it "is a first_name_kata zenkaku" do
      user_profile = build(:user_profile, first_name_kata: "あああ")
      user_profile.valid?
      expect(user_profile.errors[:first_name_kata]).to include("全角カタカナで入力して下さい")
    end

    it "is invalid without a birth" do
      user_profile = build(:user_profile, birth: "")
      user_profile.valid?
      expect(user_profile.errors[:birth]).to include("can't be blank")
    end

    it "is invalid without a tel" do
      user_profile = build(:user_profile, tel: "")
      user_profile.valid?
      expect(user_profile.errors[:tel]).to include("can't be blank")
    end

    it "does a tel have hyphen" do
      user_profile = build(:user_profile, tel: "000-0000-0000")
      user_profile.valid?
      expect(user_profile.errors[:tel]).to include("電話番号は半角ハイフン無しで入力してください。")
    end

    it "is a tel zenkaku" do
      user_profile = build(:user_profile, tel: "０００００００００００")
      user_profile.valid?
      expect(user_profile.errors[:tel]).to include("電話番号は半角ハイフン無しで入力してください。")
    end
    
  end
end
