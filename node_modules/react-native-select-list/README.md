# React Native Select List

Simple **select** for React Native Applications.

[![GitHub issues](https://img.shields.io/github/issues/georgest/react-native-select-list.svg)](https://github.com/georgest/react-native-select-list/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/georgest/react-native-select-list/blob/master/LICENSE)

<img src="http://georgest.me/images/projects/react-native-select-list/demo.jpg" width="320" />
___

## Instalation

```
npm i react-native-select-list --save-dev
```


## Usage

```js
import { Select, Option } from 'react-native-select-list';

<Select>
  <Option value={1}>List item 1</Option>
  <Option value={2}>List item 2</Option>
  <Option value={3}>List item 3</Option>
</Select>
```

### Select properties

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **onSelect** | Function | null | This function is invoked when some option is selected. |
| **padding** | number | 10 | Horizontal padding for select box. Text is always centered vertially. |
| **zIndex** | number | 999 | It is used to pop the select above all other elements. |
| **selectStyle** | Object | null | Set custom style to your select. |
| **selectTextStyle** | Object | null | Set custom style to your select box text. |
| **caret** | string or React element | null | You can set default caret with setting this property to 'down' or 'up'. If you want to set some custom image or view you can set an element to the caret property. Explicitly set width and height to caret element if you are using an Image element. |
| **caretSize** | number | 15 | Customize caret size. It is used only when caret is set to 'down' or 'up'. |
| **caretColor** | string | '#333333' | Customize caret color. It is used only when caret is set to 'down' or 'up'. |
| **listHeight** | number | 100 | The maximum list height.
| **listPosition** | string | 'down' | Change position of dropdown list. You can set it 'up', so it will shows above the select. If dropdown cannot fit the screen size it will expand to the oposite direction. |
| **listStyle** | Object | null | Styles for dropdown list.

### Option properties

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| **optionStyle** | Object | null | Set custom style to Option element. |
| **optionTextStyle** | Object | null | Set custom style to Option text. |
| **last** | boolean | false | Add it to last element so it will not have bottom border. |
