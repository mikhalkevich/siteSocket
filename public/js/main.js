$(function (){
  $('.menu').on ('click',	function (){
    var title = $(this).attr('data-title');         
    var url = $(this).attr('data-url');
    var picture = $(this).attr('data-picture');
    $('#title').text (title);
    $('#picture').attr('src',picture);
    $('#text').load('temp/'+url+'.html');
    });
});