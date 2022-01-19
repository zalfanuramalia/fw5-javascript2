const nama = [
    "Abigail", "Alexandra", "Alison","Amanda", "Angela", "Bella","Carol","Caroline", 
    "Carolyn","Deirdre", "Diana", "Elizabeth","Ella", "Faith", "Olivia", "Penelope"];

function find(nama, cb) {
    cb = cb.split(""); 
    return nama.filter(function(word) { 
      return cb.every(function(char) {
        return word.includes(char); 
        });
    });
  }
  
  console.log(find(nama, "al"));