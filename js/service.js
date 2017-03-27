app.service("NewsListService", function($http, $q) {
	var deferred = $q.defer();
	$http.get('data/news.json').then(function (data) {
		deferred.resolve(data);
	});

	this.getNews = function() {
		return deferred.promise;
	};
});
