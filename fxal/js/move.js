// window.onload=tab;

//     function tab(){
//         //当前高亮显示的页签的索引
//         var index=0;
//         var timer=null;
//         //获取所有的页签和要切换的内容
//         var oBtn=document.getElementById('bi_z');
//         var oBox=document.getElementById('bi_n');
//         var lis=oBtn.getElementsByTagName('li');
//         var divs=oBox.getElementsByTagName('li');
//         //遍历每一个页签且给他们绑定事件
//         for (var i=0;i<lis.length;i++){
//             lis[i].id=i;
//             lis[i].onmouseover=function(){
//                 clearInterval(timer);
//                 changeOption(this.id);
//                 timer=setInterval(autoPlay,5000);
//             }
//             divs[i].onmouseover=function(){
//                 clearInterval(timer);
//             }
//             divs[i].onmouseout=function(){
//                 timer=setInterval(autoPlay,5000);
//             }
//         }
//         if (timer){
//             clearInterval(timer);
//             timer=null;
//         }
//         //添加定时器，改变当前高亮的索引
//         timer=setInterval(autoPlay,5000);
//         function autoPlay(){                      //封装函数方便调用
//             index++;
//             if (index>=lis.length){
//                 index=0;
//             }
//             changeOption(index);
//         }
//         function changeOption(curIndex){           //封装函数方便调用
//             for (var j=0;j<lis.length;j++){
//                 lis[j].className='';
//                 divs[j].style.display='none';
//             }
//             //高亮显示当前页签
//             lis[curIndex].className='active';
//             divs[curIndex].style.display='block';
//             index=curIndex;
//         }
//     }

//     function Show_Menu2(thisObj,Num)
//     {
//         if(thisObj.className=="on")
//             return;var dhObj=thisObj.parentNode.id;
//             var dhList=document.getElementById(dhObj).
//             getElementsByTagName("li");
//             for(i=0;i<dhList.length;i++){if(i==Num)
//             {
//                 thisObj.className=("on t"+i);
//                 document.getElementById(dhObj+"_content"+i).
//                 style.display="block"
//             }
//             else{
//                     dhList[i].className=("off b"+i);
//                     document.getElementById(dhObj+"_content"+i).
//                     style.display="none"
//                 }
        
//             }

//     }

/*$('#btn li').click(function() {
            var i = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $('#box li').eq(i).show().siblings().hide();
        });*/

    
    function tab(id,more1,more2,more3){
        //鐟滅増鎸告晶鐘愁殗濡懓鐦ㄩ柡鍕⒔閵囨岸鎯冮崟顖樷偓澶岀驳閸撗勭暠缂佷究鍨圭槐锟�
        var index=0;
        var timer=null;
        //闁兼儳鍢茶ぐ鍥箥閳ь剟寮垫径灞剧暠濡炪倗鏁搁鐑藉椽瀹€鍐炬矗闁告帒娲﹀畷鏌ユ儍閸曨偄鏁堕悗鐧告嫹
        var btn=document.getElementById(id);
        var box=document.getElementById(more1);
        var lis=btn.getElementsByTagName(more2);
        var divs=box.getElementsByTagName(more3);
        //闂侇剙绉村璇残掕箛搴ｎ伇濞戞搩浜妴澶岀驳閸欍儳鐟紓浣圭懁缁剚绂掗鍌滄嫧閻庤鐭花銊︾閿燂拷
        for (var i=0;i<lis.length;i++){
            lis[i].id=i;
            lis[i].onmouseover=function(){
                clearInterval(timer);
                changeOption(this.id);
            }
            lis[i].onmouseout=function(){
                timer=setInterval(autoPlay,3000);
            }
            divs[i].id=i;
            divs[i].onmouseover=function(){
                clearInterval(timer);
                changeOption(this.id);
            }
            divs[i].onmouseout=function(){
                timer=setInterval(autoPlay,3000);
            }
        }
        if (timer){
            clearInterval(timer);
            timer=null;
        }
        //婵烇綀顕ф慨鐐碘偓瑙勭濡炲倿宕抽…鎺旂闁衡偓閻熸澘缍佺憸鐗堟尭婢х姵顨囧Ο鐟扮槰闁汇劌瀚崒銊ヮ嚕閿燂拷
        timer=setInterval(autoPlay,3000);
        function autoPlay(){                      //閻忓繋娴囬ˉ濠囧礄閼恒儲娈堕柡鍌炩偓娑氣敀閻犲鍟伴弫锟�
            index++;
            if (index>=lis.length){
                index=0;
            }
            changeOption(index);
        }
        function changeOption(curIndex){           //閻忓繋娴囬ˉ濠囧礄閼恒儲娈堕柡鍌炩偓娑氣敀閻犲鍟伴弫锟�
            for (var j=0;j<lis.length;j++){
                lis[j].className='';
                divs[j].style.display='none';
            }
            //濡ゅ倹眉鐎垫帡寮伴崜褋浠涚憸鐗堟尭婢х姵銇勯悽娈垮姰
            lis[curIndex].className='active';
            divs[curIndex].style.display='block';
            index=curIndex;
        }
    }
    window.onload=function()
    {
        tab("btn","box","li","li");
        tab("btn2","box2","li","li");
    }