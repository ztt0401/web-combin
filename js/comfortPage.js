$(function(){
	var comfortRank={
				data:[
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					{
						name:'夫子庙中山',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
					
					{
						name:'夫子庙',
						num1:222,
						num2:334,
						scale:'舒适'
					},
				]
			}
			$('#comfortRank').comfortRank(comfortRank);
			
			$('.comfortTitle').click(function(){
				$(this).find('.comfortList-down').toggleClass('arrowUp');
				$('#comfortRank').slideToggle()
			})
})
