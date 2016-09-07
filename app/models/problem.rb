class Problem < ActiveRecord::Base
  has_many :criterions, :dependent => :destroy
  has_many :alternatives, :dependent => :destroy
  belongs_to :algorithm
  accepts_nested_attributes_for :alternatives
  accepts_nested_attributes_for :criterions
end
