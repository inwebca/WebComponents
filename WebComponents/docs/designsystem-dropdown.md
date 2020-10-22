# designsystem-dropdown

Voici la description du dropdown.

## Examples

```html
<designsystem-dropdown data-id="test" data-url="/api/doc"></designsystem-dropdown>
```

```javascript
// selectionner objet via javascriptvar monDropdown = document.querySelector("designsystem-dropdown");monDropdown.exempleFunction1();
```

## Attributes

| Attribute  | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| `data-id`  | `string` | Le id                                            |
| `data-url` | `string` | L'url appelé pour populer les options du dropdown. Si non fourni, le data sera un Array avec |

## Properties

| Property  | Type          | Description                 |
|-----------|---------------|-----------------------------|
| `data`    | `Array.<obj>` | Objet data dans le dropdown |
| `obj.Id`  | `number`      | Le id de l'option           |
| `obj.Nom` | `string`      | Le nom de l'option          |

## Methods

| Method                    | Type       | Description                                      |
|---------------------------|------------|--------------------------------------------------|
| `exempleFunction1`        | `(): void` | Affiche une alerte.                              |
| `exempleFunctionAgrandir` | `(): void` | Leve un trigger 'agrandir' qui ajoute une classe css au dropdown |
| `exempleFunctionTrigger`  | `(): void` | Leve un trigger 'obtenirData'                    |

## Events

| Event         | Type                                             |
|---------------|--------------------------------------------------|
| `agrandir`    | `CustomEvent<any>`                               |
| `obtenirData` | `CustomEvent<{ value1: number; value2: number; }>` |
