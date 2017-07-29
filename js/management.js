(function($){
	$.fn.management_menu=function(opt){
		var nameIndex=['首页','区域属性配置','游客判定规则','法定节假日配置','区域系数配置','数据优化','用户管理','基站信息管理','异常日志','旅游资源管理','报告统计'];
		var iconIndex=['1','2','3','4','5','6','7','8','9','10','11'];
		for(var i=0;i<opt.data.length;i++){
			var data=opt.data[i];
			var $li=$('<li class="accordion-firstLi">');
			var $name=$('<div class="link"><i class="tree-parentIcon" style="background-image:url(img/management-menu'+iconIndex[nameIndex.indexOf(data.parentName.name)]+'.png);"></i><a href="'+data.parentName.parentURL+'.html">'+data.parentName.name+'</a></div>');
			var $submenu=$('<ul class="submenu">');
			if(data.parentName=='用户管理'||data.parentName=='旅游资源管理'){
				 $name=$('<div class="link"><i class="tree-parentIcon" style="background-image:url(img/management-menu'+iconIndex[nameIndex.indexOf(data.parentName)]+'.png)"></i>'+data.parentName+'<i class="fa fa-chevron-down"></i></div>');
			}
			for(var j in data.childName){
				var $chlidLi=$('<li><i class="tree-childIcon"></i><a href="'+data.childName[j].pageURL+'.html">'+data.childName[j].name+'</a></li>');
				$submenu.append($chlidLi)
			}
			$li.append($name).append($submenu);
			$(this).append($li)
		}
		return this;
	}
}(jQuery))