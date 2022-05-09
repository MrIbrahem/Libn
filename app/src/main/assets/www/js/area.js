/*!
 * =====================================================
 * @Ibrahem_Qasim.
 * =====================================================

 * =====================================================
 */
let lineNo = 1;

function draw(side1, side2, side3) {
	var canvas = document.getElementById("tutorial");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, side1);
		ctx.lineTo(side2, 0);
		ctx.lineTo(0, side3);
		ctx.fillStyle = "rgb(200,0,180)";
		ctx.fill();
	}
};

function Area33(R1,R2,R3) {
	var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    //---------------------
	if (R1 < 11 && R2 < 11 && R3 < 11) {
		R1 = R1 * 8;
		R2 = R2 * 8;
		R3 = R3 * 8;
	} else if (R1 < 20 && R2 < 20 && R3 < 20) {
		R1 = R1 * 4;
		R2 = R2 * 4;
		R3 = R3 * 4;
	} else if (R1 < 70 && R2 < 70 && R3 < 70) {
		R1 = R1 * 2;
		R2 = R2 * 2;
		R3 = R3 * 2;
	} else if (R1 > 200 && R2 > 200 && R3 > 200) {
		R1 = R1 / 4;
		R2 = R2 / 4;
		R3 = R3 / 4;
	}
    //---------------------
    var Ax=0, Ay=0;
    var Bx=R3, By=0;
    var Cx=(R2*R1+R3*R3-R1*R1)/(2*R3);
    var Cy=Math.sqrt(R2*R2-Cx*Cx);

    var Ox = canvas.width / 2 - Bx/2;
    var Oy = canvas.height / 2 + Cy/2;

    ctx.beginPath();
    ctx.moveTo(Ox+Ax, Oy-Ay);
    ctx.lineTo(Ox+Bx, Oy-By);
    ctx.lineTo(Ox+Cx, Oy-Cy);
    ctx.closePath();
    ctx.fillStyle="gold"; 
	ctx.lineWidth=2;
    ctx.stroke(); 
	ctx.fill();
};

function subval(val) {
	val = val.toString();
    if (val.indexOf(".") > -1) {
        val = val.split(".")[0] + "." + val.split(".")[1].substring(0, 6);
    }
	return val;
};

function Area() { // parseFloat // parseInt
	var side1 = parseFloat(document.getElementById("side1").value);
	var side2 = parseFloat(document.getElementById("side2").value);
	var side3 = parseFloat(document.getElementById("side3").value);
     
	Area33(side1,side2,side3);

	// console.log(typeof(side1));

	var s = (side1 + side2 + side3) / 2;

	var area_m = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
	var area_l = area_m / 44.44;

	area_l = subval(area_l);
	area_m = subval(area_m);

	document.getElementById("display_m").innerHTML = area_m;
	document.getElementById("display_l").innerHTML = area_l;
	//---------
	if (area_m) {
		markup = "<tr>";
		markup += "<td>" + lineNo + "</td>";
		markup += "<td>" + side1 + "</td>";
		markup += "<td>" + side2 + "</td>";
		markup += "<td>" + side3 + "</td>";
		markup += "<td>" + area_m + "</td>";
		markup += "<td>" + area_l + "</td>";
		markup += "</tr>";
		tableBody = $("#allrows tbody");
		tableBody.append(markup);
		lineNo++;
	}
	//---------
};

function AddToAll() {
	var allm = document.getElementById("allm").innerHTML;
	
	if (allm == 'NaN') allm = 0;
	if (allm == '') allm = 0;
	
	var allm = parseFloat(allm);

	var display_m = document.getElementById("display_m").innerHTML;
	
	if (display_m == 'NaN') display_m = 0;
	if (display_m == '') display_m = 0;
	
	var display_m = parseFloat(display_m);

	var me = display_m + allm;
	me = subval(me);
	
	document.getElementById("allm").innerHTML = me;

	var alll = me / 44.44;
	
	alll = subval(alll);
	
	document.getElementById("alll").innerHTML = alll;

	document.getElementById("side1").value = '';
	document.getElementById("side2").value = '';
	document.getElementById("side3").value = '';
	document.getElementById("display_m").innerHTML = '';
	document.getElementById("display_l").innerHTML = ''
};
