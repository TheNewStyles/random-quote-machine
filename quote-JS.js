$(document).ready(function(){
  
   $("#quote-button").click(function(){  

   	    var btn = $(this);
	    btn.prop('disabled',true);
	    window.setTimeout(function(){ 
	        btn.prop('disabled',false);
	    },1000);

      //quotes array    
      var quotes = [
        "&ldquo;It turns out Jesus is a squirrel. A big fat meaty one. And I shot and ate that son of a bitch.&rdquo;<br/> - John Fitzgerald",
        "&ldquo;My heart bleeds. But revenge is in the creator's hands.&rdquo;<br/> - Hikuc",
        "&ldquo;I ain't afraid to die anymore. I'd done it already.&rdquo;<br/> - Hugh Glass",
        "&ldquo;I guess... I can't help thinking about whether we did the right...&rdquo;<br/> - Bridger",
        "&ldquo;I can't remember my wife's face. I worry I won't recognize her when I get back home.&rdquo;<br/> - Andrew Henry",
        "&ldquo;You better take that last breath of yours now!&rdquo;<br/> - John Fitzgerald",
        "&ldquo;You all have stolen everything from us. Everything! The land. The animals.&rdquo;<br/> - Elk Dog",
        "&ldquo;God giveth, God taketh away.&rdquo;<br/> - John Fitzgerald",
        "&ldquo;At least he heard me.&rdquo;<br/> - Hawk"        
      ];
      
      // get random id from array  
      var random = quotes[Math.floor( Math.random() * quotes.length)];
	  // add text into #quotes id in html      
      $('#quotes').hide().html(random).fadeIn(1000);
	  $('#quote-button').blur();
	  // tweet the quote
	  $("#tweet-link").attr("href", 'https://twitter.com/intent/tweet?text=' + random);      
    });     
});