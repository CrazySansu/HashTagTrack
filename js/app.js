(function () {
	'use strict';
	angular.module("FYProject", []);

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
  		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    		document.getElementById("headingTag").style.top = "0";
  		} else {
    		document.getElementById("headingTag").style.top = "-50px";
  		}
	}

	// Javascript for creating Charts
    //<script src="jquery.csv-0.71.js"> 
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(initializeDonut);
    google.charts.setOnLoadCallback(initializeLine);
    google.charts.setOnLoadCallback(initializePie);
    google.charts.setOnLoadCallback(initializeScatter);
    google.charts.setOnLoadCallback(initializeHistogram);   

    function handleQueryResponseDonut(response) {
    	if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
   		}
    	var data = response.getDataTable();
    	function drawChart() {
      		//var data = response.getDataTable();
	    	// set chart options
     		var options = {
        		title: "Sentiment Analysis of Tweets",
        		pieHole: 0.4,
        		backgroundColor: {
        			fill: '#ddd'
        		}
     		};
     		// create the chart object and draw it
      		var chart = new google.visualization.PieChart(document.getElementById('donut_chart_div'));
        	chart.draw(data, options);
    	} 
    	drawChart()
  	}

   	function handleQueryResponseLine(response) {
   		if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
   		}
    	var data = response.getDataTable();
	    function drawChart() {
		    //var data = response.getDataTable();
     		// set chart options
      		var options = {
        		hAxis: {
          			title: 'Date'
        		},
        		vAxis: {
          			title: 'NumberOfTweets'
        		},
        		chartArea:{width:'100%'},
        		axisTitlesPosition: 'in',
        		animation: {
        			startup: true,
        			duration: 1000,
        			easing: 'out',
        		},
        		backgroundColor: {
        			fill: '#ddd'
        		}
      		};
     		// create the chart object and draw it
      		var chart = new google.visualization.LineChart(document.getElementById('line_chart_div'));
        	chart.draw(data, options);
    	} 
    	drawChart()
  	}

   	function handleQueryResponsePie(response) {
   		if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
   		}
    	var data = response.getDataTable();
    	function drawChart() {
		    //var data = response.getDataTable();
	 	    // set chart options
     		var options = {
        		title: "Sources of Tweets collected",
        		backgroundColor: {
        			fill: '#ddd'
        		}
     		};
     		// create the chart object and draw it
      		var chart = new google.visualization.PieChart(document.getElementById('pie_chart_div'));
        	chart.draw(data, options);
    	} 
    	drawChart()
  	}

   	function handleQueryResponseScatter(response) {
   		if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
   		}
    	var data = response.getDataTable();
    	function drawChart() {
      		//var data = response.getDataTable();
     		// set chart options
     		var options = {
        		title: "Type vs NumberOfTweets",
        		legend: 'none',
        		animation: {
        			startup: true,
        			duration: 5000,
        			easing: 'out',
        		},
        		backgroundColor: {
        			fill: '#ddd'
        		}
     		};
     		// create the chart object and draw it
      		var chart = new google.visualization.ScatterChart(document.getElementById('scatter_chart_div'));
        	chart.draw(data, options);
    	} 
    	drawChart()
  	}

   	function handleQueryResponseHistogram(response) {
   		if (response.isError()) {
      		alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      		return;
   		}
    	var data = response.getDataTable();
	    function drawChart() {
  	        //var data = response.getDataTable();
   	        // set chart options
     		var options = {
        		title: "Top Tweeters",
        		legend: 'none',
        		animation: {
        			startup: true,
        			duration: 5000,
        			easing: 'out',
        		},
        		backgroundColor: {
        			fill: '#ddd'
        		}
     		};
        	// create the chart object and draw it
      		var chart = new google.visualization.Histogram(document.getElementById('histogram_chart_div'));
        	chart.draw(data, options);
    	} 
    	drawChart()
  	}

  	function initializeDonut() { 
  		var csvURL = "data/Sentiment.csv"
   		var queryOptions = {
      		csvColumns: ['string', 'number' /* Or whatever the columns in the CSV file are */],
      		csvHasHeader: true /* This should be false if your CSV file doesn't have a header */
   		}
   		var query = new google.visualization.Query(csvURL, queryOptions);
   		query.send(handleQueryResponseDonut);
  	} 

  	function initializeLine() {
  		var csvURL = "data/dateTweets.csv"
   		var queryOptions = {
      		csvColumns: ['string', 'number' /* Or whatever the columns in the CSV file are */],
      		csvHasHeader: true /* This should be false if your CSV file doesn't have a header */
   		}
   		var query = new google.visualization.Query(csvURL, queryOptions)
   		query.send(handleQueryResponseLine);
	}

  	function initializePie() {
  		var csvURL = "data/TweetSource.csv"
   		var queryOptions = {
      		csvColumns: ['string', 'number' /* Or whatever the columns in the CSV file are */],
      		csvHasHeader: true /* This should be false if your CSV file doesn't have a header */
    	}
   		var query = new google.visualization.Query(csvURL, queryOptions);
   		query.send(handleQueryResponsePie);
	} 

	function initializeScatter() {
  		var csvURL = "data/TweetType.csv"
   		var queryOptions = {
      		csvColumns: ['string', 'number' /* Or whatever the columns in the CSV file are */],
      		csvHasHeader: true /* This should be false if your CSV file doesn't have a header */
   		}
   		var query = new google.visualization.Query(csvURL, queryOptions);
   		query.send(handleQueryResponseScatter);
  	}

  	function initializeHistogram() {
  		var csvURL = "data/topTweeters.csv"
   		var queryOptions = {
      		csvColumns: ['string', 'number' /* Or whatever the columns in the CSV file are */],
      		csvHasHeader: true /* This should be false if your CSV file doesn't have a header */
   		}
   		var query = new google.visualization.Query(csvURL, queryOptions);
   		query.send(handleQueryResponseHistogram);
	}
	

	// WORD_CLOUD JS CODE
	

})();