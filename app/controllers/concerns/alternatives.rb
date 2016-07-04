class Alternative
   @@no_of_alternatives=0
   attr_reader :id;
   attr_reader :title;
   def initialize(id, title, description)
      @id=id
      @title=title
      @description=description
   end
end