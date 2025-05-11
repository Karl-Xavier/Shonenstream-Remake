const weekOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function sortedDayAndMonth (data){

  data.sort((a,b) => weekOrder.indexOf(a.day) - weekOrder.indexOf(b.day))

}