class food{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.image = loadImage("Milk.png");
    //var foodStock = 5 ;


    this.image = addImage("Milk.png");

    }
getFoodStock(){
var foodStockRef = database.ref('foodStock');
foodStockRef.on("value",function(data){
    foodStock = data.val();
 })

}

updateFoodStock(stock){
database.ref('/').update({foodStock:stock});

}

deductFood(){
if(foodStock>0) {
foodStock-=1;
}
}
display(){
var x=80,y=100;
imageMode(CENTER);
image(this.image,720,220,70,70 );
//foodStock=12;
if(this.foodStock!=0){

for (var i=0;i<this.foodStock;i++){

if(i%10==0){
x=80;
y=y+50;
}
image(this.image,x,y,50,50 );
x=x+30;

}

}

}


}