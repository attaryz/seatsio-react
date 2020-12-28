# seatsio-react, the official Seats.io React wrapper

React wrapper for rendering [Seats.io](https://www.seats.io) seating charts. Brought to you by the Seats.io team.

# Installation

```
npm install --save @seatsio/seatsio-react
```

# Usage

## Regular charts

### Minimal

```jsx
import { SeatsioSeatingChart } from '@seatsio/seatsio-react'

<SeatsioSeatingChart
    publicKey="<yourPublicWorkspaceKey>"
    event="<yourEventKey>"
/>
```

### Custom chart div ID

```jsx
<SeatsioSeatingChart
    publicKey="<yourPublicWorkspaceKey>"
    event="<yourEventKey>"
    id="<theChartDivID>"
/>
```

### Custom chart div class

```jsx
<SeatsioSeatingChart
    publicKey="<yourPublicWorkspaceKey>"
    event="<yourEventKey>"
    className="<theChartDivClassName>"
/>
```

### onRenderStarted()

`onRenderStarted` is fired when the chart has started loading, but hasn't rendered yet:

```jsx
<SeatsioSeatingChart
    publicKey="<yourPublicWorkspaceKey>"
    event="<yourEventKey>"
    onRenderStarted={chart => { ... }}
/>
```

If you store the chart object that's passed to `onRenderStarted`, you can access the properties defined on the  wrapped `seatsio.SeatingChart`:

```jsx
let chart = null;

<SeatsioSeatingChart
    publicKey="<yourPublicWorkspaceKey>"
    event="<yourEventKey>"
    onRenderStarted={createdChart => { chart = createdChart }}
/>

...

console.log(chart.selectedObjects);
```

### onChartRendered()

`onChartRendered` is fired when the chart is rendered successfully:

```jsx
<SeatsioSeatingChart
    publicKey="<yourPublicWorkspaceKey>"
    event="<yourEventKey>"
    onChartRendered={chart => { ... }}
/>
```

### Supported properties

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/renderer-configure-your-floor-plan

```jsx
<SeatsioSeatingChart
    publicKey="<yourPublicWorkspaceKey>"
    event="<yourEventKey>"
    pricing={[
        {'category': 1, 'price': 30},
        {'category': 2, 'price': 40},
        {'category': 3, 'price': 50}
    ]}
    priceFormatter={price => '$' + price}
/>
```

Whenever one of the properties passed on to `<SeatsioSeatingChart />` changes, the chart destroys itself and rerenders. To avoid such a 'full refresh', you can use `chart.changeConfig()` instead of updating the properties directly. Please check https://docs.seats.io/docs/renderer-chart-properties-chartchangeconfig. Note that `changeConfig()` only supports a subset of all available chart parameters.

## Event manager

```jsx
import { SeatsioEventManager } from '@seatsio/seatsio-react'

<SeatsioEventManager
    secretKey="<yourSecretWorkspaceKey>"
    event="<yourEventKey>"
    mode="<manageObjectStatuses or another mode>"
/>
```

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/configuring-event-manager

## Chart manager

```jsx
import { SeatsioChartManager } from '@seatsio/seatsio-react'

<SeatsioChartManager
    secretKey="<yourSecretWorkspaceKey>"
    workspaceKey="<yourWorkspaceKey>"
    chart="<yourChartKey>"
    mode="<manageRulesets or another mode>"
/>
```



## Seating Chart Designer

To embed the seating chart designer for the purpose of creating a new chart, do this:

```jsx
import { SeatsioDesigner } from '@seatsio/seatsio-react'

<SeatsioDesigner
    designerKey="<yourDesignerKey>"    
/>
```

To be able to edit a chart from an embedded designer, you need to specify the chart to load:
 
```jsx
<SeatsioDesigner
    designerKey="<yourDesignerKey>"
    chartKey="<yourChartKey>"    
/>
```
    

Other parameters are supported as well. For a full list, check https://docs.seats.io/docs/embedded-designer-configuration
