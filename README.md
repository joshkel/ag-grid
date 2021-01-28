![alt text](./github-banner.png "ag-Grid")

[![CDNJS](https://img.shields.io/cdnjs/v/ag-grid.svg)](https://cdnjs.com/libraries/ag-grid)
[![npm](https://img.shields.io/npm/dm/ag-grid-community.svg)](https://www.npmjs.com/package/ag-grid-community)
[![npm](https://img.shields.io/npm/dt/ag-grid-community.svg)](https://www.npmjs.com/package/ag-grid-community)

| Module              | SonarCloud Status |
| --------------------|------------------:|
| ag-grid-community   | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ag-grid-community&metric=alert_status)](https://sonarcloud.io/dashboard?id=ag-grid-community) <br> |
| ag-grid-enterprise  | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ag-grid-enterprise&metric=alert_status)](https://sonarcloud.io/dashboard?id=ag-grid-enterprise) |

# ag-Grid

ag-Grid is a fully-featured and highly customizable JavaScript data grid.
It delivers [outstanding performance](https://www.ag-grid.com/example.php?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github), has no third-party dependencies and [integrates smoothly with all major JavaScript frameworks](https://www.ag-grid.com/documentation/javascript/getting-started/?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github).

Here's how our grid looks with multiple filters and grouping enabled:

![alt text](./github-grid-demo.jpg "ag-Grid demo")

## Features

In addition to the standard set of features you'd expect from any grid:

* Column Interactions (resize, reorder, and pin columns)
* Pagination
* Sorting
* Row Selection

Here are some of the features that make ag-Grid stand out:

* Grouping / Aggregation *
* Custom Filtering
* In-place Cell Editing
* Records Lazy Loading *
* Server-Side Records Operations *
* Live Stream Updates
* Hierarchical Data Support & Tree View *
* Customizable Appearance
* Customizable Cell Contents
* Excel-like Pivoting *
* State Persistence
* Keyboard Navigation
* Data Export to CSV
* Data Export to Excel *
* Row Reordering
* Copy / Paste
* Column Spanning
* Pinned Rows
* Full Width Rows

\* The features marked with an asterisk are available in the [Enterprise version](https://www.ag-grid.com/license-pricing.php?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github) only.

Check out the [developer documentation](https://www.ag-grid.com/documentation/?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github) for a complete list of features or visit [our official docs](https://www.ag-grid.com/features-overview/?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github) for tutorials and feature demos.

## Looking for a framework specific solution?

* [Get Started with Angular](https://www.ag-grid.com/documentation/angular/getting-started/?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github)
* [Get Started with React](https://www.ag-grid.com/documentation/react/getting-started/?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github)
* [Get Started with Vue](https://www.ag-grid.com/documentation/vue/getting-started/?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github)
* [Get Started with AngularJS](https://www.ag-grid.com/documentation/angular/angularjs/?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github)

## Getting started

### Install dependencies

```sh
$ npm install --save ag-grid-community
```

### Add a placeholder to HTML

```html
<div id="myGrid" style="height: 150px; width: 600px" class="ag-theme-alpine"></div>
```

### Import the grid and styles

```js
import { Grid } from 'ag-grid-community';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
```

### Set configuration

```js
var gridOptions = {
	columnDefs: [
		{ headerName: 'Make', field: 'make' },
		{ headerName: 'Model', field: 'model' },
		{ headerName: 'Price', field: 'price' }
	],
	rowData: [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
	]
};
```

### Initialise the grid

```js
var eGridDiv = document.querySelector('#myGrid');
new Grid(eGridDiv, this.gridOptions);
```

For more information on how to integrate the grid into your project see [TypeScript - Building with Webpack 2](https://www.ag-grid.com/documentation/javascript/building-typescript/?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github).

## Issue Reporting

If you have found a bug, please report it in this repository's [issues](https://github.com/ag-grid/ag-grid/issues) section. If you're using the Enterprise version, please use the private ticketing system to do that. For more information on support please see our [dedicated support page](https://www.ag-grid.com/support.php?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github).

## Asking Questions

Look for similar problems on [StackOverflow](https://stackoverflow.com/questions/tagged/ag-grid) using the `ag-grid` tag. If nothing seems related, post a new message there. Please do not use GitHub issues to ask questions.

## Contributing

ag-Grid is developed by a team of co-located developers in London. If you want to join the team check out our [jobs board](https://www.ag-grid.com/ag-grid-jobs-board/?utm_source=ag-grid-readme&utm_medium=repository&utm_campaign=github) or send your application to info@ag-grid.com.

## License

This project is licensed under the MIT license. See the [LICENSE file](./LICENSE.txt) for more info.
