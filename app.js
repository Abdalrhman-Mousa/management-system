function user (id,name,dep,level,_pic) {
    this.id_user=id;
    this.fullname=name;
    this.dep=dep;
    this.level=level;
    this.salary = calculate(level);

    function calculate (level)
    {

        switch(level){
            case"junior":
            return Math.round(Math.random()*500 +500);
            break;
            case"mid senior":
            return Math.round(Math.random()*500+1000);
            break;
            case"senior":
            return Math.round(Math.random()*500+1500);
            break;
    
        }
    }
    


this.print =function(){
    return `I am ${this.fullName} my salary is ${this.salary} `;
}

const allusers = [
    new user(1000,"Ghazy Samer","administration","Senior"),
    new user(1001,"Lana Ali","finance","Senior"),
    new user(1002,"Tamara Ayoub","markiting","Senior"),
    new user(1003,"Safi Waleed","administration","Mid-Senior"),
    new user(1004,"Omar Zaid","develobment","Senior"),
    new user(1005,"Rana Saleh","develobment","Junior"),
    new user(1006,"Hadi Ahmad","finance","Mid-Senior"),

];

for (let i = 0; i < users.length; i++) {
    console.log(users[i].print());
}
