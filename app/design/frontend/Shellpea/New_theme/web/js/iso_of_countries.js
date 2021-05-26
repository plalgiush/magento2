define([
    'jquery'
], function ($) {
  'use strict';

        fetch('https://magento.test/rest/all/V1/directory/countries')
          .then(function (response) {
            return response.json()
                }).then(function (data) {
                    for (let i = 0; i < data.length; i++) {
                        // console.log(data[i]);  // вывести каждый элемент
                    }
                    for (let {id: id, full_name_english: f } of data) {
                        // console.log("- " + n + " : " + f); // вывод информации через деструктурированный метод
                        $('.column').append("- " + id + " : " + f + '<br />');
                    }
                })

});
