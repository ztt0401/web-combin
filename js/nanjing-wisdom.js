$(function(){
		var spotName_lists={
				data:[
					{
						name:'秦淮区',
						area:[{scenicname:'秦淮河',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					},
					{
						name:'玄武区',
						area:[{scenicname:'中山陵',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'},{scenicname:'中山陵',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					},
					{
						name:'栖霞区',
						area:[{scenicname:'栖霞山',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					},
					{
						name:'浦口区',
						area:[{scenicname:'南京长江大桥',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					},
					{
						name:'建邺区',
						area:[{scenicname:'秦淮河',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					},
					{
						name:'鼓楼区',
						area:[{scenicname:'秦淮河',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					},
					{
						name:'高淳区',
						area:[{scenicname:'漆桥古村',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					},
					{
						name:'六合区',
						area:[{scenicname:'漆桥古村',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					},
					{
						name:'江宁区',
						area:[{scenicname:'漆桥古村',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					},
					{
						name:'雨花区',
						area:[{scenicname:'漆桥古村',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					},
					{
						name:'溧水区',
						area:[{scenicname:'漆桥古村',scenicID:1222,scenicImg:'img/sourceAnaly-rightImg1.png'}]
					}
				]
			}
		//景区名字列表
		  var Accordion = function(el) {
				this.el = el || {};
				var links = this.el.find('.link .fa');
				links.on('click', {el: this.el}, this.dropdown)
			}
			Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				var	$this = $(this).parent('.link');
				var	$next = $this.next();
				
				$next.slideToggle();
				$this.parent().toggleClass('open');
				if (!e.data.multiple) {
					$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
				};
				window.event? window.event.returnValue = false : e.preventDefault();
			}	
		
			var accordion = new Accordion($('.spot-right-changeName'));
			$('#sourceAnaly-rightName').spotName_list(spotName_lists);
			$('.spot-right-changeName .accordion-allName .submenu').delegate('li','click',function(){
				$(this).addClass('Clickactive').siblings().removeClass('Clickactive');
				$(this).parents('.accordion-allName').siblings().find('.submenu li').removeClass('Clickactive');
				var spotName=$(this).parent().siblings('.link').text();
				var thisName=$(this).text();
				$('.xw-listMain-sourceAnaly.f .listMain-sourceAnaly-text-name1').html(spotName);
				$('.xw-listMain-sourceAnaly.f .listMain-sourceAnaly-text-name2').html(thisName);
			});
			
			//其他 项目的切换
			$('.two-map-changeBox .map-changeBox').eq(0).show().siblings().hide();
			$('.otherList .item-lists-right .map-moon-change span').eq(0).css({'background':' #2ea6df','color':'#fff'});
			$('.otherList .item-lists-right .map-moon-change span').click(function(){
				var index=$(this).index();
				$(this).css({'background':' #2ea6df','color':'#fff'});
				$(this).siblings().css({'background':'transparent','color':'#2ea6df'});
				$('.two-map-changeBox .map-changeBox').eq(index).show().siblings().hide();
			})
});
(function($){
	$.fn.accordion=function(opt){
		var diff_class=['a','b','c','d','e','f','g'];
		for(var i=0;i<opt.data.length;i++){
			var data=opt.data[i];
			var $li=$('<li class="accordion-firstLi">');
			var $name=$('<div class="link"><i class="tree-parentIcon '+diff_class[i]+'"></i>'+data.parentName+'<i class="fa fa-chevron-down"></i></div>');
			var $submenu=$('<ul class="submenu">');
        	var $allCity_li=$('<li hidden> <input  type="text"><i class="tree-childIcon"></i><a  href="allCity.html">全市分析</a></li>');
        	var $scenicSpot_li=$('<li hidden> <input  type="text"><i class="tree-childIcon"></i><a  href="scenicSpot.html">景区</a></li>');
            if(data.parentName =='全市'){
                $submenu.append($allCity_li);
                $name.addClass('active');
            }else if(data.parentName =='景区'){
                $li=$('<li class="accordion-firstLi scenic">');
                $submenu.append($scenicSpot_li);
                $name.addClass('active');
            }else{
                $allCity_li.remove();
                $scenicSpot_li.remove();
			}
			for(var j=0;j<data.childName.length;j++){

				var $chlidLi=$('<li><i class="tree-childIcon"></i><a href="'+data.childName[j].pageURL+'.html">'+data.childName[j].name+'</a></li>');
				$submenu.append($chlidLi)
			}
			$li.append($name).append($submenu);
			$(this).append($li)
		}
		return this;
	}
	//舒适度排名
	$.fn.comfortRank=function(opt){
		var $intro=$('<ul class="introduce">');
		var $li1=$('<li class="li1"><div>景区</div><div>实时客流</div><div>当日客流</div><div>舒适度</div></li>')
		$intro.append($li1)
		for(var i=0;i<11;i++){
			var data=opt.data[i];
			var $li=$('<li>');
			var $name=$('<div>'+data.name+'</div>');
			var $num1=$('<div>'+data.num1+'</div>');
			var $num2=$('<div>'+data.num2+'</div>');
			var $shushi=$('<div>'+data.scale+'</div>');
			$li.append($name).append($num1).append($num2).append($shushi);
			$intro.append($li)
		}
		$(this).append($intro)
		return this;
	}
	//右侧景区名字
	$.fn.spotName_list=function(opt){
		var diff_class=['a','b','c','d','e','f','g'];
		for(var i=0;i<opt.data.length;i++){
			var data=opt.data[i];
			var $li=$('<li class="accordion-allName">');
			var $name=$('<div class="link">'+data.name+'</div>');
			var $submenu=$('<ul class="submenu">');
			for(var j=0;j<data.area.length;j++){
				var $chlidLi=$('<li>'+data.area[j].scenicname+'</li>');
				$submenu.append($chlidLi);
			}
			$li.append($name).append($submenu);
			$(this).append($li);
		}
		return this;
	}
}(jQuery))