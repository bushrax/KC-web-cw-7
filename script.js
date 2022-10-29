function BMI( weight, height){
    let result= weight / ( height * height);
    return result; 

}
console.log(BMI(  50,1.8));

function status( bodymass){
    if (bodymass< 18.5){
        return "لديك نقص في الوزن";
    } else if ( bodymass< 25 && bodymass > 18.5){ 
        return "وزنك صحي";
    } else if ( bodymass > 25){
        return "لديك زيادة في الوزن"; 
    }

}

 function calculate(){
    let weight = document.getElementById( 'weight').value
    let height = document.getElementById( 'height').value

    let bmi_value = BMI( weight)
    let desc= status( bmi_value)
    let box= document.getElementById( 'result')

    box.innerText = bmi_value + " == " + desc
 }

