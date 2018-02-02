$(function(){
    var i=0;
    var banTli1=$(".banT li").first().clone()
    $(".banT").append(banTli1);
    var li_size=$(".banT>li").size();
    
    var li_width=$(".banT>li").width();
    $(".banT").width(li_width*li_size);//缁欑埗瀹氳嚜閫傚簲瀹� li瓒冲妯帓
    var li_height=$(".banT>li").height();
    $(".ban_zj").width(li_width);
    $(".ban_zj").height(li_height);    //瀹氫富瀹瑰櫒瀹介珮  婧㈠嚭闅�
    
    
    
    //鑷姩杞挱
    var t=setInterval(moveR,5000);
    
    //鎮仠
    $(".ban_zj").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(moveR,5000);
    });
    
    //鍙虫寜閽�
    $(".btn_R").click(function(){
        moveR()
    });
    $(".btn_R").mouseover(function(){
         $(this).addClass("b");
    })
    $(".btn_R").mouseout(function(){
         $(this).removeClass("b");
    })
    //宸︽寜閽�
    $(".btn_L").click(function(){
        moveL()
    });
    $(".btn_L").mouseover(function(){
         $(this).addClass("b");
    });
    $(".btn_L").mouseout(function(){
         $(this).removeClass("b");
    });
    
    //鍏敤鍙虫寜閽� 
    function moveR(){
        i++
        if(i==li_size){
            $(".banT").css({left:0});
            i=1;
        }
        $(".banT").stop().animate({left:-i*li_width},500);
    };
    //鍏叡宸︽寜閽�
    function moveL(){
        i--
        if(i==-1){
            $(".banT").css({left:-(li_size-1)*li_width});
            i=li_size-2;
        }
        $(".banT").stop().animate({left:-i*li_width},500);
        $(".banB li").eq(i).addClass("curr").siblings().removeClass("curr");
    };

});

;$(function(){
    var i=0;
    var banTli1=$(".banT2 li").first().clone()
    $(".banT2").append(banTli1);
    var li_size=$(".banT2>li").size();
    // for(var j=0; j<li_size-1; j++){
    //     $(".banB").append("<li></li>")  //自动加li
    // };
    
    $(".banB li").first().addClass("curr");//缁楊兛绔存稉顏勵槻閸掕埖娓堕崥锟�
    var li_width=$(".banT2>li").width();
    $(".banT2").width(li_width*li_size);//缂佹瑧鍩楃€规俺鍤滈柅鍌氱安鐎癸拷 li鐡掑啿顧勫Ο顏呭笓
    var li_height=$(".banT2>li").height();
    $(".ban_dd").width(li_width);
    $(".ban_dd").height(li_height);    //鐎规矮瀵岀€圭懓娅掔€逛粙鐝�  濠с垹鍤梾锟�
    
    //缁夎鍙嗙€规矮缍呴悙锟�
    $(".banB li").hover(function(){
        var index=$(this).index();
        i=index;
        $(".banT2").stop().animate({left:-index*li_width},500);
        $(this).addClass("curr").siblings().removeClass("curr");
    });
    
    //閼奉亜濮╂潪顔芥尡
    var t=setInterval(moveR2,3000);
    
    //閹剙浠�
    $(".qh1").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(moveR2,3000);
    });
    
    //閸欒櫕瀵滈柦锟�
    $(".btn_R2").click(function(){
        moveR2()
    });
    //瀹革附瀵滈柦锟�
    $(".btn_L2").click(function(){
        moveL2()
    });
    
    //閸忣剛鏁ら崣铏瘻闁斤拷 
    function moveR2(){
        i++
        if(i==li_size){
            $(".banT2").css({left:0});
            i=1;
        }
        $(".banT2").stop().animate({left:-i*li_width},500);
        if(i==li_size-1){
            $(".banB li").eq(0).addClass("curr").siblings().removeClass("curr");
        }else{
            $(".banB li").eq(i).addClass("curr").siblings().removeClass("curr");
        }
    };
    //閸忣剙鍙″锔藉瘻闁斤拷
    function moveL2(){
        i--
        if(i==-1){
            $(".banT2").css({left:-(li_size-1)*li_width});
            i=li_size-2;
        }
        $(".banT2").stop().animate({left:-i*li_width},500);
        $(".banB li").eq(i).addClass("curr").siblings().removeClass("curr");
    };
});