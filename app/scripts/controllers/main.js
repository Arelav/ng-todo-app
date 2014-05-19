'use strict';

angular.module('yeomanCodelabApp').controller('MainCtrl', function ($scope, localStorageService) {

  var todosInStore = localStorageService.get('todos');
  $scope.todos = todosInStore || [];

  $scope.$watch('todos', function () {
    localStorageService.add('todos', $scope.todos);
  }, true);

  $scope.addTodo = function () {
    $scope.todos.push({label: $scope.todo, completed: false});
    $scope.todo = '';
  };

  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };
});
