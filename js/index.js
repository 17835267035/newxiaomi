window.onload = function(){
	//购物车
	let che=document.getElementsByClassName('shopping')[0];

	let hezi=document.getElementsByClassName('hezi')[0];
	che.onmouseover=function(){
		hezi.style.display='block';
	}
	che.onmouseout=function(){
		hezi.style.display='none';
	}
	//导航
	let nav=document.getElementsByClassName('nav-center')[0];
	let lis11=nav.getElementsByTagName('li');
	for(let i=0;i<lis11.length-2;i++){
		lis11[i].onmouseover=function(){
			let item1=this.getElementsByClassName('item1')[0];
			item1.style.display='block';
		}
		lis11[i].onmouseout=function(){
			let item1=this.getElementsByClassName('item1')[0];
			item1.style.display='none';
		}
	}
	// 侧导航
	let cebian = document.getElementsByClassName('banner-left1')[0];
	let lis2 = cebian.getElementsByTagName('li');
	let item2 = cebian.getElementsByClassName('item')[0];
	for(let i=0;i<lis2.length;i++){
		lis2[i].onmouseover = function(){
			item2.style.display = 'block';
		}
		lis2[i].onmouseout = function(){
			item2.style.display = 'none';
		}
	}
	// btn
	let section = $('section')[0];
	let banner = document.getElementsByClassName('banner')[0];
	let lis1 = banner.getElementsByTagName('li'); 
	let btns = document.getElementsByClassName('btn-list')[0];
	let lis = btns.getElementsByTagName('li');
	let lefts = $('.banner-left',section)[0];
	let rights = $('.banner-right',section)[0];
	let now = 0;
	let next = 0;
	let w = parseInt(getComputedStyle(banner,null).width);
	let flag = true;
	console.log(w);
	// let now = 0;
	// for(let i=0;i<lis.length;i++){
	// 	lis[i].onclick = function(){
	// 		console.log(i);
	// 		lis1[now].style.display = 'none';
 //            lis1[i].style.display = 'block';
	// 		now = i;
	// 	}
	// }

// // ////////////////////////////////////////////////////////////

		// for(let i=0;i<lis.length;i++){
		// 	lis[i].onclick = function(){
		// 		for(let j=0;j<lis1.length;j++){
		// 			lis1[j].style.display = 'none';
		// 			lis[j].style.background = '#98979B';
		// 		}
		// 		lis1[i].style.display = 'block';
		// 		lis[i].style.background = '#fff';
		// 		num = i;
		// 	}
		// }


		for(let i=0;i<lis.length;i++){
			lis[i].onclick = function(){
				if(now == i){return;}
				lis[now].style.background = '#98979B';
				lis[i].style.background = '#fff';
				lis1[i].style.left = `${w}px`;
				animate(lis1[now],{left:-w});
				animate(lis1[i],{left:0});
				now = next = i;

			}
		}
// //////////////////////////////////////////////////////////////
// 		// lefts.onclick = function(){
// 		// 	moveL();
// 		// }
// 		// rights.onclick = function(){
// 		// 	move();
// 		// }

		rights.onclick = function(){
            if(!flag){
            	return;
            }
            move();
            flag = false;

		}
		lefts.onclick = function(){
			moveL();
		}

		let num = 0;
        let t;
        t = setInterval(move,3000);
        section.onmouseover = function(){
        	clearInterval(t);
        }
        section.onmouseout = function(){
        	t = setInterval(move,3000);
        }
// //////////////////////////////////////////////////////////////
   //      function move(){
   //      	num++;
   //      	if(num == lis1.length){
   //      		num = 0;
   //      	}
   //      	for(let i=0;i<lis1.length;i++){
   //      		lis1[i].style.display = 'none';
			// 	lis[i].style.background = '#98979B';
			// }
			// lis1[num].style.display = 'block';
			// lis[num].style.background = '#fff';

   //      	}

   //      function moveL(){
   //      	num--;
   //      	if(num < 0){
   //      		num = lis1.length-1;
   //      	}
   //      	for(let i=0;i<lis1.length;i++){
   //      		lis1[i].style.display = 'none';
			// 	lis[i].style.background = '#98979B';
			// }
			// lis1[num].style.display = 'block';
			// lis[num].style.background = '#fff';

   //      	}


// /////////////////////////////////////////////////////////////////
            //轮播
    	function move(){
        	next++;
        	if(next == lis1.length){
        		next = 0;
        	}
        	lis[now].style.background = '#98979B';
			lis[next].style.background = '#fff';
        	lis1[next].style.left = `${w}px`;
        	animate(lis1[now],{left:-w});
        	animate(lis1[next],{left:0},function(){
        		flag = true;
        	});
        	now = next;
   
		}

		function moveL(){
        	next--;
        	if(next < 0){
        		next = lis1.length-1;
        	}
        	lis[now].style.background = '#98979B';
			lis[next].style.background = '#fff';
        	lis1[next].style.left = `${-w}px`;
        	animate(lis1[now],{left:w});
        	animate(lis1[next],{left:0},function(){
        		flag = true;
        	});
        	now = next;

        	}

    //小米明星单品
	let section1 = $('section')[2];
	let starul = document.getElementsByClassName('star-bottom')[0];
	let bottomli = starul.getElementsByTagName('li')[0];
	let xyou = document.getElementsByClassName('btn-left')[0];  //you
	let ya = xyou.getElementsByTagName('i')[0];
	let xzuo = document.getElementsByClassName('btn-right')[0]; //zuo
	let za = xzuo.getElementsByTagName('i')[0];
	let w1 = (bottomli.offsetWidth+parseInt(getComputedStyle(bottomli,null).marginRight))*5;
	let i = 0;
	// console.log(w1);
	console.log(xyou)
	xyou.onclick = function(){
		if(i==1){
			return;
		}
		i++;
		// starul.style.marginLeft = `${-1240}px`;
		// starul.style.transition = `all ${0.5}s`;
		starul.style.transform = `translateX(-${i*w1}px)`;
		ya.style.color = '#e0e0e0';
		za.style.color = '#808080';
		// starul.style.left = `-${i*w1}px`;
		
	}
	xzuo.onclick = function(){
		if(i==0){
			return;
		}
		i--;
		// starul.style.marginLeft = `${0}px`;
		// starul.style.transition = `all ${0.5}s`;
		starul.style.transform = `translateX(-${i*w1}px)`;
			za.style.color = '#e0e0e0';
			ya.style.color = '#808080';
		// starul.style.left = `-${i*w1}px`;
		
		
      }

	
	function starmove(){
		starul.style.transform = `translateX(-${1240}px)`;
		starul.style.transition = `all ${1}s`;
	}
	function starmoveL(){
		starul.style.transform = `translateX(${0}px)`;
		starul.style.transition = `all ${1}s`;
	}
	let start1 = setInterval(starmoveL,4000);
	let start = setInterval(starmove,8000);


	//为你推荐
	let section2 = $('section')[4];
	let recommendul = document.getElementsByClassName('recommend-bottom')[0];
	// console.log(recommendul);
	let bottomlis = recommendul.getElementsByTagName('li')[0];
	let xyou1 = document.getElementsByClassName('btn-left')[1];  //you
	let ya1 = xyou1.getElementsByTagName('i')[0];
	let xzuo1 = document.getElementsByClassName('btn-right')[1]; //zuo
	let za1 = xzuo1.getElementsByTagName('i')[0];
	let w2 = (bottomlis.offsetWidth+parseInt(getComputedStyle(bottomlis,null).marginRight))*5;
	// let i = 0;
	console.log(w2);
	xyou1.onclick = function(){
		if(i==1){
			return;
		}
		i++;
		recommendul.style.transform = `translateX(-${i*w2}px)`;
		ya1.style.color = '#e0e0e0';
		za1.style.color = '#808080';	
	}
	xzuo1.onclick = function(){
		if(i==0){
			return;
		}
		i--;
		recommendul.style.transform = `translateX(-${i*w2}px)`;
			za1.style.color = '#e0e0e0';
			ya1.style.color = '#808080';
      }

    function tuijianmove(){
		recommendul.style.transform = `translateX(-${1240}px)`;
		recommendul.style.transition = `all ${1}s`;
	}
	function tuijianmoveL(){
		recommendul.style.transform = `translateX(${0}px)`;
		recommendul.style.transition = `all ${1}s`;
	}
	let start2 = setInterval(tuijianmoveL,4000);
	let starts = setInterval(tuijianmove,8000);
}