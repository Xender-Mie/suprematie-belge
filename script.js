index=7
const hymne = new Audio("La Brabançonne 8-Bit Version.mp3");

function predecesseur(){
	index-=1
	let image=document.querySelector("#souverain");
	if(index==7){
		image.src="images/Philippe.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="Le roi actuel des Belges est <b>Philippe de Belgique</b>, fils de feu roi Albert II de Belgique et de la reine Paola Ruffo di Calabria. Il accéde au trône du plat pays le 21 juillet 2013 en prêtant serment devant les chambres en néerlandais en français et en allemand après que l'abdication de son père.";
	}
	if(index==6){
		image.src="images/Albert II.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="<b>Albet II</b> sixième roi des Belges à été curonné le 9 août 1993 après la mort de son frère Baudouin. Après son abdication en 2013 c'est son fils le prince des Belges qui devient roi.";
	}
	if(index==5){
		image.src="images/Baudouin.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="Sa majesté <b>Baudouin</b> est le cinquième roi des Belges et ce du 17 juillet 1957 jusqu'à sa mort le 31 juillet 1993, par manque de descendants c'est son frère qui deviendra le nouveau roi des Belges.";
	}
	if(index==4){
		image.src="images/Léopold III.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="Le roi <b>Léopold III</b> est le quatrième roi des belges, il a régné du 23 février 1934 après la mort tragique de son père Albert I dans un accident d'alpinisme, apès son abdication le 16 juillet 1951 c'est son fils Baudouin qui succède au tône.";
	}
	if(index==3){
		image.src="images/Albert I.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="<b>Albert I</b> est le troisième roi des Belges et ce depuis le 23 décemre 1909, mais il est également connu sous le nom de <i>Roi Soldat</i> ou <i>Roi Chevalier</i>, il deviendra très populaire dans tout le royaume, il instaure l'égalité des langues nationales. Il meurt le 17 février 1934 dans les falaise belges alors qu'il s'entraînait en prévision de ses futures ascensions dans les Alpes ou les Dolomites.";
	}
	if(index==2){
		image.src="images/Leopold II.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="<b>Léopold II</b>, de son nom <b>Léopold Louis-Philippe Marie Victor de Saxe-Cobourg-Gotha</b>, a était couronné le 17 décembre 1865 suite à la mort de son père Léopold premier du nom, il régnera jusqu'au 17 décembre 1909 des suite d'une maladie qui aura eu raison de lui.";	
	}
	if(index==1){
		image.src="images/Leopold I.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="<i>Sa majesté <b>Léopold</b> premier du nom roi des Belges et prince de Grèce de la maison Saxe-Cobourg et Gotha</i> accéde au trône le 21 juillet 1831 à l'issue de la guerre d'indépendance contre les Pays-Bas, grand chef militaire il devient le premier roi des Belges par élections du Congrès National Belge. Il régnera sur notre grand pays jusquà sa mort le 10 décembre 1865 des suites d'une maladie.";	
	}
	if(index<1){
		index=1
	}
}

function successeur() {
	index+=1
	let image=document.querySelector("#souverain");
	if(index==8){
		image.src="images/Elisabeth.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="<b>Élisabeth de Belgique</b> est la fille aînée du roi Philippe et de la reine Mathilde d’Udekem d’Acoz, elle sucédera à son père lorsque celui-ci renoncera à sa fonction ou lorsqu'il décedera.";	
	}
	if(index==7){
		image.src="images/Philippe.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="Le roi actuel des Belges est <b>Philippe de Belgique</b>, fils de feu roi Albert II de Belgique et de la reine Paola Ruffo di Calabria. Il accéde au trône du plat pays le 21 juillet 2013 en prêtant serment devant les chambres en néerlandais en français et en allemand après que l'abdication de son père.";
	}
	if(index==6){
		image.src="images/Albert II.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="<b>Albet II</b> sixième roi des Belges à été curonné le 9 août 1993 après la mort de son frère Baudouin. Après son abdication en 2013 c'est son fils le prince des Belges qui devient roi.";
	}
	if(index==5){
		image.src="images/Baudouin.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="Sa majesté <b>Baudouin</b> est le cinquième roi des Belges et ce du 17 juillet 1957 jusqu'à sa mort le 31 juillet 1993, par manque de descendants c'est son frère qui deviendra le nouveau roi des Belges.";
	}
	if(index==4){
		image.src="images/Léopold III.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="Le roi <b>Léopold III</b> est le quatrième roi des belges, il a régné du 23 février 1934 après la mort tragique de son père Albert I dans un accident d'alpinisme, après son abdication le 16 juillet 1951 c'est son fils Baudouin qui succède au tône.";
	}	
	if(index==3){
		image.src="images/Albert I.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="<b>Albert I</b> est le troisième roi des Belges et ce depuis le 23 décemre 1909, mais il est également connu sous le nom de <i>Roi Soldat</i> ou <i>Roi Chevalier</i>, il deviendra très populaire dans tout le royaume, il instaure l'égalité des langues nationales. Il meurt le 17 février 1934 dans les falaise belges alors qu'il s'entraînait en prévision de ses futures ascensions dans les Alpes ou les Dolomites";
	}
	if(index==2){
		image.src="images/Leopold II.jpg";
		let texte=document.querySelector("#p_souverain");
		texte.innerHTML="<b>Léopold II</b>, de son nom <b>Léopold Louis-Philippe Marie Victor de Saxe-Cobourg-Gotha</b>, a était couronné le 17 décembre 1865 suite à la mort de son père Léopold premier du nom, il régnera jusqu'au 17 décembre 1909 des suite d'une maladie qui aura eu raison de lui.";	
	}
	if(index>8){
		index=8
	}
}

function anthem(){
	hymne.play();
}