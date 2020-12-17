function singSong (verses) {
  
    if (verses === null || verses === "" || verses < 1 || verses > 12) {
        alert("Spoilsport! Read the linked info to build your Christmas spirit!")
        return
    }

    var song = ""
    var firstGift = "A partridge in a pear tree";
    
    var day = [
      "zeroeth",
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
      "ninth",
      "tenth",
      "eleventh",
      "twelfth"
    ];
    
    var gifts = [
      "Twelve drummers drumming,",
      "Eleven pipers piping,",
      "Ten lords-a-leaping,",
      "Nine ladies dancing,",
      "Eight maids-a-milking,",
      "Seven swans-a-swimming,",
      "Six geese-a-laying,",
      "Five golden rings,",
      "Four calling birds,",
      "Three french hens,",
      "Two turtle doves,",
      "And a partridge in a pear tree.",
      "The most metal gift of all - NOTHING"
    ];
    
    var backsies = gifts.reverse();
    
    var verseCounter = 1;
    
    function verseStarter (index) {
      console.log(`On the ${day[index]} day of Christmas,`)
      console.log("My true love gave to me,")
      song += `On the ${day[index]} day of Christmas, \n`
      song += "My true love gave to me,\n"
      if (index === 1) {
        console.log(firstGift)
        song += firstGift
        song += "\n"
      }
    }
    
    function verseEnder () {
      console.log(" ")
      song += "\n"
    }
  
    for (var i = 1; i <= verses; i++) {
      verseStarter(verseCounter)
      if (i !== 1) {
        for (var j = verseCounter; j > 0 ; j--){
          console.log(backsies[j])
          song += backsies[j]
          song += "\n"
        }
      }  
      if (i < 12) {
          verseEnder()
      }
      verseCounter++;   
    }

    alert("Check the console...")
    return song
  }
  
export default singSong;