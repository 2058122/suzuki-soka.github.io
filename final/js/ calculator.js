var j=0, ans = 0, num = "0", num2="0", num3="0", key = "", kigou = "", y=0;
function cal(btn){
    // 変数btnの中身が数値か文字かで分岐
    if (!isNaN(btn)) {
        // =を押した後も続けて計算できるようにする
        if (kigou=="=") {
            ans=0;
            kigou="";
        }
		if (!isNaN(key)) {
            if (num=="0"){
                num=""+btn;  
            } else {
                num+=""+btn;  // 文字列を順番に繋ぐため""を挟む
            }
		} else {
            num=""+btn;
        }
        document.getElementById("output").innerHTML=num;
	} else {
		if (!isNaN(key)) {
            if (kigou=="") ans=num;
            else ans=eval(ans+kigou+num);
            num="0";
            document.getElementById("output").innerHTML=ans;
		} 
		kigou = btn;
        document.getElementById("tyoe").innerHTML=kigou;
	}
    document.getElementById("type").innerHTML=kigou;
	key = btn;
}

// 小数点(.)は記号でもあり数字の一部でもある特殊なキー
function cal_period() { 
    if (num.indexOf(".")<0) num += ".";  //既に小数点がないか確認
    key=0;
	document.getElementById("output").innerHTML = num;
}

// 特殊なキー「=」
function cal_equal() {
    document.title=key+"="+":"+ans+"["+kigou+"]"+num;
    num2=ans;
    // 2回続けて=を押すと計算を初期化する
	if (key == "=") {
		ans = 0;
		key = "";
	} else {
        if (kigou=="") ans=num;
		else ans = eval(ans + kigou + num);
		key = "=";
	}
	document.getElementById("output").innerHTML = ans;
	document.getElementById("type").innerHTML = key;
	document.getElementById("message").innerHTML = num2 + kigou + num + "=" +ans;
	num = "0";
	kigou = key;
}

//　特殊なキー「AC」
function cal_AC() {
    ans = 0, num = "0", num2="0", num3="0", key = "", kigou = "", y=0;
	document.getElementById("output").innerHTML = ans;
	document.getElementById("type").innerHTML = key;
	document.getElementById("message").innerHTML = "";
}

//　累乗を計算
function cal_power(i) {
    if(key=="=") num=ans;
    if(i==1){
        num=num*num;
        document.getElementById("output").innerHTML=num;
        document.getElementById("message").innerHTML = Math.sqrt(num)+"^2="+num;
    } else if(i==2){
        num=num*num*num;
        document.getElementById("output").innerHTML=num;
        document.getElementById("message").innerHTML = Math.cbrt(num)+"^3="+num;
    } else if(i==3){
        if(y==1){
            num2=num;
            ans=1;
            for(j=0;j<num2;j++){
                ans=ans*num3;
            }
            document.getElementById("output").innerHTML=num2;
            document.getElementById("message").innerHTML=num3+"^"+num2+"="+ans;
            y=0;
        }
        else {
        y=1;
        num3=num;
        num=0;
        }
    }
}

// ルートを計算
function cal_root() {
    if(key=="=") num=ans;
    num=Math.sqrt(num);
    document.getElementById("output").innerHTML=num;
    document.getElementById("message").innerHTML ="√"+num*num+"="+num;
}

// 百分率を表示
function cal_percent() {
    if(num==0){
        ans=ans*0.01;
        document.getElementById("output").innerHTML =ans;
        document.getElementById("message").innerHTML =ans*100 +"の百分率は"+ans;
    } else {
        num=num*0.01;
        document.getElementById("output").innerHTML =num;
        document.getElementById("message").innerHTML =num*100 +"の百分率は"+num;
        
    }
}

// 数値の符号を変える
function cal_plmi() {
    if(num==0){
        ans*=-1;
        num=ans;
        document.getElementById("output").innerHTML =ans;
        document.getElementById("message").innerHTML =ans;
    } else {
    num*=-1;
    document.getElementById("output").innerHTML =num;
}
}

// 特殊なキー「C」
function cal_C() {
    num=Math.floor(num/10);
    document.getElementById("output").innerHTML =num;
}