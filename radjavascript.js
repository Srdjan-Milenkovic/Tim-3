const primarna = "#346CD4"
const accent ="#21468B"
const sekundarna ="#FFFFFF"


function figmasort(){
$(".figmatag").css({"background-color": primarna, "color": sekundarna, "transition":"300ms"})
$(".ilustracijetag,.zavrsenkodtag").css({"background-color": sekundarna, "color": accent, "transition":"300ms"})
$("div").filter(".kodcard,.ilustracijacard").not(".figmacard").fadeOut(200)
$(".figmacard").fadeIn(1)
$(".reset").css("display","flex")
}

function ilustracijasort(){
$(".ilustracijetag").css({"background-color": primarna, "color": sekundarna, "transition":"300ms"})
$(".figmatag,.zavrsenkodtag").css({"background-color": sekundarna, "color": accent, "transition":"300ms"})
$("div").filter(".kodcard,.figmacard").not(".ilustracijacard").fadeOut(200)
$(".ilustracijacard").fadeIn(1)
$(".reset").css("display","flex")
    }

function kodsort(){
$(".zavrsenkodtag").css({"background-color": primarna, "color": sekundarna, "transition":"300ms"})
$(".figmatag,.ilustracijetag").css({"background-color": sekundarna, "color": accent, "transition":"300ms"})
$("div").filter(".ilustracijacard,.figmacard").not(".kodcard").fadeOut(200)
$(".kodcard").fadeIn(1)
$(".reset").css("display","flex")
        }

function resetsort(){
$(".figmacard, .ilustracijacard, .kodcard").fadeIn(300)
$(".reset").fadeOut(300)
$(".figmatag, .ilustracijetag, .zavrsenkodtag").css({"background-color": sekundarna, "color": accent, "transition":"300ms"})  
}

function sajtovishow(){
$(".sajtovi").css({"background-color": accent, "transition": "300ms"})
$(".ilustracije, .drugo").css({"background-color": primarna, "transition": "300ms"})
$(".ilustracijeimg, .drugoimg").fadeOut(1)
$(".sajtoviimg").fadeIn(200)
}

function ilustracijeshow(){
$(".ilustracije").css({"background-color": accent, "transition": "300ms"})
$(".sajtovi, .drugo").css({"background-color": primarna, "transition": "300ms"})
$(".sajtoviimg, .drugoimg").fadeOut(1)
$(".ilustracijeimg").fadeIn(200)
}

function drugoshow(){
$(".drugo").css({"background-color": accent, "transition": "300ms"})
$(".ilustracije, .sajtovi").css({"background-color": primarna, "transition": "300ms"})
$(".sajtoviimg, .ilustracijeimg").fadeOut(1)
$(".drugoimg").fadeIn(200)
}


$(document).ready(function () { 
    $(".img1").click(function(){
$(".full1").fadeIn(200).css("display", "flex")
    })

$(".img2").click(function(){
    $(".full2").fadeIn(200).css("display", "flex")
})
  
$(".img3").click(function(){
    $(".full3").fadeIn(200).css("display", "flex")
})
        
$(".img4").click(function(){
    $(".full4").fadeIn(200).css("display", "flex")
        })
    
    $(".img5").click(function(){
        $(".full5").fadeIn(200).css("display", "flex")
    })
      
    $(".img6").click(function(){
        $(".full6").fadeIn(200).css("display", "flex")
    })
            

    
$(".fullimg").click(function(){
    $(".fullimg").fadeOut(200)
    })    
        
})

