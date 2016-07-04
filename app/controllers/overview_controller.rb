class OverviewController < ApplicationController

  def evaluating
    @arrCrit = Array.new()
    @arrAlt = Array.new()
    cust1=Criterion.new("1", "John", "Homo")
    cust2=Criterion.new("2", "Poul", "Hetero")
    @arrCrit.push(cust1)
    @arrCrit.push(cust2)
    alt1=Criterion.new("1", "John", "Pedal")
    alt2=Criterion.new("2", "Poul", "Prav")
    @arrAlt.push(alt1)
    @arrAlt.push(alt2)
  end

  def evaluating_com
  end

  def result
  end
end
