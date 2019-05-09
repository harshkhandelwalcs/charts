import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'chartjs';
	public dataFromAPI = [];
	public lineChartData: ChartDataSets[] = [];
	public lineChartLabels: Label[] = [];
	public lineChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		tooltips: {
			mode: 'index',
			intersect: false
		},
		hover: {
			mode: 'index',
			intersect: false
		},
		scales: {
			xAxes: [{
				display: true,
				ticks: {
					display: false
				}
			}]
		},
		pointRadius: 2,
		pointHoverRadius: 4
	};
	public lineChartColors: Color[] = [
		{
			borderColor: 'grey',
			backgroundColor: 'grey',
		},
		{
			borderColor: 'blue',
			backgroundColor: 'blue',
		},
		{
			borderColor: 'red',
			backgroundColor: 'red',
		},
		{
			borderColor: 'green',
			backgroundColor: 'green',
		},
		{
			borderColor: 'pink',
			backgroundColor: 'pink',
		},
		{
			borderColor: 'violet',
			backgroundColor: 'violet',
		},
		{
			borderColor: 'orange',
			backgroundColor: 'orange',
		}
	];
	public lineChartLegend = false;
	public lineChartType = 'line';
	public lineChartPlugins = [];

	constructor() {
		this.dataFromAPI = [
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-27T09:28:04.495Z",
				"status": true,
				"recipients": 44,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc420a429e087734ce41ce6",
					"title": "saturday ",
					"createdAt": "2019-04-27T09:28:04.491Z"
				},
				"sequenceType": "csv",
				"sequence": "5c9f830967bde417112ce7d9",
				"datetime": "2019-04-27T09:23:25.572Z",
				"time": "",
				"date": "",
				"title": "Email campaign test : stage 1",
				"_id": "5cc420a429e087734ce41ce7",
				"report": {
					"Sent": 43,
					"Complaint": 0,
					"Opened": 11,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 44
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-27T09:28:04.502Z",
				"status": true,
				"recipients": 43,
				"sequenceType": "csv",
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc420a429e087734ce41ce6",
					"title": "saturday ",
					"createdAt": "2019-04-27T09:28:04.491Z"
				},
				"datetime": "2019-04-27T09:50:36.111Z",
				"time": "03:20PM",
				"date": "2019-04-27",
				"title": "Email campaign test : stage 2",
				"_id": "5cc420a429e087734ce41ce8",
				"report": {
					"Sent": 0,
					"Complaint": 0,
					"Opened": 0,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 43
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-27T09:28:04.506Z",
				"status": true,
				"recipients": 0,
				"sequenceType": "csv",
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc420a429e087734ce41ce6",
					"title": "saturday ",
					"createdAt": "2019-04-27T09:28:04.491Z"
				},
				"datetime": "2019-04-27T10:30:00.000Z",
				"time": "04:00PM",
				"date": "2019-04-27",
				"title": "Email campaign test : stage 3",
				"_id": "5cc420a429e087734ce41ce9",
				"report": {
					"Sent": 0,
					"Complaint": 0,
					"Opened": 0,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 0
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-27T13:07:18.804Z",
				"status": true,
				"recipients": 4,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc454066f850156f14a7f87",
					"title": "Testing tracking count",
					"createdAt": "2019-04-27T13:07:18.798Z"
				},
				"sequenceType": "dealboard",
				"sequence": "5cb630387a44e7619f043650",
				"datetime": "2019-04-27T13:09:00.000Z",
				"time": "06:39PM",
				"date": "2019-04-27",
				"title": "Download our App and streamline your life!",
				"_id": "5cc454066f850156f14a7f88",
				"report": {
					"Sent": 4,
					"Complaint": 0,
					"Opened": 1,
					"Clicked": 1,
					"Bounced": 0,
					"reject": 0,
					"All": 4
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-29T07:14:09.302Z",
				"status": true,
				"recipients": 44,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc6a4419b363d2b48fbbcde",
					"title": "monday",
					"createdAt": "2019-04-29T07:14:09.283Z"
				},
				"sequenceType": "csv",
				"sequence": "5ca4b2a8da01334ffc750fbe",
				"datetime": "2019-04-29T07:11:53.548Z",
				"time": "",
				"date": "",
				"title": "Stage 1",
				"_id": "5cc6a4419b363d2b48fbbcdf",
				"report": {
					"Sent": 43,
					"Complaint": 0,
					"Opened": 8,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 44
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-29T07:14:09.306Z",
				"status": true,
				"recipients": 43,
				"sequenceType": "csv",
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc6a4419b363d2b48fbbcde",
					"title": "monday",
					"createdAt": "2019-04-29T07:14:09.283Z"
				},
				"datetime": "2019-04-29T07:22:04.329Z",
				"time": "12:52PM",
				"date": "2019-04-29",
				"title": "Stage 2",
				"_id": "5cc6a4419b363d2b48fbbce0",
				"report": {
					"Sent": 0,
					"Complaint": 0,
					"Opened": 0,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 43
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-29T07:14:09.310Z",
				"status": true,
				"recipients": 0,
				"sequenceType": "csv",
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc6a4419b363d2b48fbbcde",
					"title": "monday",
					"createdAt": "2019-04-29T07:14:09.283Z"
				},
				"datetime": "2019-04-29T07:30:05.143Z",
				"time": "01:00PM",
				"date": "2019-04-29",
				"title": "Stage 3",
				"_id": "5cc6a4419b363d2b48fbbce1",
				"report": {
					"Sent": 0,
					"Complaint": 0,
					"Opened": 0,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 0
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-29T12:49:49.567Z",
				"status": true,
				"recipients": 4,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc6f2ed9b363d2b48fbbd17",
					"title": "Testing Drip Tracking",
					"createdAt": "2019-04-29T12:49:49.562Z"
				},
				"sequenceType": "dealboard",
				"sequence": "5cb630387a44e7619f043650",
				"datetime": "2019-04-29T12:52:11.182Z",
				"time": "06:22PM",
				"date": "2019-04-29",
				"title": "Download our App and streamline your life!",
				"_id": "5cc6f2ed9b363d2b48fbbd18",
				"report": {
					"Sent": 4,
					"Complaint": 0,
					"Opened": 0,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 4
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-29T18:52:38.471Z",
				"status": true,
				"recipients": 4,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc747f6ddc31d6b4e996d6d",
					"title": "EMAIL CAMPAIGN - SANTOSH TEST 1",
					"createdAt": "2019-04-29T18:52:38.465Z"
				},
				"sequenceType": "csv",
				"sequence": "5cc7450191a39a179b0c44df",
				"datetime": "2019-04-29T18:48:39.227Z",
				"time": "",
				"date": "",
				"title": "GENTLE REMINDER - POLICY RENEWAL",
				"_id": "5cc747f6ddc31d6b4e996d6e",
				"report": {
					"Sent": 4,
					"Complaint": 0,
					"Opened": 1,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 4
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-30T05:23:29.790Z",
				"status": true,
				"recipients": 4,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc7dbd1ddc31d6b4e996db2",
					"title": "Testing Tuesday",
					"createdAt": "2019-04-30T05:23:29.784Z"
				},
				"sequenceType": "dealboard",
				"sequence": "5cb630387a44e7619f043650",
				"datetime": "2019-04-30T05:23:02.120Z",
				"time": "",
				"date": "",
				"title": "Meet Via! You're gonna love her!",
				"_id": "5cc7dbd1ddc31d6b4e996db3",
				"report": {
					"Sent": 4,
					"Complaint": 0,
					"Opened": 1,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 4
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-30T06:57:18.320Z",
				"status": true,
				"recipients": 44,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc7f1ce88d606716ea8e58b",
					"title": "Tuesday",
					"createdAt": "2019-04-30T06:57:18.297Z"
				},
				"sequenceType": "csv",
				"sequence": "5ca4b2a8da01334ffc750fbe",
				"datetime": "2019-04-30T06:54:52.225Z",
				"time": "",
				"date": "",
				"title": "stage 1",
				"_id": "5cc7f1ce88d606716ea8e58c",
				"report": {
					"Sent": 43,
					"Complaint": 0,
					"Opened": 18,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 44
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-30T06:57:18.324Z",
				"status": true,
				"recipients": 43,
				"sequenceType": "csv",
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc7f1ce88d606716ea8e58b",
					"title": "Tuesday",
					"createdAt": "2019-04-30T06:57:18.297Z"
				},
				"datetime": "2019-04-30T07:05:20.251Z",
				"time": "12:35PM",
				"date": "2019-04-30",
				"title": "Stage 2 (Received)",
				"_id": "5cc7f1ce88d606716ea8e58d",
				"report": {
					"Sent": 43,
					"Complaint": 0,
					"Opened": 18,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 43
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-30T06:57:18.327Z",
				"status": true,
				"recipients": 2,
				"sequenceType": "csv",
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc7f1ce88d606716ea8e58b",
					"title": "Tuesday",
					"createdAt": "2019-04-30T06:57:18.297Z"
				},
				"datetime": "2019-04-30T07:20:28.368Z",
				"time": "12:50PM",
				"date": "2019-04-30",
				"title": "stage 3 (opened)",
				"_id": "5cc7f1ce88d606716ea8e58e",
				"report": {
					"Sent": 2,
					"Complaint": 0,
					"Opened": 2,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 2
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-04-30T09:08:36.364Z",
				"status": true,
				"recipients": 4,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc8109488d606716ea8e5f2",
					"title": "testing",
					"createdAt": "2019-04-30T09:08:36.359Z"
				},
				"sequenceType": "dealboard",
				"sequence": "5cb630387a44e7619f043650",
				"datetime": "2019-04-30T09:08:06.577Z",
				"time": "",
				"date": "",
				"title": "Meet Via! You're gonna love her!",
				"_id": "5cc8109488d606716ea8e5f3",
				"report": {
					"Sent": 0,
					"Complaint": 0,
					"Opened": 0,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 4
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-05-01T09:20:34.528Z",
				"status": true,
				"recipients": 44,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc964e2eb983c0b63cca007",
					"title": "Wednesday",
					"createdAt": "2019-05-01T09:20:34.523Z"
				},
				"sequenceType": "csv",
				"sequence": "5c9f830967bde417112ce7d9",
				"datetime": "2019-05-01T09:17:42.168Z",
				"time": "",
				"date": "",
				"title": "Stage 1",
				"_id": "5cc964e2eb983c0b63cca008",
				"report": {
					"Sent": 43,
					"Complaint": 0,
					"Opened": 12,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 44
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-05-01T09:20:34.532Z",
				"status": true,
				"recipients": 43,
				"sequenceType": "csv",
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc964e2eb983c0b63cca007",
					"title": "Wednesday",
					"createdAt": "2019-05-01T09:20:34.523Z"
				},
				"datetime": "2019-05-01T09:25:44.807Z",
				"time": "02:55PM",
				"date": "2019-05-01",
				"title": "Birthday Test ",
				"_id": "5cc964e2eb983c0b63cca009",
				"report": {
					"Sent": 43,
					"Complaint": 0,
					"Opened": 18,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 43
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-05-01T09:20:34.537Z",
				"status": true,
				"recipients": 2,
				"sequenceType": "csv",
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cc964e2eb983c0b63cca007",
					"title": "Wednesday",
					"createdAt": "2019-05-01T09:20:34.523Z"
				},
				"datetime": "2019-05-01T09:40:45.951Z",
				"time": "03:10PM",
				"date": "2019-05-01",
				"title": "Stage 3",
				"_id": "5cc964e2eb983c0b63cca00a",
				"report": {
					"Sent": 2,
					"Complaint": 0,
					"Opened": 2,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 2
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-05-03T19:45:58.075Z",
				"status": true,
				"recipients": 45,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5ccc9a76c90c4c1190a3243c",
					"title": "testcampaign",
					"createdAt": "2019-05-03T19:45:58.059Z"
				},
				"sequenceType": "csv",
				"sequence": "5c9f827967bde417112ce7a7",
				"datetime": "2019-05-03T19:45:02.555Z",
				"time": "",
				"date": "",
				"title": "Renew Test",
				"_id": "5ccc9a76c90c4c1190a3243d",
				"report": {
					"Sent": 43,
					"Complaint": 0,
					"Opened": 22,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 45
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-05-07T11:17:35.459Z",
				"status": true,
				"recipients": 44,
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cd1694ff6bc081d8dff7ed1",
					"title": "Tuesday",
					"createdAt": "2019-05-07T11:17:35.444Z"
				},
				"sequenceType": "csv",
				"sequence": "5ca4b2a8da01334ffc750fbe",
				"datetime": "2019-05-07T11:15:41.295Z",
				"time": "",
				"date": "",
				"title": "Stage 1",
				"_id": "5cd1694ff6bc081d8dff7ed2",
				"report": {
					"Sent": 43,
					"Complaint": 0,
					"Opened": 11,
					"Clicked": 0,
					"Bounced": 6,
					"reject": 0,
					"All": 44
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-05-07T11:17:35.461Z",
				"status": true,
				"recipients": 43,
				"sequenceType": "csv",
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cd1694ff6bc081d8dff7ed1",
					"title": "Tuesday",
					"createdAt": "2019-05-07T11:17:35.444Z"
				},
				"datetime": "2019-05-07T11:30:28.066Z",
				"time": "05:00PM",
				"date": "2019-05-07",
				"title": "stage 2",
				"_id": "5cd1694ff6bc081d8dff7ed3",
				"report": {
					"Sent": 37,
					"Complaint": 0,
					"Opened": 12,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 43
				}
			},
			{
				"successStatus": "Sent",
				"createdAt": "2019-05-07T11:17:35.464Z",
				"status": true,
				"recipients": 4,
				"sequenceType": "csv",
				"agent": "5af032e6e1bf0c82bfba089b",
				"dripId": {
					"_id": "5cd1694ff6bc081d8dff7ed1",
					"title": "Tuesday",
					"createdAt": "2019-05-07T11:17:35.444Z"
				},
				"datetime": "2019-05-07T11:45:01.659Z",
				"time": "05:15PM",
				"date": "2019-05-07",
				"title": "stage 3",
				"_id": "5cd1694ff6bc081d8dff7ed4",
				"report": {
					"Sent": 4,
					"Complaint": 0,
					"Opened": 0,
					"Clicked": 0,
					"Bounced": 0,
					"reject": 0,
					"All": 4
				}
			}
		]

		console.log(this.dataFromAPI)
		this.lineChartData = this.getLineChartData();
	}
	getLineChartData() {
		const labels = [];
		const report = [];
		this.dataFromAPI.forEach(element => {
			if (element) {
				report.push(element.report);
				labels.push(element.title);
			}
		});
		console.log(report);
		console.log(labels);
		this.lineChartLabels = labels;
		const mergedObjects = this.mergeData(report);
		const dataSets = this.createDataAccordingToGraph(mergedObjects);
		return dataSets;
	}
	
	mergeData(report) {
		const mergeData = report.reduce((r, e) => {
			return Object.keys(e).forEach((k) => {
				if (!r[k]) {
					r[k] = [].concat(e[k])
				}
				else {
					r[k] = r[k].concat(e[k])
				}
			}), r
		}, {})
		console.log(mergeData)
		return mergeData;
	}
	createDataAccordingToGraph(mergedObject) {
		const dataSets = [];
		for (let key in mergedObject) {
			if (mergedObject.hasOwnProperty(key)) {
				dataSets.push({
					data: mergedObject[key],
					label: key,
					fill: false
				})
			}
		}
		console.log(dataSets)
		this.sortData(dataSets);
		console.log(dataSets)
		return dataSets;
	}
	sortData(dataSets) {
		dataSets.sort((a, b) => {
			let labelA = a.label.toUpperCase();
			let labelB = b.label.toUpperCase();
			return (labelA < labelB) ? -1 : (labelA > labelB) ? 1 : 0;
		});
	}
	getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
}
