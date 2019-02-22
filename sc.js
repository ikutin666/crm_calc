$(document).ready( function () {
var mas_value={'ab':2,'as':4};

         //назначем кнопку в цикле ибо, элементы меню постоянно подгружаются
    var time = setInterval(
        function () {
                    //если нет кнопки нстройки виджета, то добавляем ее
            if ($('.filter__list').children('#pl').length == 0) {
               $('.filter__list').append('<li id="pl" class="aside__list-item  js-filter-preset-link" title="Коммуникации" id="communications"><a href="/settings/calc" class="aside__list-item-link navigate-link-nodecor h-text-overflow js-navigate-link">настройкка виджета калькулятор</a></li>');
              //console.dir($('#pl'));

              //открываем окно нстройки
              $('#pl').click(function () {

                  //проверяем на блок отображения форм
                  if($("div").is('#work_area'))
                    {
                      $('#work_area').load('https://test/', 'template=settings');

                    }
                    else
                    {
                        $('.list__body.clearfix').load('https://test/', 'template=settings');
                    }
                    //если был сделан ajax-запрос
                    $(document).ajaxSuccess(function (event, xhr, settings) {

                                    //если загрузилась окно настроек
                        if (settings.url.indexOf('settings') != 1) {
                            //открываем окно формы ввода формулы
                            $('#list_item_0').click(function () {
                                        $('body').append('<div class="modal modal-wp-amoforms modal-communications-template"></div>>');
                                        $('.modal.modal-wp-amoforms.modal-communications-template').load('https://test/', 'template=modal');

                                    }
                                );
                            }
                            //если загрузилось окно формы ввода формул
                            if (settings.url.indexOf('modal') != 1) {
                                var current_element;
                                console.log(current_element);
                                        //определяем выбранное поле для ввода
                                $('.amoforms__tab-editor-left').click(function (event) {
                                    current_element = event.target;
                                });
                                    //при нажатии сохранить
                                ///.
                                $('button-input.button-input-disabled.js-communications-template-save').click(
                                    function() {
                                        var str="";
                                        try
                                        {

                                       str = $(current_element).val();
                                    }
                                    catch(e)
                                    {
                                        str="";
                                    }
                                            //находим константы в техстовом  поле


                                            var mas = str.match(/\'[а-яa-w]{1,}\s{0,}[а-яa-w]{0,}\'/ig)


                                            console.log(mas);
                                        //подготавливаем строку для вычисления
                                        $(mas).each(function(key,value)
                                        {
                                            console.log('kjk',value);
                                            if(value!="")
                                            {
                                                console.log(value);
                                                str=str.replace(value,"mas_value["+value+"]");
                                                console.log(str);
                                                console.log(eval(str));
                                            }
                                        })

                                    }

                                );
                                        //если выбираем поле то вводим его
                                $('.amoforms__sidebar__item.js-communications-template-marker').click(function (event) {
                                    console.log($(event.currentTarget).attr('data-marker'));
                                    console.log("123",$(current_element).val());

                                        $(current_element).val($(current_element).val() + $(event.currentTarget).attr('data-marker'));
                                        console.log( $(current_element).val())
                                        $(current_element).val();


                                });


                            };
                        });
                    }
                )

            }
        }, 500);

});
	

