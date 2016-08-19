class Problem < ActiveRecord::Base
  has_many :criterions, :dependent => :destroy
  has_many :alternatives, :dependent => :destroy
  belongs_to :algorithm
end
