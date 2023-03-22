const HonapNevek = ["január", "február", "március","április", "május", "június", "július", "augusztus", "szeptember", "október" ,"november", "december"]
const NapNevek = ["vasárnap", "hérfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]

function Ido(){
    let Ido = new Date();
    Ora = Ido.getHours();
    Perc = Ido.getMinutes();
    Mp = Ido.getSeconds();
    Ev = Ido.getFullYear();
    Honap = Ido.getMonth();
    Nap = Ido.getDate();
    NapSzs = Ido.getDay();
    
    //nulla hozzáadása

    if(Ora<10){
        Ora = "0"+Ora;
    }

    if(Perc<10){
        Perc = "0"+Perc;
    }

    if(Mp<10){
        Mp = "0"+Mp;
    }
    document.getElementById("ido").innerHTML = Ora +":" + Perc +":"+ Mp;
    document.getElementById("datum").innerHTML = Ev + "." + HonapNevek[Honap] + "." + Nap + "., " +  NapNevek[NapSzs];

}

//Ido();
setInterval(Ido,1000);