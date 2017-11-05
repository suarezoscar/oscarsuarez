angular.module('inputTemplates', [])
    .directive('myInput',
        function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    model: '=',
                    idfor: '@',
                    type: '@',
                    label: '@',
                    size: '@',
                    icon: '@'
                },
                template: '<div class="input-field col {{size}}">' +
                '<i class="material-icons prefix">{{icon}}</i>' +
                '<input id="{{idfor}}" type="{{type}}" class="validate" ng-model="model">' +
                '<label for="{{idfor}}">{{label}}</label>' +
                '</div>'
            }
        })
    .directive('initComponents',
        function () {
            return {
                restrict: 'E',
                link: function () {
                    $(document).ready(function () {
                            $('select').material_select();
                            $('.parallax').parallax();
                            $('input,textarea').each(function () {
                                var forname = $(this).attr('id');
                                $("label[for=" + forname + "]").addClass('active')
                            });
                        }
                    )
                }
            }
        })
    .directive('myTextarea',
        function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    model: '=',
                    idfor: '@',
                    type: '@',
                    label: '@',
                    icon: '@',
                    size: '@',
                    icon: '@'
                },
                template: '<div class="input-field col {{size}}">' +
                '<i class="material-icons prefix">{{icon}}</i>' +
                '<textarea id="{{idfor}}" type="{{type}}" class="validate materialize-textarea" ng-model="model"></textarea>' +
                '<label for="{{idfor}}">{{label}}</label>' +
                '</div>'
            }
        }).directive('myButton',
    function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                size: '@',
                color: '@',
                icon: '@'
            },
            link: function () {
                $(document).ready(function () {
                    Materialize.updateTextFields();
                });
            },
            template: '<div class="action-btn">' +
            '<button class="btn-floating btn-{{size}} {{color}}">' +
            '<i class="large material-icons">{{icon}}</i>' +
            '</button>' +
            '</div>'
        }
    }).directive('myDatepicker',
    function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                model: '=',
                idfor: '@',
                label: '@',
                size: '@',
                icon: '@'
            },
            link: function () {
                $('.datepicker').pickadate({
                    selectMonths: true, // Creates a dropdown to control month
                    selectYears: 30, // Creates a dropdown of 15 years to control year,
                    // The title label to use for the month nav buttons
                    labelMonthNext: 'Mes siguiente',
                    labelMonthPrev: 'Mes anterior',
                    // The title label to use for the dropdown selectors
                    labelMonthSelect: 'Selecciona un mes',
                    labelYearSelect: 'Selecciona un año',
                    // Months and weekdays
                    monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                    weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
                    // Materialize modified
                    weekdaysLetter: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
                    // Today and clear
                    today: 'Hoy',
                    clear: 'Limpiar',
                    close: 'Cerrar',
                    format: 'dd-mmm-yyyy',
                    closeOnSelect: true // Close upon selecting a date,
                });
            },
            template: '<div class="input-field col {{size}}">' +
            '<i class="material-icons prefix">{{icon}}</i>' +
            '<input id="{{idfor}}" type="text" class="datepicker" ng-model="model">' +
            '<label for="{{idfor}}">{{label}}</label>' +
            '</div>'
        }
    });