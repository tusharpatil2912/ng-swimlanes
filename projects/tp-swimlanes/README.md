
# @tusharp/ng-swimlanes

A customizable Angular library that displays items in a swimlanes format using cards. The library provides options to define the swimlanes layout and supports click and drag-and-drop events on the cards.

## Installation

To install the library, use the following command:

`npm install @tusharp/ng-swimlanes`

## Usage

Import the `TpSwimlanesModule` in your Angular module:

```typescript
import { TpSwimlanesModule } from '@tusharp/ng-swimlanes';

@NgModule({
  imports: [
    // ...
    TpSwimlanesModule
  ]
})
export class AppModule { }
```

In your component's template, use the `tp-swimlanes` directive to display the swimlanes:

```html
<tp-swimlanes [swimlanesOptions]="options" [data]="items"
              (onCardClickEvent)="handleCardClick($event)"
              (onCardDropEvent)="handleCardDrop($event)">
</tp-swimlanes>
```

Make sure to define the `options` and `items` variables in your component's class:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <ng-swimlanes [swimlanesOptions]="options" [data]="items"
                  (onCardClickEvent)="handleCardClick($event)"
                  (onCardDropEvent)="handleCardDrop($event)">
    </ng-swimlanes>
  `
})
export class MyComponent {
  options = {
    // Define swimlanes options here
  };

  items = [
    // Provide your data here
  ];

  handleCardClick(event: any) {
    // Handle card click event here
  }

  handleCardDrop(event: any) {
    // Handle card drop event here
  }
}
```

## Options

The `swimlanesOptions` input accepts an object that defines the swimlanes layout. You can customize the appearance and behavior of the swimlanes using the following options:

```typescript
swimlanesOptions = [
        {
          id:"2",
          label:'Backlog',
          headerColor: 'Red',
          textColor:'white'
        },
        {
          id:"3",
          label:'To Do',
          headerColor: '#000000',
          textColor:'white'
        },
        {
          id: "4",
          label: 'In Progress',
          headerColor: 'rgb(0, 255, 166)',
          textColor:'white'
        },
        {
          id: "5",
          label: 'Completed',
          headerColor: 'darkgreen',
          textColor:'white'
        }
      ];
```
The 'data' input accepts an array in below format:

```typescript
data = [
      {
        id: 1,
        name: 'test',
        description: 'test desc',
        date: '18-04-2023',
        user: 'Tushar',
        statusId:"2",
        tags: ['Trail','test','Trail','test']              
      },
      {
        id: 2,
        name: 'test 2',
        description: 'test desc 2',
        date: '19-04-2023',
        user: 'Patil',
        statusId:"2",
        tags: ['Trail 2']              
      },
      {
        id: 3,
        name: 'test3',
        description: 'test desc 3',
        date: '18-03-2023',
        user: 'Tush3ar',
        statusId:"4",
        tags: ['Tr3ail']              
      },
      {
        id: 4,
        name: 'test 4',
        description: 'test desc4',
        date: '14-04-2023',
        user: 'P4atil',
        statusId:"4",
        tags: ['T4rail 2']           
      }
    ];
```

## Events

The library emits two events:

- `onCardClickEvent`: This event is emitted when a card is clicked. The event object contains information about the clicked card.

- `onCardDropEvent`: This event is emitted when a card is dragged and dropped from one swimlane to another. The event object contains information about the dropped card and the source and destination swimlanes.

To handle these events, bind to them using Angular event binding, as shown in the usage example.

## Contributions

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/tusharpatil2912/ng-swimlanes).

## License

This library is released under the [MIT License](https://opensource.org/licenses/MIT).
