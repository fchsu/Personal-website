// 全域變數設定



// 動作與監聽
document.querySelector('.navbar h1 a').addEventListener('click', scrolltop, false);
document.querySelector('.navbar ul').addEventListener('click', scrollId, false);
document.querySelector('.navbar .navRWD').addEventListener('click', scrollId, false);
document.querySelector('.fa').addEventListener('click', menuRWD, false);
window.addEventListener('scroll', skillBar, false);


// 函式設定
	// 點擊擁有者名稱，返回網頁頂部的滾動效果
function scrolltop(e){
	e.preventDefault();
	const targetPos = document.querySelector("body").offsetTop;
	if(window.scroll){
		window.scroll({"behavior": "smooth", "top": targetPos});
	}
}
	// 點擊連結移動至指定段落
function scrollId(e){
	e.preventDefault();
	if (e.target.nodeName === 'A'){
		const select = e.target.getAttribute('href');
		const targetPos = document.querySelector(select).offsetTop;
		window.scroll({"behavior": "smooth", "top": targetPos});
	}
}
	// 點擊漢堡選單，開啟章節選單
function menuRWD(e){
	const menu = document.querySelector('.navbar .navRWD');
	const menuBottom = document.querySelector('.fa');
	if (menu.classList == 'navRWD displayNavRWD'){
		menu.classList.remove('displayNavRWD');
		menuBottom.style.color = '#cccccc';
		menuBottom.style.border = '2px solid #cccccc';
	}else{
		menu.classList.add('displayNavRWD');
		menuBottom.style.color = '#fff';
		menuBottom.style.border = '2px solid #fff';
	}
	
}
	// 畫面捲軸滾至指定高度後，觸發特效
function skillBar(e){
	const headerHeight = document.querySelector('#header').offsetHeight;
	const aboutHeight = document.querySelector('#about').offsetHeight;
	const skillHeight = document.querySelector('#skill').offsetHeight;
	const worksHeight = document.querySelector('#works').offsetHeight;
	const contactHeight = document.querySelector('#contact').offsetHeight;
	const headeroffsetY = document.querySelector('#header').offsetTop;
	const aboutoffsetY = document.querySelector('#about').offsetTop;
	const skilloffsetY = document.querySelector('#skill').offsetTop;
	const worksoffsetY = document.querySelector('#works').offsetTop;
	const contactoffsetY = document.querySelector('#contact').offsetTop;
	const skillClass = ['htmlskill', 'cssskill', 'jsskill', 'githubskill'];
	const skillList = document.querySelectorAll('.fullskill div');
	const Len = skillList.length;
	let pageY = window.pageYOffset;
	// 觸發背景視差滾動
	document.querySelector('body').style.backgroundPositionY = `${+ (pageY / 2)-800}px`;
	// 觸發背景視差滾動
	if (pageY >= headeroffsetY && pageY < (headeroffsetY + headerHeight)){
		document.querySelector('.header').style.backgroundPosition = `50% ${+ (pageY / 2)}px`;
	}
	if (pageY >= aboutoffsetY && pageY < (aboutoffsetY + aboutHeight)){
		// 觸發 nav 導航列特效
		document.querySelector('.navbar a[href="#about"]').classList.add('navposition');
	}else{
		// 移除 nav 導航列特效
		document.querySelector('.navbar a[href="#about"]').classList.remove('navposition');
	}
	if (pageY >= skilloffsetY && pageY < (skilloffsetY + skillHeight)){		
		document.querySelector('.navbar a[href="#skill"]').classList.add('navposition');
		// 技能條動態顯示 往右
		for (let i = 0; i < Len; i++){
			skillList[i].classList.add(skillClass[i]);
		}
	}else{
		document.querySelector('.navbar a[href="#skill"]').classList.remove('navposition');
		// 技能條動態顯示 往左
		for (let i = 0; i < Len; i++){
			skillList[i].classList.remove(skillClass[i]);
		}
	}
	if (pageY >= worksoffsetY && pageY < (worksoffsetY + worksHeight)){
		document.querySelector('.navbar a[href="#works"]').classList.add('navposition');
	}else{
		document.querySelector('.navbar a[href="#works"]').classList.remove('navposition');
	}
	if (pageY >= contactoffsetY && pageY < (contactoffsetY + contactHeight)){
		document.querySelector('.navbar a[href="#contact"]').classList.add('navposition');
	}else{
		document.querySelector('.navbar a[href="#contact"]').classList.remove('navposition');
	}
}