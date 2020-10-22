# designsystem-button

Exemple bouton

## Examples

```html
<designsystem-button texte="test11112"></designsystem-button>
```

```javascript
// selectionner objet via javascriptvar monBouton = document.querySelector("designsystem-button");
```

## Properties

| Property | Attribute | Type     | Description     |
|----------|-----------|----------|-----------------|
| `button` | `button`  | `object` |                 |
| `texte`  | `texte`   | `String` | Texte du bouton |

## Methods

| Method    | Type       |
|-----------|------------|
| `onclick` | `(): void` |

## Events

| Event      | Type                                | Description              |
|------------|-------------------------------------|--------------------------|
| `surClick` | `CustomEvent<{ message: string; }>` | Retourne un objet Event1 |
