module SeriesUtils
  module_function

  def calculate_lag(array)
    array.each_cons(2).map { |x, y| y - x }
  end
end
