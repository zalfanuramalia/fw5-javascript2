const name = [
  "Abigail","Alexandra","Alison",
  "Amanda","Angela","Bella",
  "Carol","Caroline","Carolyn",
  "Deirdre","Diana","Elizabeth",
  "Ella","Faith","Olivia","Penelope"]
  
  function searchname(sentence, num, callback)
  {
    const tempnamefilter = name.filter(word => {
      return word.toLowerCase().includes(sentence)
    })
    if(tempnamefilter != 0)
    {
      return tempnamefilter.slice(0, num)
    }
    else
    {
      return "Kata tidak Cocok!"
    }
    callback(tempnamefilter) 
  }
  
  const showname = (lists) => {
    lists.map(list => console.log(lists))
  }
  
console.log(searchname("an", 4, showname))