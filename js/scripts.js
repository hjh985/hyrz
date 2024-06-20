       var _t1 = 0; 	//打开页面时等待图片载入的时间，单位为秒，可以设置为0
            var _t2 = 3; 	//图片轮转的间隔时间
            var _tnum = 3; //焦点图个数
            var _tn = 1;	//当前焦点
            var _tl =null;
            _tt1 = setTimeout('change_img()',_t1*1000);

            function change_img(){
                setFocus(_tn);
                _tt1 = setTimeout('change_img()',_t2*1000);//延时器
            }
            function setFocus(i){
                if(i>_tnum){_tn=1;i=1;}
                _tl?document.getElementById('focusPic'+_tl).style.display='none':'';
                document.getElementById('focusPic'+i).style.display='block';
                _tl=i;
                _tn++;
            }
				 function goodbye() {
		
    alert("Goodbye!");
  }

  window.onunload = goodbye;