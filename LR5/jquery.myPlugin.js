(function( $ ) {
    var methods = {
        start : function () {
          var pobeda1=0;
          var pobeda2=0;
          var k=0;
            $("#hod").click(function(){
            var znach1=Math.floor(Math.random()*((6-1)+1) + 1);
            var znach2=Math.floor(Math.random()*((6-1)+1) + 1);
            document.getElementById("kub1").value = znach1;
            document.getElementById("kub2").value = znach2;
            summa2=znach1+znach2;
            document.getElementById("td1").innerHTML+="<span id=i"+k+">"+summa2+" </span>";
            setTimeout(() => {var znach1=Math.floor(Math.random()*((6-1)+1) + 1);
            var znach2=Math.floor(Math.random()*((6-1)+1) + 1);
            document.getElementById("kub1").value = znach1;
            document.getElementById("kub2").value = znach2;
            summa1=znach1+znach2;
            document.getElementById("td2").innerHTML+= "<span id=l"+k+">"+summa1+" </span>";
            if(summa1>summa2){
              pobeda1+=1;
              document.getElementById("itogo1").innerHTML=pobeda1;
              document.getElementById("i"+k).style.color="red";
              document.getElementById("l"+k).style.color="green";
              k+=1
            }
            if(summa1<summa2){
              pobeda2+=1;
              document.getElementById("itogo2").innerHTML=pobeda2;
              document.getElementById("i"+k).style.color="green";
              document.getElementById("l"+k).style.color="red";
              k+=1
            }
            if(summa1==summa2){
              pobeda1+=1;
              pobeda2+=1;
              document.getElementById("itogo1").innerHTML=pobeda1;
              document.getElementById("itogo2").innerHTML=pobeda2;
              document.getElementById("i"+k).style.color="green";
              document.getElementById("l"+k).style.color="green";
              k+=1
            }
            summa1=0;
            summa2=0;
            if(pobeda1==6){
            alert("Победа компьютера"); 
            }
            else if(pobeda2==6){alert("Вы выиграли!"); }
          }, 1000);
        })}
}
     $.fn.myPlugin = function(method) { 
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
          } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
          } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
          } 
          return this.each(methods[start]);
        };
      })( jQuery );